import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_API_KEY;

  const [formData, setFormData] = React.useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = React.useState("idle");
  const [feedbackMessage, setFeedbackMessage] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending");
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus("success");
          setFeedbackMessage("Your message has been sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          setStatus("error");
          setFeedbackMessage("Oops! Something went wrong. Please try again");
        }
      );
  };
  return (
    <div className="bg-gradient-to-b from-black to-white dark:bg-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row py-20 justify-center items-center ">
          <div className="w-1/3 hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-black to-80% dark:bg-gradient-to-br dark:from-slate-950 dark:to-gray-600 rounded-2xl p-6 shadow-xl">
            <h1 className="text-white text-4xl font-bold text-center mb-4">
              Liked my work?
            </h1>
            <p className="text-white text-center text-lg opacity-90">
              Let's collaborate or discuss your ideas. I'm just a message away!
            </p>
          </div>

          <div className="self-start mt-10 hidden sm:block">
            <img src="./img/peeping.gif" alt="" />
          </div>
          <div className="w-2/3 max-w-md min-w-[350px] bg-gradient-to-br from-black to-white dark:bg-none dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-gray-100 dark:text-white text-center mb-2">
              Contact Me
            </h1>
            <p className="text-center text-gray-300 dark:text-gray-400 mb-8">
              Have a question or want to work together?
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-100 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow "
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-100 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-100 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  placeholder="Your message here..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex justify-center py-3 px-4 rounded-lg text-sm font-medium text-white bg-black opacity-70 dark:opacity-100 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 dark:focus:ring-offset-gray-800 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            {feedbackMessage && (
              <div
                className={`mt-6 p-4 rounded-lg text-center text-sm font-medium ${
                  status === "success"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : ""
                } ${
                  status === "error"
                    ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    : ""
                }`}
              >
                {feedbackMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
