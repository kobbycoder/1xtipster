"use client";
import React, { useState, useEffect } from "react";
import { isValid } from "date-fns";
import TipsDialog from "./TipsDialog";
import Image from "next/image";

export default function MatchesComponent({ date, id }) {
  const [data, setData] = useState(null);
  const [awayTeamPercentage, setAwayTeamPercentage] = useState("");
  const [homeTeamPercentage, setHomeTeamPercentage] = useState("");
  const [drawPercentage, setDrawPercentage] = useState("");
  const [homeTip, setHomeTip] = useState("");
  const [awayTip, setAwayTip] = useState("");
  const [leagueName, setLeagueName] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchData(date);
  }, [date]);

  const fetchData = async (date) => {
    const newDate = new Date(date);
    if (isValid(newDate)) {
      const formattedDate = new Intl.DateTimeFormat("en-US").format(newDate);
      const response = await fetch(`/api/predictions?date=${formattedDate}`);
      const data = await response.json();
      const targetObject = data.find((obj) => obj.id === parseInt(id));
      setLeagueName(targetObject.name);
      setData(targetObject.matches);
    } else {
      console.log("Invalid date");
    }
  };

  function addOrdinalSuffix(number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const value = number % 100;
    const suffix =
      suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
    return `${number}${suffix}`;
  }

  const getProperDate = (dateStr) => {
    const date = new Date(dateStr.replace(" ", "T"));

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const day = addOrdinalSuffix(date.getDate());
    const formattedDate = date
      .toLocaleString("en-US", options)
      .replace(/(\d+)(?!<sup>\d+<\/sup>)(?=\S*$)/g, day);

    return formattedDate;
  };

  const openTipsDialog = (
    awayteam,
    hometeam,
    draw,
    homeGoalTip,
    awayGoalTip
  ) => {
    setAwayTeamPercentage(awayteam);
    setHomeTeamPercentage(hometeam);
    setDrawPercentage(draw);
    setHomeTip(homeGoalTip);
    setAwayTip(awayGoalTip);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="rounded-xl w-full max-h-screen overflow-scroll mt-5 bg-gray-800">
        <div className="px-4 py-2">
          <h1 className="font-bold text-gray-300">Matches</h1>
          <h1 className="font-bold text-xs text-gray-400 mt-1">{leagueName}</h1>
        </div>
        {data ? (
          <div className="flex flex-col space-y-4 p-2">
            {data.map((res) => {
              return (
                //   <Link key={res.id} href={`/matches/${date}/${res.id}`}>
                <div
                  key={res.id}
                  className="flex items-center w-full justify-between p-4 hover:bg-gray-700 rounded-xl bg-gray-900 cursor-pointer"
                >
                  <div className="flex w-full overflow-auto items-center">
                    <div className="flex flex-col w-1/3 text-center space-y-4 items-center">
                      <Image
                        src={res.home_team.badge}
                        className="w-9 h-9 rounded-full bg-transparent"
                        alt="Avatar"
                        width={1000}
                        height={1000}
                      />

                      <h1 className="text-xs font-bold text-gray-300">
                        {res.home_team.name}
                      </h1>
                    </div>

                    <div className="flex flex-col justify-center text-center w-1/3 space-y-4 items-center">
                      <h1 className="text-xs text-gray-200 font-bold">
                        Tip: {res.tip}
                      </h1>
                      <h1 className="text-xs text-gray-300">
                        {getProperDate(res.start_date)}
                      </h1>
                      <div
                        onClick={() =>
                          openTipsDialog(
                            res.away_win_percentage,
                            res.home_win_percentage,
                            res.draw_percentage,
                            res.home_goals_tip,
                            res.away_goals_tip
                          )
                        }
                        className="bg-teal-600 text-xs px-2 cursor-pointer py-1 rounded-lg"
                      >
                        More tips 📜
                      </div>
                    </div>

                    <div className="flex flex-col w-1/3 space-y-4 text-center items-center">
                      <Image
                        src={res.away_team.badge}
                        className="w-9 h-9 rounded-full items-center bg-transparent"
                        alt="Avatar"
                        width={1000}
                        height={1000}
                      />

                      <h1 className="text-xs font-bold text-gray-300">
                        {res.away_team.name}
                      </h1>
                    </div>
                  </div>
                </div>
                //   </Link>
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
      <TipsDialog
        open={isOpen}
        onClose={closeModal}
        awayPercent={awayTeamPercentage}
        homePercent={homeTeamPercentage}
        drawPercent={drawPercentage}
        homeTip={homeTip}
        awayTip={awayTip}
      />
    </>
  );
}
