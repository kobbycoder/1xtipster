import React from 'react'
import AffiliateAdPlacement from '@/components/AffiliateAdPlacement'
import AnalysisComponent from '@/components/AnalysisComponent'

export default function page() {
  return (
    <div className="flex w-full min-h-screen justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>

      <div className="w-full p-6 lg:p-0 lg:pt-6 md:pt-6">
        <AnalysisComponent />
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>
    </div>
  )
}
