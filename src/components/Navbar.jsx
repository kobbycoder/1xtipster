"use client"
import Image from "next/image";
import logo from '../assets/logo.png'
import crown from '../assets/crown.svg'
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, GiftIcon } from "@heroicons/react/24/outline";
import { useSelectedLayoutSegment } from "next/navigation"

const navigation = [
  { name: "Home 🏠", href: "/", targetSegment: null },
  { name: "Fixtures ⚽", href: "/fixtures", targetSegment: 'fixtures' },
  { name: "Analysis 📊", href: "/analysis", targetSegment: 'analysis' },
  { name: "VIP", href: "/vip", targetSegment: 'vip', icon: <Image className="block h-6 w-6 mr-2" src={crown} width={1000} height={50} alt='crown' /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 pl-8 sm:pl-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch pr-8 sm:pr-0 sm:justify-between sm:mx-4">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                    width={1000}
                    height={50}
                    priority
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                    width={1000}
                    height={50}
                    priority
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          activeSegment === item.targetSegment 
                            ? "bg-gray-900 text-white"
                            : "text-gray-400 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium flex items-center"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      > 
                        {item.icon ? item.icon : ''}
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
