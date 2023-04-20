import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";

export default function TabPanel({ date }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // Make API request and update data state when component mounts
  useEffect(() => {
    async function fetchData(date) {
      setData([]);
      setLoading(true);
      console.log(date);
      const response = await fetch(`/api/predictions?date=${date}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }

    fetchData(date);
  }, [date]);

  return (
    <Tab.Panels className="mt-2 overflow-auto">
      <Tab.Panel
        className={classNames(
          "rounded-xl p-3",
          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
        )}
      >
        {
          loading ? <div>Loading....</div> : data.map((res, index) => {
            console.log(res.name);
            return <h1 key={index + 1}>{res.name}</h1>;
          })
        }
      </Tab.Panel>
    </Tab.Panels>
  );
}
