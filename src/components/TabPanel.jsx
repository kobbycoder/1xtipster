import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { analytics } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";
import getData from "@/lib/utils/getData";

export default function TabPanel({ date }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    analytics;
    fetchData(date);
  }, [date]);

  const fetchData = async (date) => {
    getData(date).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div className="rounded-xl w-full max-h-screen overflow-scroll mt-5 bg-gray-800 ">
      {data ? (
        <div className="flex flex-col space-y-4 p-2">
          {data.map((response) => {
            return (
              <Link key={response.id} href={`/matches/${date}/${response.id}`}>
                <div className="flex items-center w-full justify-between p-2 hover:bg-gray-700 rounded-xl bg-gray-900 cursor-pointer">
                  <div className="flex overflow-x-auto">
                    <Image
                      src={response.flag}
                      className="w-9 h-9 rounded-full"
                      alt="Avatar"
                      width={1000}
                      height={1000}
                    />

                    <div className="flex flex-col ml-5">
                      <h1 className="text-sm font-bold text-gray-200">
                        {response.name}
                      </h1>
                      <h1 className="text-xs text-gray-400">
                        {response.country}
                      </h1>
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
