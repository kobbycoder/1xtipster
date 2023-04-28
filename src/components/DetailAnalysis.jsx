"use client";
import React, { useState, useEffect } from "react";
import getDetails from "@/lib/utils/getDetails";

export default function DetailAnalysis({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    getDetails(id).then((data) => {
      setData(data.data);
    })
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
          <h1 className="font-bold text-xs text-gray-300">Match Analysis 📊</h1>
          <h1 className="font-bold text-xs text-gray-300">
            ({getProperDate()} 🔥)
          </h1>
        </div>
      </div>
      <div className="rounded-xl w-full max-h-screen overflow-scroll mt-4 bg-gray-800">
        {data ? (
          <div>
            <div className="lg:mt-10 mt-5 grid grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
              <div className="text-center text-xs">
                <p className="mb-2 text-gray-400">Double chance</p>
                <div
                  className="radial-progress bg-transparent text-primary-content border-4 border-teal-800"
                  style={{ "--value": data.double_chance_value }}
                >
                  {data.double_chance_value}%
                </div>
                <p className="mt-2 text-gray-400">{data.double_chance}</p>
              </div>

              <div className="text-center text-xs">
                <p className="mb-2 text-gray-400">Winner</p>
                <div
                  className="radial-progress bg-transparent text-primary-content border-4 border-teal-800"
                  style={{ "--value": data.winner_value }}
                >
                  {data.winner_value}%
                </div>
                <p className="mt-2 text-gray-400">{data.winner}</p>
              </div>

              <div className="col-start-1 col-end-3 lg:col-start-auto lg:col-end-auto text-center text-xs">
                <p className="mb-2 text-gray-400">Both Team to score</p>
                <div
                  className="radial-progress bg-transparent text-primary-content border-4 border-teal-800"
                  style={{ "--value": data.btts_value }}
                >
                  {data.btts_value}%
                </div>
                <p className="mt-2 text-gray-400">{data.btts_result}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-8 justify-items-center w-full mt-5 lg:mt-10 text-center text-xs text-gray-400 py-6 lg:py-10">
              {data.total_goal_array.map((total_goals, index) => {
                return (
                  <div key={index} className="">
                      <p>{total_goals.name} <span className="font-bold">({total_goals.odd}%)</span></p>
                      <progress
                        className="progress progress-accent w-56"
                        value={total_goals.odd}
                        max="100"
                      ></progress>
                  </div>
                );
              })}
            </div>
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
