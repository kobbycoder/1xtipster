import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("Today");

  const today = dayjs().format("YYYY-MM-DD");
  const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
  const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

  const tabs = [
    { name: "Today", date: today },
    { name: "Yesterday", date: yesterday },
    { name: "Tomorrow", date: tomorrow },
  ];

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-800 p-1">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className={`${
                currentTab === tab.name
                  ? "bg-teal-600 text-white shadow"
                  : "text-gray-500 hover:bg-white/[0.12] hover:text-white"
              } w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2`}
              onClick={() => handleTabChange(tab.name)}
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.name}>
            <MyTabPanel date={tab.date} />
          </Tab.Panel>
        ))}
      </Tab.Group>
    </div>
  );
}

function MyTabPanel({ date }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [date]);

  const fetchData = async () => {
    const response = await fetch(`/api/predictions?date=${date}`);
    const data = await response.json();
    setData(data);
  };

  return (
    <div className="rounded-xl w-full max-h-screen overflow-scroll mt-5 bg-gray-800 ">
      {data ? (
        <div className="flex flex-col space-y-4 p-2">
          {data.map((res) => {
            return (
              <Link key={res.id} href={`/matches/${date}/${res.id}`}>
                <div className="flex items-center w-full justify-between p-2 hover:bg-gray-700 rounded-xl bg-gray-900 cursor-pointer">
                  <div className="flex overflow-x-auto">
                    <Image
                      src={res.flag}
                      className="w-9 h-9 rounded-full"
                      alt="Avatar"
                      width={1000}
                      height={1000}
                    />

                    <div className="flex flex-col ml-5">
                      <h1 className="text-sm font-bold text-gray-200">
                        {res.name}
                      </h1>
                      <h1 className="text-xs text-gray-400">{res.country}</h1>
                    </div>
                  </div>

                  <ChevronRightIcon className="w-6 h-6 text-teal-500" />
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center my-5">
          <div
            className="h-8 flex justify-center w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-teal-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
