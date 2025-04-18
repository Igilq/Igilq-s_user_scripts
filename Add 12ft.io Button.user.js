// ==UserScript==
// @name         Add 12ft.io Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a button to each page that redirects the URL with "https://12ft.io/" prefix
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Funkcja tworząca przycisk
    function createButton() {
        // Tworzenie przycisku
        const button = document.createElement('button');
        button.textContent = 'Dodaj 12ft.io';

        // Stylizacja przycisku
        button.style.position = 'fixed';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.zIndex = '9999';
        button.style.padding = '10px';
        button.style.backgroundColor = '#007BFF';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';

        // Dodanie obsługi kliknięcia
        button.addEventListener('click', function() {
            const currentUrl = window.location.href;
            const newUrl = `https://12ft.io/${encodeURIComponent(currentUrl)}`;
            window.location.href = newUrl;
        });

        // Dodanie przycisku do dokumentu
        document.body.appendChild(button);
    }

    // Wywołanie funkcji tworzącej przycisk
    createButton();
})();
