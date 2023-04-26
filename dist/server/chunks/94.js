exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 74753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getDocument)
/* harmony export */ });
/* harmony import */ var _lib_firebase_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69503);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41878);


const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getFirestore */ .ad)(_lib_firebase_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
async function getDocument(name, id) {
    const result = [];
    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .query */ .IO)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .collection */ .hJ)(db, name), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .where */ .ar)("id", "==", `${id}`));
    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getDocs */ .PL)(q);
    querySnapshot.forEach((doc)=>{
        result.push({
            id: doc.data().id,
            ad: doc.data().ad,
            link: doc.data().link
        });
    });
    return result;
}


/***/ }),

/***/ 87072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AffiliateAdPlacement)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74753);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




function AffiliateAdPlacement({ collection , id  }) {
    const [ad, setAd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isImageLoaded, setIsImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchAds = async ()=>{
            const ads = await (0,_Firebase_getData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(collection, id);
            for(let index = 0; index < ads.length; index++){
                const ad = ads[index].ad;
                const link = ads[index].link;
                setAd(ad);
                setLink(link);
            }
        };
        fetchAds();
    }, [
        collection,
        id
    ]);
    const handleImageLoad = ()=>{
        setIsImageLoaded(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full flex justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "py-6 w-full flex justify-center",
            children: [
                !isImageLoaded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "animate-pulse h-full opacity-25",
                    style: {
                        width: 150,
                        backgroundColor: "#E8E8E8"
                    }
                }),
                ad && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: link,
                    target: "_blank",
                    className: "cursor-pointer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "block w-32 h-full",
                        src: ad,
                        alt: "betting",
                        width: 1000,
                        height: 50,
                        priority: true,
                        onLoad: handleImageLoad,
                        style: {
                            display: isImageLoaded ? "block" : "none"
                        }
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 3574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74753);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




function Hero() {
    const [ad, setAd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isImageLoaded, setIsImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchAds = async ()=>{
            const ads = await (0,_Firebase_getData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("Ads", "1");
            for(let index = 0; index < ads.length; index++){
                const ad = ads[index].ad;
                const link = ads[index].link;
                setAd(ad);
                setLink(link);
            }
        };
        fetchAds();
    }, []);
    const handleImageLoad = ()=>{
        setIsImageLoaded(true);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "p-6 w-full flex justify-center",
            children: [
                !isImageLoaded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "animate-pulse h-12 md:h-20 lg:h-28 opacity-25",
                    style: {
                        width: 728,
                        backgroundColor: "#E8E8E8"
                    }
                }),
                ad && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: link,
                    target: "_blank",
                    className: "cursor-pointer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "block md:h-20 lg:h-28",
                        src: ad,
                        alt: "betting",
                        width: 1000,
                        height: 50,
                        priority: true,
                        onLoad: handleImageLoad,
                        style: {
                            display: isImageLoaded ? "block" : "none"
                        }
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 87123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/assets/logo.png
var logo = __webpack_require__(63153);
;// CONCATENATED MODULE: ./src/assets/crown.svg
/* harmony default export */ const crown = ({"src":"/_next/static/media/crown.5954972f.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js + 1 modules
var disclosure = __webpack_require__(94702);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/XMarkIcon.js
var XMarkIcon = __webpack_require__(57231);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/Bars3Icon.js
var Bars3Icon = __webpack_require__(86501);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./src/components/Navbar.jsx







const Navbar_navigation = [
    {
        name: "Home \uD83C\uDFE0",
        href: "/",
        targetSegment: null
    },
    {
        name: "Fixtures ⚽",
        href: "/fixtures",
        targetSegment: "fixtures"
    },
    {
        name: "Analysis \uD83D\uDCCA",
        href: "/analysis",
        targetSegment: "analysis"
    },
    {
        name: "VIP",
        href: "/vip",
        targetSegment: "vip",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            className: "block h-6 w-6 mr-2",
            src: crown,
            width: 1000,
            height: 50,
            alt: "crown"
        })
    }
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Navbar() {
    const activeSegment = (0,navigation.useSelectedLayoutSegment)();
    return /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p, {
        as: "nav",
        className: "bg-gray-800",
        children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative flex h-16 items-center justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute inset-y-0 left-0 pl-8 sm:pl-0 flex items-center sm:hidden",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(disclosure/* Disclosure.Button */.p.Button, {
                                        className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }),
                                            open ? /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon, {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon, {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-1 items-center justify-end sm:items-stretch pr-8 sm:pr-0 sm:justify-between sm:mx-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-shrink-0 items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    className: "block h-8 w-auto lg:hidden",
                                                    src: logo["default"],
                                                    alt: "Your Company",
                                                    width: 1000,
                                                    height: 50,
                                                    priority: true
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    className: "hidden h-8 w-auto lg:block",
                                                    src: logo["default"],
                                                    alt: "Your Company",
                                                    width: 1000,
                                                    height: 50,
                                                    priority: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden sm:ml-6 sm:block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex space-x-4",
                                                children: Navbar_navigation.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: item.href,
                                                        className: classNames(activeSegment === item.targetSegment ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium flex items-center"),
                                                        "aria-current": item.current ? "page" : undefined,
                                                        children: [
                                                            item.icon ? item.icon : "",
                                                            item.name
                                                        ]
                                                    }, item.name))
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Panel */.p.Panel, {
                        className: "sm:hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-y-1 px-2 pb-3 pt-2",
                            children: Navbar_navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Button */.p.Button, {
                                    as: "a",
                                    href: item.href,
                                    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"),
                                    "aria-current": item.current ? "page" : undefined,
                                    children: item.name
                                }, item.name))
                        })
                    })
                ]
            })
    });
}


