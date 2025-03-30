// ==UserScript==
// @name         Reddit to Old Reddit Redirect
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically redirects from reddit.com to old.reddit.com
// @author       You
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Redirect to old.reddit.com
    window.location.replace(window.location.href.replace("www.reddit", "old.reddit"));
})();
