"use client";

import { FC } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

// Define types for form fields
interface FormValues {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm: FC = () => {
  const initialValues: FormValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Full Name is required")
      .min(2, "Full Name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
  });

  const onSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
  
      if (res.ok) {
        alert("Message sent successfully!");
        resetForm();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch {
      alert("Something went wrong!");
    }
  };
  
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <section className="flex items-center p-5 xl:rounded-l-lg">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-bgWhite text-black py-5 lg:px-15 px-5 shadow-l rounded-2xl lg:w-full mx-auto"
      >
        <p className="text-bgOrange text-3xl pb-2 font-bold">
          Let&#39;s Connect..............
        </p>
        <h2 className="font-bold text-2xl xl:text-3xl pb-2 text-bgLightGreen">
          Send us a message
        </h2>
        <p>
          By delivering superior digital solutions, we continuously surpass our
          clients&#39; expectations. Get in touch with us for a free quote!
        </p>

        {/* Full Name */}
        <div className="mt-9">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            
            placeholder="enter your full name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full outline-none border rounded-2xl ${
              formik.touched.fullName && formik.errors.fullName
                ? "border-red-500"
                : "border-gray-400"
            } p-3 mt-2 text-black placeholder:text-gray-500`}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mt-5">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`w-full bg-transparent outline-none border rounded-2xl ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-400"
            } p-3 mt-2 text-black placeholder:text-gray-500`}
            placeholder="Enter your email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div className="mt-5">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            className={`w-full bg-transparent outline-none border rounded-2xl ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : "border-gray-400"
            } p-3 mt-2 text-black placeholder:text-gray-500`}
            rows={5}
            placeholder="Enter your message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 px-8 border-none rounded-md shadow-md cursor-pointer bg-TextDarkGreen text-white font-bold mt-5 hover:bg-TextOrange"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
