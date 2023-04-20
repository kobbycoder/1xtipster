"use client";
import { useState, useEffect } from "react";
import getDocument from "@/Firebase/getData";
import Image from "next/image";

export default function Hero() {
  const [ad, setAd] = useState("");
  const [link, setLink] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const fetchAds = async () => {
      const ads = await getDocument("Ads", "1");
      for (let index = 0; index < ads.length; index++) {
        const ad = ads[index].ad;
        const link = ads[index].link;

        setAd(ad);
        setLink(link);
      }
    };

    fetchAds();
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="flex justify-center">
      <div className="p-6 w-full flex justify-center">
        {!isImageLoaded && (
          <div
          className="animate-pulse h-12 md:h-20 lg:h-28 opacity-25"
            style={{ width:728, backgroundColor: "#E8E8E8" }}
          />
        )}
        {ad && (
          <a
            href={link}
            target="_blank"
            className="cursor-pointer"
          >
          <Image
            className="block md:h-20 lg:h-28"
            src={ad}
            alt="betting"
            width={1000}
            height={50}
            priority={true}
            onLoad={handleImageLoad}
            style={{ display: isImageLoaded ? "block" : "none" }}
          />
          </a>
        )}
      </div>
    </div>
  );
}
