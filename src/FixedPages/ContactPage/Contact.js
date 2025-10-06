import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import contactIMG from "../../assets/images/contact.png";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

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
    <div className="p-6 md:p-12 bg-gradient-to-r from-sky-50 to-white rounded-2xl max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center pb-6 font-serif text-sky-700">
        Contact Me
        <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-sky-400 to-orange-400 transform -translate-x-1/2"></span>
      </h2>

      {/* contact info */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700 pb-8">
        <h3 className="flex gap-2 items-center">
          <IoIosMailOpen className="text-sky-500 text-xl" />{" "}
          md.habibullah7520@gmail.com
        </h3>
        <h3 className="flex gap-2 items-center">
          <FaPhoneAlt className="text-sky-500 text-xl" /> +8801609-111813
        </h3>
      </div>

      {/* form + image */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <img
            src={contactIMG}
            alt="Contact"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-8 pt-4 lg:w-1/2 relative"
        >
          {/* email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              required
            />
            <label id="email-lebel" className="input-lebel">
              Email
            </label>
          </div>

          {/* name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder=""
              className="input-field"
              required
            />
            <label id="name-sector" className="input-lebel">
              Name
            </label>
          </div>

          {/* message */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Write your message"
              className="text-sm max-w-xs input-field"
              required
            ></textarea>
            <label id="message-lebel" className="input-lebel">
              Message
            </label>
          </div>

          {/* submit button + loader */}
          <button
            type="submit"
            className="btn btn-info btn-outline w-60 flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <span className="loader"></span>
            ) : (
              "Send"
            )}
          </button>

          {/* feedback message */}
          {status === "success" && (
            <p className="text-green-600 text-sm font-semibold">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm font-semibold">
              ❌ Failed to send. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
