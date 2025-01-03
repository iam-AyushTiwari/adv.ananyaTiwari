import React from "react";

const Footer = () => {
  return (
    <>
      {/* component */}
      {/* This is an example component */}
      <div className="bg-[#070b15] overflow-hidden p-6 md:p-0">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3 font-semibold">
              Facing legal challenges? I'm here to help
            </h3>
            <p className="text-xl md:text-3xl text-neutral-600">
              "Justice delayed is justice denied." - William E. Gladstone
            </p>
            <div className="flex justify-center my-10">
              <form className="flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-md mx-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-gray-900 bg-transparent focus:outline-none placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-600 hover:to-blue-700 transition duration-300 ease-in-out rounded-full"
                >
                  Connect
                </button>
              </form>
            </div>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              2024 &copy; Designed and Developed by{" "}
              <a
                href="https://www.linkedin.com/company/101201003/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline"
              >
                Insiden
              </a>
            </p>
            <div className="order-1 md:order-2">
              <a href="/about" className="px-2 hover:underline">
                About us
              </a>
              <a href="/contact" className="px-2 border-l hover:underline">
                Contact us
              </a>
              <a
                href="/privacy-policy"
                className="px-2 border-l hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
