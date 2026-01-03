"use cache";


import { ContactForm } from "./ContactForm";

const Contact = async() => {
  
  return (
    <>
      <div className="text-white bg-linear-to-r from-black via-red-500/35  to-black pt-24" id="contact">
        <h1 className="md:text-5xl font-extrabold text-center">CONTACT US</h1>
      </div>
      <section className="relative text-white bg-linear-to-r from-black via-red-500/35  to-black flex flex-col md:flex-row justify-center px-4 py-20 gap-20">
        <div className="text-center md:text-left mt-12">
          <div className="flex items-center  p-1.5 rounded-full border border-red-900 text-xs w-fit mx-auto md:mx-0">
            <div className="flex items-center">
              <img
                className="size-7 rounded-full border border-red-900"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                alt="userImage1"
              />
              <img
                className="size-7 rounded-full border border-red-900 -translate-x-2"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                alt="userImage2"
              />
              <img
                className="size-7 rounded-full border border-red-900 -translate-x-4"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                alt="userImage3"
              />
            </div>
            <p className="-translate-x-2 text-xs text-slate-200">
              Join community of 1m+ founders{" "}
            </p>
          </div>
          <h2 className="font-medium text-3xl md:text-5xl/15 bg-linear-to-r from-white to-red-300 bg-clip-text text-transparent max-w-117.5 mt-4">
            Have questions or need assistance?
          </h2>
          <p className="text-sm/6 text-white max-w-86.25 mt-4 mx-auto md:mx-0">
            {" "}
            Our team is here to help you on your fitness journey. Reach out to
            us anytime!
          </p>
        </div>

        <div className="w-full max-w-lg bg-[#00A63E]/0 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <ContactForm/>
        </div>
      </section>
    </>
  );
};

export default Contact;
