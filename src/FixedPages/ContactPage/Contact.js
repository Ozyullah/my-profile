
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import contactIMG from "../../assets/images/contact.png";
import "./Contact.css"; // ✅ We’ll add animation styles here

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_9dub4ra",
        "template_ms5my54",
        form.current,
        "wSgiyP5XFSIy25aZh"
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative w-10/12 py-20 px-6 md:px-12 overflow-hidden mx-auto rounded-3xl shadow-2xl bg-gradient-to-br from-sky-50 via-white to-sky-100 dark:from-[#0a0f1c] dark:via-[#0a1528] dark:to-[#081018] transition-colors duration-700">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="wave-bg"></div>
        <div className="wave-bg delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-10 font-serif text-sky-700 dark:text-sky-300"
        >
          Let’s Connect 💫
          <div className="mx-auto mt-3 w-24 h-1 bg-gradient-to-r from-sky-400 to-orange-400 rounded-full"></div>
        </motion.h2>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700 dark:text-gray-300 mb-12"
        >
          <div className="flex items-center gap-3 bg-white/60 dark:bg-white/10 backdrop-blur-lg px-5 py-3 rounded-2xl shadow-md">
            <IoIosMailOpen className="text-sky-500 text-2xl" />
            <span className="font-medium">md.habibullah7520@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 bg-white/60 dark:bg-white/10 backdrop-blur-lg px-5 py-3 rounded-2xl shadow-md">
            <FaPhoneAlt className="text-sky-500 text-xl" />
            <span className="font-medium">+8801609-111813</span>
          </div>
        </motion.div>

        {/* Image + Form */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <img
              src={contactIMG}
              alt="Contact"
              className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 w-4/5"
            />
          </motion.div>

          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full bg-white/60 dark:bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-8 space-y-8 border border-white/40 dark:border-white/10"
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="peer p-2 w-full border-b-2 border-sky-400/50 bg-transparent py-3 placeholder-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border-sky-500 transition"
                placeholder="Name"
              />
              <label className="absolute left-0 -top-3.5 text-sky-700 dark:text-sky-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sky-500 dark:peer-focus:text-sky-300">
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="peer p-2 w-full border-b-2 border-sky-400/50 bg-transparent py-3 placeholder-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border-sky-500 transition"
                placeholder="Email"
              />
              <label className="absolute left-0 -top-3.5 text-sky-700 dark:text-sky-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sky-500 dark:peer-focus:text-sky-300">
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows="4"
                required
                className="peer p-2 w-full border-b-2 border-sky-400/50 bg-transparent py-3 placeholder-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border-sky-500 transition resize-none"
                placeholder="Message"
              ></textarea>
              <label className="absolute left-0 -top-3.5 text-sky-700 dark:text-sky-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sky-500 dark:peer-focus:text-sky-300">
                Message
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full py-3 text-white font-semibold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 rounded-xl shadow-lg hover:shadow-sky-400/30 dark:hover:shadow-sky-600/30 transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Feedback */}
            {status === "success" && (
              <p className="text-green-600 dark:text-green-400 text-sm font-semibold text-center">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 dark:text-red-400 text-sm font-semibold text-center">
                ❌ Failed to send. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;