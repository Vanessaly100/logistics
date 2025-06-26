"use client"
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import socket from "../utils/socket";


type User = {
    user_id: string
    email: string
    role: 'user' | 'admin'
  } | null
  
  type AuthContextType = {
      user: User
      loading: boolean
      login: (email: string, password: string) => Promise<void>
      logout: () => void
  }

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  //  Socket registration logic AFTER user is set
  useEffect(() => {
    if (user?.user_id && user?.role) {
      socket.connect();
      socket.emit("register", {
        user_id: user.user_id,
        role: user.role,
      });
    }
  }, [user]); // Only runs when user is set

  // Run once on mount to fetch user from cookies/server
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const cookieUser = Cookies.get("user");
        if (cookieUser) {
          setUser(JSON.parse(cookieUser));
        }

        const response = await axios.get(
          "http://localhost:8000/api/user/profile",
          {
            withCredentials: true,
          }
        );

        if (response.data) {
          setUser(response.data);
          Cookies.set("user", JSON.stringify(response.data), { expires: 7 });
        }
      } catch (error) {
        console.error("Failed to verify user from server:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  //  Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.data) {
        const userData = response.data;
        setUser(userData);
        Cookies.set("user", JSON.stringify(userData), { expires: 7 });

        return userData;
      }
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("Invalid email or password");
    }
  };

  // Logout function
  const logout = async () => {
    await axios.post(
      "http://localhost:8000/api/auth/logout",
      {},
      { withCredentials: true }
    );
    setUser(null);
    Cookies.remove("user");
    socket.disconnect(); // Optionally disconnect on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
