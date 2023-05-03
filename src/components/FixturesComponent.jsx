"use client";
import Image from "next/image";
import live from "../assets/live.svg";
import React, { useState, useEffect } from "react";
import { isValid } from "date-fns";
import getFixtures from "@/lib/utils/getFixtures";

export default function FixturesComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const newDate = new Date();
    if (isValid(newDate)) {
      var items = [];
      const formattedDate = new Intl.DateTimeFormat("en-US").format(newDate);
      const dateParts = formattedDate.split("/");
      const date = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
      const rearrangedDate = date.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      getFixtures(rearrangedDate).then((res) => {
        const data = res.data;
        for (let index = 0; index < data.length; index++) {
          const element = data[index].leagues;
          for (let i = 0; i < element.length; i++) {
            const data = element[i];
            items.push({ ...data });
          }
        }
        setData([...items]);
      });
    } else {
      console.log("Invalid date");
    }
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
      <div className="rounded-xl w-full bg-gray-800">
        <div className="px-4 py-2 flex justify-between items-center">
          <div className="flex flex-col md:space-x-1 md:flex-row">
            <h1 className="font-bold text-xs text-gray-300">Fixtures ⚽</h1>
            <h1 className="font-bold text-xs text-gray-300">
              ({getProperDate()} 🔥)
            </h1>
          </div>
          <div>
            <a href="/fixtures/live">
              <div className="flex space-x-1 bg-gray-900 rounded-xl p-2 animate__animated animate__flash">
                <Image
                  src={live}
                  alt="soccer_team"
                  height={1000}
                  width={50}
                  className="w-4 h-4"
                  priority={true}
                />
                <p className="text-xs font-bold">Live</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-xl w-full max-h-screen overflow-scroll mt-3 bg-gray-800">
        {data ? (
          data.map((res) => {
            return (
              <div key={res.key} className="p-2">
                <div className="w-full flex text-sm items-center p-3 space-x-2 bg-gray-900 rounded-t-lg ">
                  <Image
                    src={`https://static.holoduke.nl/footapi/images/flags/${res.country.toLowerCase()}.png?v=1`}
                    alt="soccer_team"
                    height={1000}
                    width={50}
                    className="w-8 h-8"
                    priority={true}
                  />
                  <h2 className="text-gray-300">{res.league}</h2>
                </div>
                <div className="p-2">
                  {res.matches.map((match, index) => (
                    <div key={index} className="">
                      <div className="flex bg-gray-700 mt-3 rounded-xl py-2 text-gray-300">
                        <div className="flex flex-col justify-center items-center w-1/3">
                          <Image
                            src={`https://static.holoduke.nl/footapi/images/teams_gs/${match.gs_localteamid}_small_rnd.png?v=1`}
                            alt="soccer_team"
                            height={1000}
                            width={50}
                            className="w-8 h-8"
                            priority={true}
                          />
                          <h1 className="text-xs md:mt-1 text-center p-2 font-bold">
                            {match.localteam}
                          </h1>
                        </div>
                        <div className="w-1/3 flex flex-col justify-center items-center space-y-2">
                          <h1>vs</h1>
                          <h1 className="text-xs">{match.time}</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center w-1/3">
                          <Image
                            src={`https://static.holoduke.nl/footapi/images/teams_gs/${match.gs_visitorteamid}_small_rnd.png?v=1`}
                            alt="soccer_team"
                            height={1000}
                            width={50}
                            className="w-8 h-8"
                            priority={true}
                          />
                          <h1 className="text-xs md:mt-1 text-center p-2 font-bold">
                            {match.visitorteam}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
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
