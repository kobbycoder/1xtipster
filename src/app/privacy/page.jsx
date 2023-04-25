import React from "react";
import AffiliateAdPlacement from "@/components/AffiliateAdPlacement";

export default function page() {
  return (
    <div className="flex w-full h-full justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>

      <div className="w-full p-6 lg:p-0 lg:pt-6 md:pt-6 text-gray-400">
        <h1 className="text-lg font-bold ">Privacy Policy 🔏</h1>

        <div className="relative flex justify-center py-5 items-center mt-5">
          <div className="w-full border-t border-gray-700"></div>
        </div>

        <div className="space-y-4 bg-gray-800 p-4">
          <p>
            At 1xtipster.com, we are committed to respecting your privacy. This
            Privacy Policy sets out the ways in which we collect, use, and
            protect your information.{" "}
          </p>

          <h1 className="font-bold">Information We Collect</h1>
          <p>We use the non-personal information we collect to:</p>
          <ul style={{ listStyleType: "decimal" }} className="mx-3">
            <li>Improve our website and services.</li>
            <li>Personalize your experience on our website.</li>
            <li>
              Communicate with you about updates, promotions, and other
              information we think may interest you.
            </li>
            <li>Ensure our website is secure and prevent fraud.</li>
          </ul>

          <h1 className="font-bold">How We Use Your Information</h1>
          <p>
            We take appropriate measures to protect your information, including:
          </p>
          <ul style={{ listStyleType: "decimal" }} className="mx-3">
            <li>
              Using secure servers and encryption to protect your non-personal
              information.
            </li>
            <li>
              Limiting access to your non-personal information to authorized
              employees and contractors.
            </li>
            <li>
              Regularly monitoring our systems for security vulnerabilities and
              implementing updates and patches as needed.
            </li>
          </ul>

          <h1 className="font-bold">Sharing Your Information</h1>
          <p>
            We do not sell, trade, or rent your information to third parties. We
            may share your non-personal information with:
          </p>
          <ul style={{ listStyleType: "decimal" }} className="mx-3">
            <li>
              Service providers who help us provide our services, such as
              website hosting providers.
            </li>
            <li>
              Law enforcement or other government agencies if required by law or
              to protect our rights and property.
            </li>
          </ul>

          <h1 className="font-bold">Cookies</h1>
          <p>
            We use cookies and other similar technologies to improve your
            experience on our website. You can manage cookies through your
            browser settings.
          </p>

          <h1 className="font-bold">Children&apos;s Privacy</h1>
          <p>
            Our website is not intended for use by children under the age of 18.
            We do not knowingly collect personal information from children under
            the age of 18.
          </p>

          <h1 className="font-bold">Changes to This Privacy Policy</h1>
          <p>
            We may update this Privacy Policy from time to time. We will post
            the updated policy on our website and notify you of any material
            changes.
          </p>

          <h1 className="font-bold">Contact Us</h1>
          <p>
            If you have any questions about our Privacy Policy or how we handle
            your information, please contact us at{" "}
            <span className="underline italic">
              <a href="mailto:support@1xtipster.com">support@1xtipster.com</a>
            </span>{" "}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="4" />
      </div>
    </div>
  );
}
