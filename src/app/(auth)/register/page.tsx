"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import socket from "@/utils/socket";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required().min(3).max(20),
      last_name: Yup.string().required().min(3).max(20),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("http://localhost:4000/api/auth/user/register", values, {
          withCredentials: true,
        });

        const user = response.data.user;
        socket.emit("register", { user_id: user.user_id, role: user.role });

        toast.success("Registration successful! Redirecting...");
        resetForm();

        setTimeout(() => router.push("/login"), 2000);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          toast.error(err.response?.data?.message || "Registration failed");
        } else {
          toast.error("Registration failed");
        }
        console.error(err);
      }
    },
  });

  return (
    <main className="h-[120vh] bg">
      <div className='bg-blur flex items-center justify-center h-full px-4'>
        <div className="w-full max-w-md bg-black/50 rounded-xl p-6 my-6">
          <h2 className="text-2xl font-bold text-center text-ActionPurple mb-4">Sign Up</h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="text-gray-300">First Name<span className='text-red-500'>*</span></label>
              <input name="first_name" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.first_name} className="w-full p-2 rounded-md" />
              {formik.touched.first_name && formik.errors.first_name && (
                <p className="text-sm text-red-500">{formik.errors.first_name}</p>
              )}
            </div>

            <div>
              <label className="text-gray-300">Last Name<span className='text-red-500'>*</span></label>
              <input name="last_name" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.last_name} className="w-full p-2 rounded-md" />
              {formik.touched.last_name && formik.errors.last_name && (
                <p className="text-sm text-red-500">{formik.errors.last_name}</p>
              )}
            </div>

            <div>
              <label className="text-gray-300">Email<span className='text-red-500'>*</span></label>
              <input name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="w-full p-2 rounded-md" />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-gray-300">Password<span className='text-red-500'>*</span></label>
              <div className="relative">
                <input
                  type={isOpen ? "text" : "password"}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  autoComplete="new-password"
                  className="w-full p-2 rounded-md"
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
              className="bg-ActionPurple text-white py-2 w-full rounded-md"
            >
              Sign Up
            </button>
          </form>

          <p className="text-gray-400 text-center mt-4">
            Already have an account? <a href="/login" className="text-ActionPurple">Login</a>
          </p>
        </div>
      </div>
    </main>
  );
};
