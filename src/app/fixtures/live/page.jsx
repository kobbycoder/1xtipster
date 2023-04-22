import React from 'react'
import AffiliateAdPlacement from '@/components/AffiliateAdPlacement'
import LiveComponent from '@/components/LiveComponent'

export default function page() {
  return (
    <div className="flex w-full min-h-screen justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>

      <div className="w-full p-6 lg:p-0 lg:pt-6 md:pt-6">
        <LiveComponent />
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>
    </div>
  )
}
