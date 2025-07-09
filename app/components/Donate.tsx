"use client";

import React, { ReactNode, useState } from "react";

interface CustomButtonInterface {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: String;
}
interface CustomCardInterface {
  children: ReactNode;
  className?: String;
}

// Custom Button Component
const CustomButton = ({ children, onClick, className }: CustomButtonInterface) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-black text-white rounded-md ${className}`}
  >
    {children}
  </button>
);

// Custom Card Component
const CustomCard = ({ children, className }: CustomCardInterface) => (
  <div className={`p-6 bg-white rounded-lg shadow-md ${className}`}>{children}</div>
);

const DonateComponent = () => {
  const [activeTab, setActiveTab] = useState("Donate an Amount");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");

  const tabs = [
    "Register",
    "Donate a Book",
    "Donate an Amount",
  ];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCustomAmount(e.target.value);

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="py-8 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 border-b pb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`text-sm sm:text-base font-semibold pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content Based on Active Tab */}
        {activeTab === "Donate an Amount" && (
          <CustomCard className="mx-auto max-w-lg sm:max-w-xl">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Donate an Amount</h2>

            {/* Predefined Amounts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {[25, 50, 100, 250].map((amount) => (
                <CustomButton key={amount} className="text-center bg-black text-white hover:bg-gray-200">
                  ${amount}
                </CustomButton>
              ))}
            </div>

            {/* Custom Amount Input */}
            <input
              type="number"
              placeholder="Custom Amount"
              value={customAmount}
              onChange={handleAmountChange}
              className="w-full p-2 border rounded-md mb-4"
            />

            {/* Donation Type */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="donation-type"
                  value="one-time"
                  checked={donationType === "one-time"}
                  onChange={() => setDonationType("one-time")}
                  className="mr-2"
                />
                One-time
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="donation-type"
                  value="recurring"
                  checked={donationType === "recurring"}
                  onChange={() => setDonationType("recurring")}
                  className="mr-2"
                />
                Recurring
              </label>
            </div>

            <CustomButton className="w-full">Donate</CustomButton>
          </CustomCard>
        )}
      </div>
    </div>
  );
};

export default DonateComponent;
