import React from "react";
import AffiliateAdPlacement from "@/components/AffiliateAdPlacement";

function page() {
  return (
    <div className="flex w-full h-full justify-between">
      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="2" />
      </div>

      <div className="w-full p-6 lg:p-0 lg:pt-6 md:pt-6 text-gray-400">
        <h1 className="text-lg font-bold ">Terms & Conditions 📝</h1>

        <div className="relative flex justify-center py-5 items-center mt-5">
          <div className="w-full border-t border-gray-700"></div>
        </div>

        <div className="space-y-4 bg-gray-800 p-4">
          <h1 className="font-bold">INTRODUCTION</h1>
          <p>
            These terms and conditions (the &lsquo;Agreement&rsquo;) govern your use of the
            1xtipster.com website (the &lsquo;Site&rsquo;) and the services provided through
            the Site, which includes free betting tips and other related content
            (the &lsquo;Services&rsquo;). By accessing or using the Site or Services, you
            agree to be bound by this Agreement. If you do not agree to this
            Agreement, do not access or use the Site or Services.
          </p>

          <h1 className="font-bold">SERVICES</h1>
          <p>
            1xtipster.com provides betting tips and other related content for
            free. The tips provided are intended for informational and
            entertainment purposes only and should not be construed as financial
            or legal advice. <br></br>
            <br></br>
            <span>
              We do not guarantee the accuracy, completeness, timeliness or
              reliability of any information on the Site or through the
              Services. You acknowledge that any reliance on such information is
              at your own risk.
            </span>
          </p>

          <h1 className="font-bold">INTELLECTUAL PROPERTY</h1>
          <p>
            You must be at least 18 years of age to access or use the Site or
            Services. By accessing or using the Site or Services, you represent
            and warrant that you are at least 18 years of age.
          </p>

          <h1 className="font-bold">ELIGIBILITY</h1>
          <p>
            The Site and Services contain intellectual property owned or
            licensed by 1xtipster.com, including without limitation trademarks,
            copyrights, and other proprietary information. You may not use any
            of our intellectual property without our prior written consent.
          </p>

          <h1 className="font-bold">USER CONTENT</h1>
          <p>
            You are solely responsible for any content that you upload, post,
            email, transmit, or otherwise make available through the Site or
            Services (&lsquo;User Content&rsquo;). You represent and warrant that you own or
            have the necessary licenses, rights, consents, and permissions to
            use and authorize 1xtipster.com to use all patent, trademark, trade
            secret, copyright, or other proprietary rights in and to any and all
            User Content to enable inclusion and use of the User Content in the
            manner contemplated by the Site and these Terms.<br></br>
            <br></br>
            <span>
              By submitting User Content, you grant 1xtipster.com a worldwide,
              non-exclusive, royalty-free, sublicensable, and transferable
              license to use, reproduce, distribute, prepare derivative works
              of, display, and perform the User Content in connection with the
              Site and 1xtipster.com&apos;s (and its successors&apos; and affiliates&apos;)
              business, including without limitation for promoting and
              redistributing part or all of the Site and Services (and
              derivative works thereof) in any media formats and through any
              media channels.
            </span>
          </p>

          <h1 className="font-bold">DISCLAIMER OF WARRANTIES</h1>
          <p>
          1xtipster.com provides the Site and Services on an &lsquo;as is&rsquo; and &lsquo;as available&rsquo; basis. We make no representations or warranties of any kind, express or implied, as to the operation of the Site or Services or the information, content, materials, or products included on the Site or provided through the Services. You expressly agree that your use of the Site and Services is at your sole risk.
          </p>

          <h1 className="font-bold">LIMITATION OF LIABILITY</h1>
          <p>
          In no event shall 1xtipster.com, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any (i) errors, mistakes, or inaccuracies of content, (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the Site or Services, (iii) any unauthorized access to or use of our servers and/or any and all personal information and/or financial information stored therein, (iv) any interruption or cessation of transmission to or from the Site or Services, (v) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Site or Services by any third party, (vi) any errors or omissions in any content or for any loss or damage of any kind incurred
          </p>
        </div>
      </div>

      <div className="hidden lg:flex w-2/6">
        <AffiliateAdPlacement collection="Ads" id="3" />
      </div>
    </div>
  );
}

export default page;
