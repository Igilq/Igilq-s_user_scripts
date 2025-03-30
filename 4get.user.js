// ==UserScript==
// @name         Redirect Google to 4get
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Redirects Google searches to 4get.lunar.icu
// @author       Igilq
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function redirectTo4get() {

        const currentUrl = window.location.href;

        if (currentUrl.includes('https://www.google.com/search?q=')) {

            const urlParams = new URLSearchParams(currentUrl.split('?')[1]);
            const queryParam = urlParams.get('q');

            const newUrl = `https://4get.lunar.icu/web?s=%s`.replace('%s', encodeURIComponent(queryParam));
       window.location.replace(newUrl);
        }
    }

    redirectTo4get();
})();
