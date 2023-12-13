/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/main/styles.css\");\n\n\n/*==================== SHOW MENU ====================*/\nvar showMenu = function showMenu(toggleId, navId) {\n  var toggle = document.getElementById(toggleId),\n    nav = document.getElementById(navId);\n\n  // Validate that variables exist\n  if (toggle && nav) {\n    toggle.addEventListener('click', function () {\n      // We add the show-menu class to the div tag with the nav__menu class\n      nav.classList.toggle('show-menu');\n    });\n  }\n};\nshowMenu('nav-toggle', 'nav-menu');\n\n/*==================== REMOVE MENU MOBILE ====================*/\nvar navLink = document.querySelectorAll('.nav__link');\nfunction linkAction() {\n  var navMenu = document.getElementById('nav-menu');\n  // When we click on each nav__link, we remove the show-menu class\n  navMenu.classList.remove('show-menu');\n}\nnavLink.forEach(function (n) {\n  return n.addEventListener('click', linkAction);\n});\n\n/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/\nvar sections = document.querySelectorAll('section[id]');\nfunction scrollActive() {\n  var scrollY = window.pageYOffset;\n  sections.forEach(function (current) {\n    var sectionHeight = current.offsetHeight;\n    var sectionTop = current.offsetTop - 50;\n    var sectionId = current.getAttribute('id');\n    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {\n      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');\n    } else {\n      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');\n    }\n  });\n}\nwindow.addEventListener('scroll', scrollActive);\n\n/*==================== CHANGE BACKGROUND HEADER ====================*/\nfunction scrollHeader() {\n  var nav = document.getElementById('header');\n  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag\n  if (this.scrollY >= 200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');\n}\nwindow.addEventListener('scroll', scrollHeader);\n\n/*==================== SHOW SCROLL TOP ====================*/\nfunction scrollTop() {\n  var scrollTop = document.getElementById('scroll-top');\n  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class\n  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');else scrollTop.classList.remove('show-scroll');\n}\nwindow.addEventListener('scroll', scrollTop);\n\n/*==================== DARK LIGHT THEME ====================*/\nvar themeButton = document.getElementById('theme-button');\nvar darkTheme = 'dark-theme';\nvar iconTheme = 'bx-sun';\n\n// Previously selected topic (if user selected)\nvar selectedTheme = localStorage.getItem('selected-theme');\nvar selectedIcon = localStorage.getItem('selected-icon');\n\n// We obtain the current theme that the interface has by validating the dark-theme class\nvar getCurrentTheme = function getCurrentTheme() {\n  return document.body.classList.contains(darkTheme) ? 'dark' : 'light';\n};\nvar getCurrentIcon = function getCurrentIcon() {\n  return themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';\n};\n\n// We validate if the user previously chose a topic\nif (selectedTheme) {\n  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark\n  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);\n  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);\n}\n\n// Activate / deactivate the theme manually with the button\nthemeButton.addEventListener('click', function () {\n  // Add or remove the dark / icon theme\n  document.body.classList.toggle(darkTheme);\n  themeButton.classList.toggle(iconTheme);\n  // We save the theme and the current icon that the user chose\n  localStorage.setItem('selected-theme', getCurrentTheme());\n  localStorage.setItem('selected-icon', getCurrentIcon());\n});\n\n/*==================== SCROLL REVEAL ANIMATION ====================*/\nvar sr = ScrollReveal({\n  origin: 'top',\n  distance: '30px',\n  duration: 2000,\n  reset: true\n});\nsr.reveal(\".home__data, .home__img,\\n            .about__data, .about__img,\\n            .services__content, .menu__content,\\n            .app__data, .app__img,\\n            .contact__data, .contact__button,\\n            .footer__content, .testimonials, .testimonials-content\", {\n  interval: 200\n});\n\n// const swiper = new Swiper('.js-testimonials-slider', {\n//     // Default parameters\n//     slidesPerView: 1,\n//     spaceBetween: 30,\n//     freeMode: true,\n//     loop: true,\n//     autoplay: {\n//       delay: 4000,\n//       disableOnInteraction: false\n//     },\n//     // Responsive breakpoints\n//     breakpoints: {\n//       // when window width is >= 320px\n//       320: {\n//         slidesPerView: 1,\n//         spaceBetween: 20\n//       },\n//       // when window width is >= 480px\n//       480: {\n//         slidesPerView: 1,\n//         spaceBetween: 30\n//       },\n//       // when window width is >= 640px\n//       640: {\n//         slidesPerView: 1,\n//         spaceBetween: 30\n//       },\n//       700: {\n//         slidesPerView: 1,\n//         spaceBetween: 40\n//       }\n//     }\n//   })\n\nvar swiper = new Swiper('.js-testimonials-slider', {\n  // Optional parameters\n  // direction: 'vertical',\n  // loop: true,\n  grabCursor: true,\n  spaceBetween: 30,\n  freeMode: true,\n  loop: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false\n  },\n  // If we need pagination\n  pagination: {\n    el: '.js-testimonials-pagination',\n    clickable: true\n  },\n  //Responsive breakpoints\n  breakpoints: {\n    // when window width is >= 320px\n    320: {\n      slidesPerView: 1,\n      spaceBetween: 20\n    },\n    // when window width is >= 480px\n    480: {\n      slidesPerView: 1,\n      spaceBetween: 30\n    },\n    // when window width is >= 640px\n    640: {\n      slidesPerView: 2,\n      spaceBetween: 30\n    },\n    700: {\n      slidesPerView: 2,\n      spaceBetween: 40\n    }\n  }\n});\n\n//# sourceURL=webpack://webpack-strater/./src/main/main.js?");

/***/ }),

/***/ "./src/main/styles.css":
/*!*****************************!*\
  !*** ./src/main/styles.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-strater/./src/main/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/main.js");
/******/ 	
/******/ })()
;