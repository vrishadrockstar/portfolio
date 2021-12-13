import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                64 Mahajan Colony N2 CIDCO Aurangabad - 431001 <br />
                Maharashtra, India
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                vrushali.joshi99@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+91 - 7620875199</p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                SOCIAL
              </h2>
              <p className="leading-relaxed">
                <a
                  href="https://www.linkedin.com/in/vrushali-joshi-969946aa/"
                  target="_blank"
                >
                  LINKEDIN
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
