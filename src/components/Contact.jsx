import React from 'react';

export default function Contact() {
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const [formData, setFormData] = React.useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [status, setStatus] = React.useState('idle');
  const [feedbackMessage, setFeedbackMessage] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmailMock = (form) => {
    return new Promise((resolve, reject) => {
      console.log("Simulating email sending with form data:", {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        form,
        publicKey: EMAILJS_PUBLIC_KEY
      });

      if (
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
      ) {
        setTimeout(() => {
          reject({ text: "Please configure your EmailJS credentials." });
        }, 1500);
        return;
      }

      setTimeout(() => {
        resolve({ status: 200, text: 'OK' });
      }, 1500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setFeedbackMessage('');

    sendEmailMock(e.target)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setFeedbackMessage('Your message has been sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('error');
        if (error.text === "Please configure your EmailJS credentials.") {
          setFeedbackMessage("This form is not configured. Please add your EmailJS credentials to the code.");
        } else {
          setFeedbackMessage('Oops! Something went wrong. Please try again.');
        }
      });
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">Contact Me</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Have a question or want to work together?
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
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
          <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">
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
            disabled={status === 'sending'}
            className="w-full flex justify-center py-3 px-4 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 dark:focus:ring-offset-gray-800 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      {feedbackMessage && (
        <div
          className={`mt-6 p-4 rounded-lg text-center text-sm font-medium ${
            status === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''
          } ${
            status === 'error' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : ''
          }`}
        >
          {feedbackMessage}
        </div>
      )}
    </div>
  );
}
