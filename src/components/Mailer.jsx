import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9dhulfq",
        "template_carqnha",
        e.target,
        "Hv3jJ6qCefJb4UDOm"
      )
      .then((res) => {
        console.log(res);
        e.target.reset();

        // Display success notification
        toast.success("Message sent successfully!");
      })
      .catch((err) => {
        console.log(err);
        // Display error notification
        toast.error("Failed to send message. Please try again.");
      });
  }

  return (
    <div className="mx-4 my-12 md:m-12 p-6 lg:w-2/3 rounded-lg">
      <form onSubmit={sendEmail}>
        <div className="lg:flex lg:justify-start">
          <div className="mb-4 lg:w-1/2 lg:mr-2">
            <label className="block text-[#44832a] text-sm font-bold mb-2">
              Name <span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4 lg:w-1/2 lg:ml-2">
            <label className="block text-[#44832a] text-sm font-bold mb-2">
              Subject <span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Subject"
              required
            />
          </div>
        </div>

        <div className="lg:flex">
          <div className="mb-4 lg:w-1/2 lg:mr-2">
            <label className="block text-[#44832a] text-sm font-bold mb-2">
              Email <span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4 lg:w-1/2 lg:ml-2">
            <label className="block text-[#44832a] text-sm font-bold mb-2">
              Number <span className="text-red-500">*</span>:
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Contact Number"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[#44832a] text-sm font-bold mb-2">
            Message <span className="text-red-500">*</span>:
          </label>
          <textarea
            id="message"
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="tracking-wide bg-[#58993c] hover:bg-[#3a7720] text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message!
          </button>
        </div>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
      />
    </div>
  );
};

export default Mailer;
