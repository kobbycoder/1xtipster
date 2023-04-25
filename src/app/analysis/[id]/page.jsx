import React from 'react'
import AffiliateAdPlacement from '@/components/AffiliateAdPlacement'
import DetailAnalysis from '@/components/DetailAnalysis'

export default function page({ params }) {
  const id = params.id;

  return (
    <div className="flex w-full min-h-screen justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>

      <div className="w-full p-6 lg:p-0 lg:pt-6 md:pt-6">
        <DetailAnalysis id={id}/>
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>
    </div>
  )
}
