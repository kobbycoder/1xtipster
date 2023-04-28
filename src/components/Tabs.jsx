"use client";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { startOfToday, subDays, addDays, format } from "date-fns";
import TabPanel from "./TabPanel";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("Today");

  const today = startOfToday();
  const yesterday = subDays(today, 1);
  const tomorrow = addDays(today, 1);

  const formattedToday = format(today, "yyyy-MM-dd");
  const formattedYesterday = format(yesterday, "yyyy-MM-dd");
  const formattedTomorrow = format(tomorrow, "yyyy-MM-dd");

  const tabs = [
    { name: "Today", date: formattedToday },
    { name: "Yesterday", date: formattedYesterday },
    { name: "Tomorrow", date: formattedTomorrow },
  ];

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  const getDate = (date) => {
    console.log(date);
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
              onClick={() => handleTabChange(tab.name, tab.date)}
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.name}>
            <TabPanel date={tab.date} />
          </Tab.Panel>
        ))}
      </Tab.Group>
    </div>
  );
}
