import React from "react";

export default function VipComponent() {
  return (
    <div className="rounded-xl w-full h-full overflow-scroll bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="font-bold text-gray-300">👑 VIP</h1>
      </div>
      <div className="flex justify-center mt-10">
        <div className="">
          <h1 className="text-center text-xs px-6">
            Advantages for Paid Users (starting from 10,- Dollars $)
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mt-10">
            <div className="text-center bg-gray-900 p-4 rounded-lg">
              <h1 className="text-sm">Silver 🥈</h1>
              <ul className="text-xs">
                <li>10+ odds daily</li>
              </ul>
              <div className="bg-teal-600 cursor-pointer p-2 rounded-lg mt-2">
                $10/month
              </div>
            </div>
            <div className="text-center bg-gray-900 p-4 rounded-lg">
              <h1 className="text-sm">Gold 🥇</h1>
              <ul className="text-xs">
                <li>20+ odds daily</li>
              </ul>
              <div className="bg-teal-600 cursor-pointer p-2 rounded-lg mt-2">
                $30/month
              </div>
            </div>
            <div className="text-center bg-gray-900 p-4 rounded-lg col-start-1 col-end-3 lg:col-start-auto lg:col-end-auto">
              <h1 className="text-sm">Platinum 🥉</h1>
              <ul className="text-xs">
                <li>30+ odds daily</li>
              </ul>
              <div className="bg-teal-600 cursor-pointer p-2 rounded-lg mt-2">
                $50/month
              </div>
            </div>
          </div>
          <h1 className="mt-10 text-xs text-center px-4">
            If you are interested in{" "}
            <span className="font-bold">paid subscription</span>, please contact
            us by mail:
          </h1>
          <a href="mailto:info@1xtipster.com" className="underline flex justify-center mt-5">
            info@1xtipster.com
          </a>
        </div>
      </div>
    </div>
  );
}
