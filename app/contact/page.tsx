"use client"
import React from "react";
import GeneralHero from "../components/hero-general";

export default function ContactForm() {
  return (
    <>
      <GeneralHero
        header="Let's Get in Touch"
        subheader="We'd love to hear from you and discuss how we can help elevate your digital presence."
        links={false}
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Left Section */}
        <div className="flex-grow basis-0 border border-gray-300 bg-blue-100 p-8 rounded-xl">
          <div className="space-y-6">
            <div className="my-4">
              <p className="bg-white text-center font-semibold rounded-full p-1 w-32">Chat with us</p>
              <h3 className="text-gray-800 my-6 text-2xl">hello@dropstudio@gmail.com</h3>
              <p className="text-sm text-gray-600">Inbox us for more project details</p>
            </div>
            <div className="my-4">
              <p className="bg-white text-center font-semibold rounded-full p-1 w-28">Call us</p>
              <h3 className="text-gray-800 text-center my-6 text-2xl">+952 4983 2098 2098</h3>
              <p className="text-sm text-gray-600">Chat with our team member</p>
            </div>
            <div className="my-4">
              <p className="bg-white text-center font-semibold rounded-full p-1 w-28">Visit us</p>
              <h3 className="text-gray-800 text-xl my-6">123 Maplewood Drive Springfield, IL 62704 United States</h3>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="grow-[2] basis-0">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-black">First name*</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="mt-1 w-full p-4 border border-gray-300 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-black">Last name*</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="mt-1 w-full p-4 border bg-gray-50 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-black">Email*</label>
              <input
                type="email"
                placeholder="yourmail@company.com"
                className="mt-1 w-full p-4 border border-gray-300 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-black">Country*</label>
              <input
                type="text"
                placeholder="Country"
                className="mt-1 w-full p-4 border border-gray-300 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium">Message*</label>
              <textarea
                placeholder="Leave us a message....."
                className="mt-1 w-full p-4 border border-gray-300 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              className="py-4 px-6 bg-purple-300 text-xl rounded-lg hover:bg-purple-600 focus:ring-2 focus:ring-purple-500"
            >
              Send Now
            </button>
          </form>
        </div>
        </div>
    </section>
    </>
    
    
  );
}
