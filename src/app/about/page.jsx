import React from "react";
import AffiliateAdPlacement from "@/components/AffiliateAdPlacement";

export default function page() {
  return (
    <div className="flex w-full h-full justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>

      <div className="w-full p-6 lg:p-0 lg:pt-6 md:pt-6 text-gray-400">
        <h1 className="text-lg font-bold ">About Us 🔥</h1>

        <div className="relative flex justify-center py-5 items-center mt-5">
          <div className="w-full border-t border-gray-700"></div>
        </div>

        <div className="space-y-4 bg-gray-800 p-4">
          <p>
            Welcome to 1xtipster.com - your ultimate destination for top-value
            betting tips, match previews, and statistical analysis.{" "}
          </p>
          <p>
            Our team of expert tipsters is passionate about sports and betting,
            and we provide accurate and reliable information to help you make
            informed decisions and increase your chances of winning big. Join
            our community today and start winning with 1xtipster.com.
          </p>

          <p>
            Check out our free football tips page for yourself{" "}
            <span className="underline italic">
              <a href="/free.bets">Free bet tips</a>
            </span>{" "}
            ⚽.
          </p>
          <p>
            At 1xtipsters, we live and breathe sports. We know that there's
            nothing quite like the thrill of a good match or the excitement of
            placing a winning bet. That's why we're dedicated to providing our
            users with the best possible betting experience, whether you're a
            seasoned punter or a beginner.
          </p>
          <p>
            We feature top value bets from leagues and sports across the world,
            so no matter what your preferences are, we've got you covered. We
            cover football, basketball, tennis, cricket, horse racing, and many
            more.
          </p>

          <h1 className="font-bold">Join Our Community</h1>
          <p>
            Join our community of thousands of satisfied users and start winning
            with 1xtipster.com. We are committed to providing you with the best
            betting tips and experience, and we are confident that you will
            enjoy our services. If you have any questions or concerns, please
            don't hesitate to contact us. Thank you for choosing 1xtipster.com.
          </p>
        </div>
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>
    </div>
  );
}
// Welcome to 1xtipster.com - your ultimate destination for top-value betting tips, match previews, and statistical analysis. Our team of expert tipsters is passionate about sports and betting, and we provide accurate and reliable information to help you make informed decisions and increase your chances of winning big. Join our community today and start winning with 1xtipster.com.
