import AffiliateAdPlacement from "@/components/AffiliateAdPlacement";
import HomeComponent from "@/components/HomeComponent";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export default async function Home() {

  return (
    <main className="flex w-full min-h-screen justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>

      <div className="w-full py-6">
        <HomeComponent />
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="3" />
      </div>
    </main>
  );
}
