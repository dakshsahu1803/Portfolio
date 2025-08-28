import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axbtt7a",  // Replace with your EmailJS Service ID
        "template_1ziboq3",  // Replace with your EmailJS Template ID
        form.current,
        "Rz7W9pVF0HdDryNNL"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text-primary">CONTACT</h2>
        {/* THEME: Changed color to primary */}
        <div className="w-32 h-1 bg-primary mx-auto mt-4"></div>
        <p className="text-text-secondary mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      {/* THEME: Changed background and border colors */}
      <div className="mt-8 w-full max-w-md bg-surface p-6 rounded-lg shadow-lg border border-white/10">
        <h3 className="text-xl font-semibold text-text-primary text-center">
          Contact Me
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            // THEME: Changed input styling
            className="w-full p-3 rounded-md bg-background text-text-primary border border-white/20 focus:outline-none focus:border-primary"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            // THEME: Changed input styling
            className="w-full p-3 rounded-md bg-background text-text-primary border border-white/20 focus:outline-none focus:border-primary"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            // THEME: Changed input styling
            className="w-full p-3 rounded-md bg-background text-text-primary border border-white/20 focus:outline-none focus:border-primary"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            // THEME: Changed input styling
            className="w-full p-3 rounded-md bg-background text-text-primary border border-white/20 focus:outline-none focus:border-primary"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            // THEME: Changed button styling to a solid color
            className="w-full bg-primary py-3 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;