webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _Quote = __webpack_require__(8);

var _Quote2 = _interopRequireDefault(_Quote);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Quote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", className: "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h5",
        { className: "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "We are kind to every kind"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "box" },
        (0, _hyperapp.h)(
          "div",
          { className: "row" },
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { className: "title" },
              "Atlanta, Georgia"
            ),
            (0, _hyperapp.h)(
              "h6",
              { className: "Address" },
              "357 Main St ",
              (0, _hyperapp.h)("br", null),
              "Atlanta, GA 30318"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              " ",
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@stakeandpotatoes.com" },
                "info@stakeandpotatoes.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              { className: true },
              "Call directly:"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "title" },
              "470 234 1256"
            ),
            (0, _hyperapp.h)(
              "h6",
              { className: true },
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday, & Sunday ",
              (0, _hyperapp.h)("br", null),
              " from 11pm - 2pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              { className: true },
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily ",
              (0, _hyperapp.h)("br", null),
              " from 5pm - 10pm"
            )
          )
        )
      )
    ),
    (0, _hyperapp.h)("div", { className: "map-img" })
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        "footer",
        null,
        (0, _hyperapp.h)(
            "div",
            { className: "container" },
            (0, _hyperapp.h)(
                "nav",
                { className: "menu" },
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Our Story"
                ),
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Reviews"
                ),
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Special Menu"
                ),
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Reservations"
                ),
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Contact Us"
                )
            ),
            (0, _hyperapp.h)(
                "ul",
                { className: "social-media" },
                (0, _hyperapp.h)(
                    "li",
                    null,
                    (0, _hyperapp.h)(
                        "a",
                        { href: "http://www.twitter.com", target: "new" },
                        (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
                    )
                ),
                (0, _hyperapp.h)(
                    "li",
                    null,
                    (0, _hyperapp.h)(
                        "a",
                        { href: "http://www.facebook.com", target: "new" },
                        (0, _hyperapp.h)("i", { "class": "fab fa-facebook-f" })
                    )
                ),
                (0, _hyperapp.h)(
                    "li",
                    null,
                    (0, _hyperapp.h)(
                        "a",
                        { href: "http://www.instagram.com", target: "new" },
                        (0, _hyperapp.h)("i", { "class": "fab fa-instagram" })
                    )
                )
            ),
            (0, _hyperapp.h)(
                "div",
                { className: "copyright" },
                "\xA9 2018 s&P"
            )
        )
    );
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        "header",
        null,
        (0, _hyperapp.h)(
            "div",
            { className: "container" },
            (0, _hyperapp.h)(
                "div",
                { className: "logo" },
                (0, _hyperapp.h)("img", { src: "https://svgsilh.com/svg/1588125.svg" })
            ),
            (0, _hyperapp.h)(
                "nav",
                null,
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Our Story"
                ),
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Reviews"
                ),
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Special Menu"
                ),
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Reservations"
                ),
                (0, _hyperapp.h)("i", { "class": "fas fa-angle-right" }),
                (0, _hyperapp.h)(
                    "a",
                    { href: "#" },
                    "Contact Us"
                )
            )
        )
    );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        "section",
        { id: "OurStory" },
        (0, _hyperapp.h)(
            "div",
            { className: "container" },
            (0, _hyperapp.h)(
                "div",
                { className: "col-md-6" },
                (0, _hyperapp.h)(
                    "div",
                    { className: "row" },
                    (0, _hyperapp.h)(
                        "h5",
                        { className: "comp-title" },
                        "Our Story"
                    ),
                    (0, _hyperapp.h)(
                        "h2",
                        null,
                        "Cooking is the art of adjustment"
                    ),
                    (0, _hyperapp.h)(
                        "p",
                        null,
                        "Lyft try-hard chia vexillologist. Single-origin coffee vegan pabst health goth, umami tousled fingerstache meh you probably haven't heard of them salvia unicorn poke green juice live-edge man braid. Put a bird on it af woke, raw denim meditation hell of flexitarian distillery occupy small batch vexillologist. Sustainable edison bulb succulents synth keffiyeh hot chicken retro listicle yuccie neutra."
                    ),
                    (0, _hyperapp.h)(
                        "div",
                        { className: "quote" },
                        " \"The quality of the steak amazes...I'm sorry, did you say it isn't meat?\" ",
                        (0, _hyperapp.h)(
                            "strong",
                            null,
                            " ",
                            (0, _hyperapp.h)("br", null),
                            "- Don Blanco -"
                        )
                    ),
                    (0, _hyperapp.h)(
                        "a",
                        { href: "#", className: "reserve-btn" },
                        "Reservation"
                    )
                )
            ),
            (0, _hyperapp.h)(
                "div",
                { className: "col-md-6" },
                (0, _hyperapp.h)(
                    "div",
                    { className: "row" },
                    (0, _hyperapp.h)("div", { className: "video-img" })
                )
            )
        )
    );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Quote;

var _hyperapp = __webpack_require__(0);

