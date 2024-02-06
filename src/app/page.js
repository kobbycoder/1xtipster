import AffiliateAdPlacement from "@/components/AffiliateAdPlacement";
import Tabs from "@/components/Tabs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// This function can be named anything

export default async function Home() {
  return (
    <main className="flex w-full min-h-screen justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>

      <div className="w-full py-6">
        <div className="w-full px-6 lg:px-0 h-full flex flex-col gap-3 justify-center items-center">
          {/* <Tabs /> */}
          <a
            href="/fixtures"
            className="bg-teal-600 p-10 rounded-lg text-2xl font-bold"
          >
            GO TO FIXTURES
          </a>
          <a
            href="/fixtures"
            className=" bg-cyan-500 p-10 rounded-lg text-2xl font-bold"
          >
            GO TO ANALYSIS
          </a> 
          <a
            href="/fixtures"
            className=" bg-indigo-500 p-10 rounded-lg text-2xl font-bold"
          >
            GO TO VIP
          </a> 
        </div>
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="3" />
      </div>
    </main>
  );
}
