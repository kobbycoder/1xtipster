import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import xbet from "../assets/xbet.png";
import Image from "next/image";

export default function TipsDialog({
  open,
  onClose,
  awayPercent,
  homePercent,
  drawPercent,
  homeTip,
  awayTip
}) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-400"
                >
                  <div>
                    <h1>More tips</h1>
                    <button
                      type="button"
                      onClick={onClose}
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-toggle="authentication-modal"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                </Dialog.Title>

                <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                  <div className="text-center text-xs">
                    <div
                      className="radial-progress bg-transparent text-primary-content border-4 border-teal-800"
                      style={{ "--value": homePercent }}
                    >
                      {homePercent}%
                    </div>
                    <p className="mt-2 text-gray-400">Home win</p>
                  </div>

                  <div className="text-center text-xs">
                    <div
                      className="radial-progress bg-transparent text-primary-content border-4 border-teal-800"
                      style={{ "--value": drawPercent }}
                    >
                      {drawPercent}%
                    </div>
                    <p className="mt-2 text-gray-400">Draw</p>
                  </div>

                  <div className="col-start-1 col-end-3 lg:col-start-auto lg:col-end-auto text-center text-xs">
                    <div
                      className="radial-progress bg-transparent text-primary-content border-4 border-teal-800"
                      style={{ "--value": awayPercent }}
                    >
                      {awayPercent}%
                    </div>
                    <p className="mt-2 text-gray-400">Away win</p>
                  </div>
                </div>

                <div className="flex flex-col w-full justify-center text-center mt-5 ">
                  <h1 className="text-gray-500">Correct score</h1>
                  <h1 className="text-gray-400 font-bold">{homeTip} : {awayTip}</h1>
                </div>

                <div className="mt-8 flex justify-center">
                  <a
                    href="https://affpa.top/L?tag=d_2252447m_97c_&site=2252447&ad=97"
                    target="_blank"
                    type="button"
                    className="inline-flex justify-center text-blue-900 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium hover:bg-blue-200 dark:text-white dark:bg-teal-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Bet Now ⚽
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
