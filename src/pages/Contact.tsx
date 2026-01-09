import Header from "../components/Header/Header";
import { Social } from "../components/Social";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast"; // ← Add this import

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const sendingToast = toast.loading("Sending your message...");

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_kjmwztj",
          "template_v26016l",
          formRef.current,
          "VYnyVI5S5FY0jPK0N"
        )
        .then(
          () => {
            toast.success("Message sent successfully!", {
              id: sendingToast,
            });
            formRef.current?.reset();
          },
          (error) => {
            toast.error("Failed to send. Please try again.", {
              id: sendingToast,
            });
            console.error(error);
          }
        );
    }
  };

  return (
    <div className="min-h-[100vh] pt-[70px] flex">
      <Social />
      <div className="flex flex-col gap-6 xl11:gap-0 items-center mx-auto justify-items-center px-6 pb-[100px]">
        <Header subtitle="Let's talk about it!" initial="Contact " title="Me" />
        <div className="pt-12 w-full">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 w-full max-w-xl mx-auto"
          >
            <input
              className="p-3 rounded-md dark:bg-[#252525] w-full focus:outline-none text-[13px]"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="p-3 rounded-md dark:bg-[#252525] w-full focus:outline-none text-[13px]"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="p-3 rounded-md dark:bg-[#252525] h-[150px] w-full focus:outline-none text-[13px] resize-none"
              name="message"
              placeholder="Your Message"
              required
            />
            <button
              type="submit"
              className="p-3 my-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-[14px] font-medium transition"
            >
              Send Message
            </button>

            <div className="flex sm:flex-col md:flex-col lg:flex-row flex-col gap-4 pt-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kennethsanpedro1108@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:w-[50%]  dark:bg-[#252525] bg-[#fff] px-12 py-2 rounded-lg flex items-center justify-center gap-4 cursor-pointer  dark:hover:bg-[#2e2e2e]"
              >
                <img
                  className="w-[25px] h-[25px]"
                  src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                  alt="Gmail"
                />
                <p className="text-[12px]">kennethsanpedro1108@gmail.com</p>
              </a>
              <div className="lg:w-[50%] w-full dark:bg-[#252525] bg-[#fff] px-4 py-2 rounded-lg flex items-center justify-center gap-4">
                <img
                  className="w-[25px] h-[25px]"
                  src="https://img.icons8.com/?size=100&id=9730&format=png&color=3B82F6"
                  alt="Phone"
                />
                <p className="text-[12px]">+639267353866</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
