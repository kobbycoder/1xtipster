import React from 'react'
import AffiliateAdPlacement from '@/components/AffiliateAdPlacement'
import VipComponent from '@/components/VipComponent'

export default function page() {
  return (
    <div className="flex w-full min-h-screen justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="4" />
      </div>

      <div className="w-full p-6 lg:p-0 lg:pt-6 md:pt-6">
        <VipComponent />
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>
    </div>
  )
}
