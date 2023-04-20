"use client";
import { useState, useEffect } from "react";
import getDocument from "@/Firebase/getData";
import Image from "next/image";

export default function AffiliateAdPlacement({ collection, id }) {
  const [ad, setAd] = useState("");
  const [link, setLink] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const fetchAds = async () => {
      const ads = await getDocument(collection, id);
      for (let index = 0; index < ads.length; index++) {
        const ad = ads[index].ad;
        const link = ads[index].link;

        setAd(ad);
        setLink(link);
      }
    };

    fetchAds();
  }, [collection, id]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="py-6 w-full flex justify-center">
        {!isImageLoaded && (
          <div
            className="animate-pulse h-full opacity-25"
            style={{ width: 150, backgroundColor: "#E8E8E8" }}
          />
        )}
        {ad && (
          <a href={link} target="_blank" className="cursor-pointer">
            <Image
              className="block w-32 h-full"
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
