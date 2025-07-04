// 'use client';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import api from "../../../lib/axios";

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       const role = res.data.role;

//       // Redirect based on role
//       if (role === "admin") router.push("/admin");
//       else router.push("/user");
//     } catch (err) {
//       console.error(err);
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="p-10 max-w-md mx-auto">
//       <h1 className="text-xl font-bold">Login</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         className="border p-2 w-full my-2"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         className="border p-2 w-full my-2"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin} className="bg-black text-white p-2 rounded w-full">
//         Login
//       </button>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";

export default function Login () {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, login } = useAuth();

  useEffect(() => {
    if (user) {
      const userRole = user.role?.toLowerCase();
      if (userRole === "admin") router.push("/admin");
      else if (userRole === "user") router.push("/user/home");
    }
  }, [user, router]);

  const onSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await login(values.email, values.password);
      if (!response || response.message !== "Login successful") {
        toast.error(response?.message || "Login failed");
      } else {
        const role = response.role?.toLowerCase();
        toast.success("Login successful");
        if (role === "admin") router.push("/admin");
        else if (role === "user") router.push("/user/home");
      }
    } catch {
      toast.error("Something went wrong during login");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6).required("Required"),
    }),
    onSubmit,
  });

  return (
    <main className="min-h-screen bg">
      <div className="bg-blur flex items-center justify-center h-full px-4">
        <div className="w-full max-w-md bg-black/50 rounded-xl p-6">
          <h2 className="text-2xl text-center text-ActionPurple font-bold mb-4">Login</h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300">Email<span className='text-red-500'>*</span></label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full p-2 rounded-md focus:outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300">Password<span className='text-red-500'>*</span></label>
              <div className="relative">
                <input
                  type={isOpen ? "text" : "password"}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="w-full p-2 rounded-md focus:outline-none"
                />
                <span
                  className="absolute top-3 right-3 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-sm text-red-500">{formik.errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-ActionPurple text-white py-2 w-full rounded-md"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-gray-400 text-center mt-4">
            Don&apos;t have an account? <a href="/register" className="text-ActionPurple">Register</a>
          </p>
        </div>
      </div>
    </main>
  );
};

