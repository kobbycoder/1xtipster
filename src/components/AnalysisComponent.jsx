"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function AnalysisComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://1xtipster.com/api3/load_home_soccer.php`);
    const data = await response.json();

    setData(data.game_list);
  };
  // Function to get the ordinal suffix of a number
  function getOrdinalSuffix(number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = number % 100;
    return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
  }

  const getProperDate = () => {
    const date = new Date();

    const day = date.getDate();
    const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
    const year = date.getFullYear();

    const formattedDate = `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
    return formattedDate;
  };

  return (
    <>
      <div className="rounded-xl w-full bg-gray-800 px-4 py-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-xs text-gray-300">Analysis 📊</h1>
          <h1 className="font-bold text-xs text-gray-300">
            ({getProperDate()} 🔥)
          </h1>
        </div>
        </div>
        <div className="rounded-xl w-full max-h-screen overflow-scroll mt-4 bg-gray-800">
          {data ? (
            <div className="flex flex-col space-y-4 p-2">
              {data.map((res) => {
                return (
                  <Link key={res.event_id} href={`/analysis/${res.event_id}`}>
                    <div className="flex items-center w-full justify-between p-2 hover:bg-gray-700 rounded-xl bg-gray-900 cursor-pointer">
                      <div className="flex overflow-x-auto">
                        <div className="flex flex-col ml-5">
                          <h1 className="text-sm font-bold text-gray-200">
                            {res.event_name}
                          </h1>
                          <h1 className="text-xs text-gray-400">{res.time}</h1>
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
    </>
  );
}