/***/ }),

/***/ 69503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c": () => (/* binding */ analytics)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31288);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80726);
// Import the functions you need from the SDKs you need


const firebaseConfig = {
    apiKey: "AIzaSyBpsEu85Z3UmUUbdyQYUCXjfWoOabI_4YA",
    authDomain: "soccer-predictions-e65eb.firebaseapp.com",
    projectId: "soccer-predictions-e65eb",
    storageBucket: "soccer-predictions-e65eb.appspot.com",
    messagingSenderId: "1020554910318",
    appId: "1:1020554910318:web:1e638f57fba54307dbe47f",
    measurementId: "G-F626KLH8HJ"
};
// Initialize Firebase
let firebase_app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .getApps */ .C6)().length === 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .getApps */ .C6)()[0];
const analytics =  false ? 0 : null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_app);


/***/ }),

/***/ 53905:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 67144, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 77914, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 65110, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 23682, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31390, 23))

/***/ }),

/***/ 28556:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 24468, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5123));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 63153));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 16781));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39821));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 11347));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17048));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76487));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3574));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87123))

/***/ }),

/***/ 2856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(83146);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(62208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.7107f5b4.png","height":460,"width":1640,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGNsOXt4lgQ75/VkbePNv//+lWJlZmb8////D0ZGRjYGBobvjHOvnvXjYmF5HqGmd+fPv78CzIxM/EDJzxdfPhH/9ffvbwCMuhz4axsd6gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/assets/18.png
/* harmony default export */ const _18 = ({"src":"/_next/static/media/18.190698fd.png","height":91,"width":91,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEXuAADtAADuAADtAADuAADtAADxAADwAADvAADwAADzZGTyY2PxYGD////7///ydnb5hYX4g4P2f3/zd3fyd3f//////v78+/v7+vr19PT08/Py8vL93t783Nzm5OT62dn52Nj419fa2dna2NjQz8/My8vIx8fHx8e2tra1tbWcm5uvZNXgAAAAFXRSTlMAACgoKSnAwMDB7e3t+fn5+vr6+volDXJGAAAASUlEQVR42h3KVRaAIBQFwIv4wEQRuzvY/wI9+j0DRjI3PgEUDEU5RS7Eopoq7iXS8bH7uWlk7W2Pa9UQs+rqj3j4ZweMvMRIjhepywSufTx9RQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/begambleawareorg_white.png
/* harmony default export */ const begambleawareorg_white = ({"src":"/_next/static/media/begambleawareorg_white.2f0c749c.png","height":43,"width":331,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAGElEQVR42mP4F/TP6J8uEDv+c/tn+k8RAFZvCbEUVZRgAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./src/assets/xbet.png
/* harmony default export */ const xbet = ({"src":"/_next/static/media/xbet.137789f7.png","height":489,"width":2200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGNk0I+fz/DnFx8Dv8g3BsdECYZ/f1kZGBg+MDAyPmL4/5+HkcEgYSPDt0+/GBR1hRnMgn4y/PkpwsDA+ACIDzEwMBwDANAaFV2F6A2tAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./src/assets/twitter.svg
/* harmony default export */ const twitter = ({"src":"/_next/static/media/twitter.dd5815ea.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/telegram.svg
/* harmony default export */ const telegram = ({"src":"/_next/static/media/telegram.17c961e5.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/email.svg
/* harmony default export */ const email = ({"src":"/_next/static/media/email.53080b3c.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/components/Footer.jsx









function Footer() {
    const dateYear = new Date().getFullYear();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-gray-800 mt-5",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("di", {
                className: "w-full bg-black flex justify-center p-4",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: logo,
                    width: 1000,
                    height: 50,
                    alt: "betting",
                    className: "block h-12 w-auto",
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col justify-center p-4 md:p-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                href: "https://www.begambleaware.org/",
                                target: "_blank",
                                className: "flex mt-10 justify-center items-center cursor-pointer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: _18,
                                        width: 1000,
                                        height: 50,
                                        alt: "plus",
                                        className: "block h-6 w-auto mr-4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: begambleawareorg_white,
                                        width: 1000,
                                        height: 50,
                                        alt: "plus",
                                        className: "block h-6 w-auto"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-center mt-5 text-xs text-gray-400",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "BeGambleAware.org aims to promote responsibility in gambling. They provide information to help you make informed decisions about your gambling."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "mt-5",
                                        children: "Call the National Gambling Helpline"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "0808 8020 133 8am to midnight, 7 days a week."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "mt-5",
                                        children: [
                                            "We are committed to",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "font-bold",
                                                children: "responsible gambling"
                                            }),
                                            " and have a number of ways to help you stay in control and keep gambling fun."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "mt-5",
                                        children: "You must be 18 years old or over to use this site."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Please bet responsibly."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex-col w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative flex py-5 justify-center items-center mb-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-5/6 md:w-2/6 border-t border-gray-700"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col  text-xs text-center mr-8 text-gray-400 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "https://affpa.top/L?tag=d_2252447m_97c_&site=2252447&ad=97",
                                            target: "_blank",
                                            className: "cursor-pointer flex justify-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: xbet,
                                                width: 1000,
                                                height: 50,
                                                alt: "plus",
                                                className: "block h-5 w-auto"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "100% sign up bonus"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative flex justify-center py-5 items-center mb-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-5/6 md:w-2/6 border-t border-gray-700"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col md:flex-row justify-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "https://twitter.com/1xtipsterr?t=dKaLi60DGb2KiOmCW9HNfQ&s=09",
                                        target: "_blank",
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: twitter,
                                            width: 1000,
                                            height: 50,
                                            alt: "plus",
                                            className: "block h-8 w-auto md:ml-3"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "https://t.me/onextipstar",
                                        target: "_blank",
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: telegram,
                                            width: 1000,
                                            height: 50,
                                            alt: "plus",
                                            className: "block h-8 w-auto ml-5 md:ml-3"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "mailto:support@1xtipster.com",
                                        target: "_blank",
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: email,
                                            width: 1000,
                                            height: 50,
                                            alt: "plus",
                                            className: "block h-8 w-auto ml-5 md:mr-3"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-center text-xs items-center mt-5 md:mt-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "/terms",
                                        className: "mr-2 cursor-pointer",
                                        children: "Terms & Conditions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "/about",
                                        className: "mr-2 cursor-pointer",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "/privacy",
                                        className: "cursor-pointer",
                                        children: "Privacy Policy"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "relative flex justify-center py-5 items-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "w-5/6 md:w-2/6 border-t border-gray-700"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex justify-center pb-6 text-xs",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: "items-center my-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "https://kobbycoder.com/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-teal-500 cursor-pointer",
                                    children: [
                                        "kobbycoder",
                                        " "
                                    ]
                                }),
                                " ",
                                "\xa9\xa0Copyright ",
                                dateYear
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Header.jsx

function Header() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex justify-between text-xs items-center sm:mx-4 h-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeLinecap: "1.5",
                            stroke: "currentColor",
                            className: "w-6 h-6",
                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "ml-2",
                            children: "info@1xtipster.com"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://t.me/onextipstar",
                        target: "_blank",
                        className: "bg-teal-600 px-3 cursor-pointer py-2 rounded-lg",
                        children: "Join telegram"
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(35985);
;// CONCATENATED MODULE: ./src/components/Navbar.jsx

const proxy = (0,module_proxy.createProxy)("/Users/apple/Downloads/Documents/sportybettingtips/sportybettingtips/src/components/Navbar.jsx")

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const Navbar = (proxy.default);

;// CONCATENATED MODULE: ./src/components/Hero.jsx

const Hero_proxy = (0,module_proxy.createProxy)("/Users/apple/Downloads/Documents/sportybettingtips/sportybettingtips/src/components/Hero.jsx")

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Hero_esModule, $$typeof: Hero_$$typeof } = Hero_proxy;
/* harmony default export */ const Hero = (Hero_proxy.default);

// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__(59109);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
;// CONCATENATED MODULE: ./src/app/layout.js







const metadata = {
    title: "Free - Daily Betting prediction",
    description: "Free betting sporty 1xbet betway predictions"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime.jsx(Navbar, {}),
                /*#__PURE__*/ jsx_runtime.jsx(Hero, {}),
                children,
                /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 31000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)("/Users/apple/Downloads/Documents/sportybettingtips/sportybettingtips/src/components/AffiliateAdPlacement.jsx")

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);


/***/ }),

/***/ 5123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/18.190698fd.png","height":91,"width":91,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEXuAADtAADuAADtAADuAADtAADxAADwAADvAADwAADzZGTyY2PxYGD////7///ydnb5hYX4g4P2f3/zd3fyd3f//////v78+/v7+vr19PT08/Py8vL93t783Nzm5OT62dn52Nj419fa2dna2NjQz8/My8vIx8fHx8e2tra1tbWcm5uvZNXgAAAAFXRSTlMAACgoKSnAwMDB7e3t+fn5+vr6+volDXJGAAAASUlEQVR42h3KVRaAIBQFwIv4wEQRuzvY/wI9+j0DRjI3PgEUDEU5RS7Eopoq7iXS8bH7uWlk7W2Pa9UQs+rqj3j4ZweMvMRIjhepywSufTx9RQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 16781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/begambleawareorg_white.2f0c749c.png","height":43,"width":331,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAGElEQVR42mP4F/TP6J8uEDv+c/tn+k8RAFZvCbEUVZRgAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 17048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/email.53080b3c.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 63153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.7107f5b4.png","height":460,"width":1640,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGNsOXt4lgQ75/VkbePNv//+lWJlZmb8////D0ZGRjYGBobvjHOvnvXjYmF5HqGmd+fPv78CzIxM/EDJzxdfPhH/9ffvbwCMuhz4axsd6gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 76487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/telegram.17c961e5.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 11347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/twitter.dd5815ea.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 39821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/xbet.137789f7.png","height":489,"width":2200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGNk0I+fz/DnFx8Dv8g3BsdECYZ/f1kZGBg+MDAyPmL4/5+HkcEgYSPDt0+/GBR1hRnMgn4y/PkpwsDA+ACIDzEwMBwDANAaFV2F6A2tAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 11193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_shared_lib_isomorphic_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23854);
/* harmony import */ var next_dist_shared_lib_isomorphic_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_isomorphic_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_server_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20459);
/* harmony import */ var next_dist_shared_lib_router_utils_route_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93869);
/* harmony import */ var next_dist_shared_lib_router_utils_route_regex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_router_utils_route_regex__WEBPACK_IMPORTED_MODULE_2__);
  
  
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const pathname = "/"
    const routeRegex = (0,next_dist_shared_lib_router_utils_route_regex__WEBPACK_IMPORTED_MODULE_2__.getNamedRouteRegex)(pathname, false)
    const route = (0,next_dist_server_server_utils__WEBPACK_IMPORTED_MODULE_1__/* .interpolateDynamicPath */ .oE)(pathname, props.params, routeRegex)

    const imageData = {"type":"image/x-icon","sizes":"any"};

    return {
      ...imageData,
      url: next_dist_shared_lib_isomorphic_path__WEBPACK_IMPORTED_MODULE_0___default().join(route, "favicon.ico" + ""),
    }
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;