function Quote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'Quote', style: { backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0)0,#000 150%), url("https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70078feab235ec03658693bdd77f6d71&auto=format&fit=crop&w=2100&q=80")' } },
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'div',
        { className: 'col-sm-4 quote' },
        '"Eating is a necessity, but cooking is an art" ',
        (0, _hyperapp.h)('br', null),
        (0, _hyperapp.h)(
          'strong',
          null,
          ' - Spicy Goulash - '
        )
      )
    )
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        "section",
        { id: "Reviews" },
        (0, _hyperapp.h)(
            "div",
            { className: "container" },
            (0, _hyperapp.h)(
                "div",
                { className: "row" },
                (0, _hyperapp.h)(
                    "div",
                    { className: "col-md-8" },
                    (0, _hyperapp.h)(
                        "div",
                        { className: "side-img" },
                        (0, _hyperapp.h)("img", { src: "http://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png" })
                    )
                ),
                (0, _hyperapp.h)(
                    "div",
                    { className: "col-md-4" },
                    (0, _hyperapp.h)(
                        "h5",
                        { className: "comp-title" },
                        "Reviews"
                    ),
                    (0, _hyperapp.h)(
                        "h2",
                        null,
                        "Food & ",
                        (0, _hyperapp.h)("br", null),
                        " Wine"
                    ),
                    (0, _hyperapp.h)(
                        "h4",
                        null,
                        "\"Best Restaurant in the ATL area!\""
                    ),
                    (0, _hyperapp.h)(
                        "p",
                        null,
                        "Keytar bushwick health goth, tilde readymade prism tacos live-edge vexillologist scenester hashtag PBR&B kale chips. Air plant +1 plaid tousled fam, tilde iceland tbh meditation hammock glossier locavore. "
                    ),
                    (0, _hyperapp.h)(
                        "div",
                        { className: "author" },
                        (0, _hyperapp.h)(
                            "strong",
                            null,
                            "An Nguyen"
                        ),
                        (0, _hyperapp.h)(
                            "em",
                            null,
                            "- Winner of Iron Chef"
                        )
                    ),
                    (0, _hyperapp.h)(
                        "div",
                        { className: "arrows" },
                        (0, _hyperapp.h)("i", { "class": "fas fa-arrow-left" }),
                        (0, _hyperapp.h)("i", { "class": "fas fa-arrow-right ready" })
                    )
                )
            )
        )
    );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        "section",
        { id: "SpecialMenu", className: "texturebg" },
        (0, _hyperapp.h)(
            "div",
            { className: "container" },
            (0, _hyperapp.h)(
                "h5",
                { className: "comp-title" },
                "Special Menu"
            ),
            (0, _hyperapp.h)(
                "h2",
                null,
                "Delicious Flavor of Autumn"
            ),
            (0, _hyperapp.h)(
                "div",
                { className: "row boxes" },
                (0, _hyperapp.h)(
                    "div",
                    { className: "col-md-4" },
                    (0, _hyperapp.h)(
                        "div",
                        { className: "box" },
                        (0, _hyperapp.h)(
                            "div",
                            { className: "box-img" },
                            (0, _hyperapp.h)(
                                "div",
                                { className: "price-circle" },
                                "$25"
                            )
                        ),
                        (0, _hyperapp.h)(
                            "span",
                            { className: "title" },
                            "Grill, No Smoke"
                        ),
                        (0, _hyperapp.h)(
                            "p",
                            { className: "details" },
                            "Synth butcher drinking vinegar viral distillery chartreuse porkless belly chicharrones."
                        )
                    )
                ),
                (0, _hyperapp.h)(
                    "div",
                    { className: "col-md-4" },
                    (0, _hyperapp.h)(
                        "div",
                        { className: "box" },
                        (0, _hyperapp.h)(
                            "div",
                            { className: "box-img2" },
                            (0, _hyperapp.h)(
                                "div",
                                { className: "price-circle" },
                                "$25"
                            )
                        ),
                        (0, _hyperapp.h)(
                            "span",
                            { className: "title" },
                            "Feels, No Ooze"
                        ),
                        (0, _hyperapp.h)(
                            "p",
                            { className: "details" },
                            "Synth butcher drinking vinegar viral distillery chartreuse porkless belly chicharrones."
                        )
                    )
                ),
                (0, _hyperapp.h)(
                    "div",
                    { className: "col-md-4" },
                    (0, _hyperapp.h)(
                        "div",
                        { className: "box" },
                        (0, _hyperapp.h)(
                            "div",
                            { className: "box-img3" },
                            (0, _hyperapp.h)(
                                "div",
                                { className: "price-circle" },
                                "$25"
                            )
                        ),
                        (0, _hyperapp.h)(
                            "span",
                            { className: "title" },
                            "Fills, No stuffed"
                        ),
                        (0, _hyperapp.h)(
                            "p",
                            { className: "details" },
                            "Synth butcher drinking vinegar viral distillery chartreuse porkless belly chicharrones."
                        )
                    )
                )
            ),
            (0, _hyperapp.h)(
                "a",
                { className: "link", href: "#" },
                "View Full Menu"
            )
        )
    );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        "section",
        { id: "TopImg" },
        (0, _hyperapp.h)(
            "div",
            { className: "container" },
            (0, _hyperapp.h)(
                "div",
                { className: "title" },
                (0, _hyperapp.h)(
                    "h5",
                    null,
                    "Welcome"
                ),
                (0, _hyperapp.h)(
                    "h1",
                    null,
                    "Stake & Potatoes"
                )
            ),
            (0, _hyperapp.h)(
                "div",
                { className: "contact-info" },
                (0, _hyperapp.h)(
                    "div",
                    { className: "container" },
                    (0, _hyperapp.h)(
                        "div",
                        { className: "booking" },
                        "Book a table directly"
                    ),
                    (0, _hyperapp.h)(
                        "h2",
                        null,
                        "(470) 122 7234"
                    ),
                    (0, _hyperapp.h)(
                        "div",
                        { className: "hours" },
                        "Opening Hours ",
                        (0, _hyperapp.h)(
                            "strong",
                            null,
                            " Mon - Fri: "
                        ),
                        " 9am - 9pm",
                        (0, _hyperapp.h)(
                            "strong",
                            null,
                            " Weekend: "
                        ),
                        " 9am - 11pm"
                    )
                )
            )
        )
    );
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[12]);