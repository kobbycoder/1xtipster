import AffiliateAdPlacement from "@/components/AffiliateAdPlacement";
import Tabs from "@/components/Tabs";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

// This function can be named anything
export async function getData() {
  const res = await fetch(`https://probet.tips/api/predictions?date=26-04-2023`, { cache: 'no-store' });
  const data = await res.json();

  return data;
}

export default async function Home() {
  const data = await getData();
  //console.log(data);

  return (
    <main className="flex w-full min-h-screen justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>

      <div className="w-full py-6">
        <div className="w-full px-6 lg:px-0 min-h-max">
        <Tabs />
        </div>
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="3" />
      </div>
    </main>
  );
}
