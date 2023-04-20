import Image from "next/image";
import logo from "../assets/logo.png";
import eligible from "../assets/18.png";
import begambleawareorg from "../assets/begambleawareorg_white.png";
import xbet from "../assets/xbet.png";
import twitter from "../assets/twitter.svg";
import telegram from "../assets/telegram.svg";
import email from "../assets/email.svg";

export default function Footer() {
  const dateYear = new Date().getFullYear();

  return (
    <div className="bg-gray-800 mt-5">
      <di className="w-full bg-black flex justify-center p-4">
        <Image
          src={logo}
          width={1000}
          height={50}
          alt="betting"
          className="block h-12 w-auto"
          priority
        />
      </di>

      <div className="flex flex-col justify-center p-4 md:p-0">
        <div className="">
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            className="flex mt-10 justify-center items-center cursor-pointer"
          >
            <Image
              src={eligible}
              width={1000}
              height={50}
              alt="plus"
              className="block h-6 w-auto mr-4"
            />
            <Image
              src={begambleawareorg}
              width={1000}
              height={50}
              alt="plus"
              className="block h-6 w-auto"
            />
          </a>

          <div className="text-center mt-5 text-xs text-gray-400">
            <p>
              BeGambleAware.org aims to promote responsibility in gambling. They
              provide information to help you make informed decisions about your
              gambling.
            </p>
            <p className="mt-5">Call the National Gambling Helpline</p>
            <p>0808 8020 133 8am to midnight, 7 days a week.</p>
            <p className="mt-5">
              We are committed to{" "}
              <span className="font-bold">responsible gambling</span> and have a
              number of ways to help you stay in control and keep gambling fun.
            </p>
            <p className="mt-5">
              You must be 18 years old or over to use this site.
            </p>
            <p>Please bet responsibly.</p>
          </div>
        </div>

        <div className="flex-col w-full">
          <div className="relative flex py-5 justify-center items-center mb-3">
            <div className="w-5/6 md:w-2/6 border-t border-gray-700"></div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col  text-xs text-center mr-8 text-gray-400 cursor-pointer">
              <a
                href="https://affpa.top/L?tag=d_2252447m_97c_&site=2252447&ad=97"
                target="_blank"
                className="cursor-pointer flex justify-center"
              >
                <Image
                  src={xbet}
                  width={1000}
                  height={50}
                  alt="plus"
                  className="block h-5 w-auto"
                />
              </a>
              <p>100% sign up bonus</p>
            </div>
          </div>

          <div className="relative flex justify-center py-5 items-center mb-3">
            <div className="w-5/6 md:w-2/6 border-t border-gray-700"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex justify-center">
            <a
              href="https://twitter.com/1xtipsterr?t=dKaLi60DGb2KiOmCW9HNfQ&s=09"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={twitter}
                width={1000}
                height={50}
                alt="plus"
                className="block h-8 w-auto md:ml-3"
              />
            </a>
            <a
              href="https://t.me/onextipstar"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={telegram}
                width={1000}
                height={50}
                alt="plus"
                className="block h-8 w-auto ml-5 md:ml-3"
              />
            </a>
            <a
              href="mailto:support@1xtipster.com"
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={email}
                width={1000}
                height={50}
                alt="plus"
                className="block h-8 w-auto ml-5 md:mr-3"
              />
            </a>
          </div>

          <div className="flex justify-center text-xs items-center mt-5 md:mt-0">
            <a href="/terms" className="mr-2 cursor-pointer">
              Terms & Conditions
            </a>
            <a href="/about" className="mr-2 cursor-pointer">
              About Us
            </a>
            <a href="/privacy" className="cursor-pointer">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="relative flex justify-center py-5 items-center">
          <div className="w-5/6 md:w-2/6 border-t border-gray-700"></div>
        </div>

        <div className="flex justify-center pb-6 text-xs">
          <p className="items-center my-5">
            <a
              href="https://kobbycoder.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 cursor-pointer"
            >
              kobbycoder{" "}
            </a>{" "}
            ©&nbsp;Copyright {dateYear}
          </p>
        </div>
      </div>
    </div>
  );
}
