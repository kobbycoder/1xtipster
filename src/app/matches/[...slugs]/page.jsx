import React from "react";
import AffiliateAdPlacement from "@/components/AffiliateAdPlacement";
import MatchesComponent from "@/components/MatchesComponent";

export default function page({ params }) {
  const date = params.slugs[0];
  const id = params.slugs[1];

  return (
    <div className="flex w-full min-h-screen justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="4" />
      </div>

      <div className="w-full p-6 lg:p-0 lg:pt-6 md:pt-6">
        <MatchesComponent date={date} id={id} />
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>
    </div>
  );
}
