// ==UserScript==
// @name         Disable External Fonts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disables external fonts loaded from the server
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Funkcja blokująca żądania czcionek
    function blockFontRequests() {
        // Użycie MutationObserver do monitorowania zmian w dokumencie
        const observer = new MutationObserver(() => {
            // Wybierz wszystkie linki i style, które ładują czcionki
            const fontElements = document.querySelectorAll('link[rel="stylesheet"], style');

            fontElements.forEach(element => {
                // Sprawdź, czy element ładuje czcionkę
                if (element.href && element.href.includes('fonts')) {
                    element.remove();
                } else if (element.innerHTML.includes('@font-face')) {
                    element.remove();
                }
            });
        });

        // Obserwuj zmiany w głównym elemencie dokumentu
        observer.observe(document.documentElement, { childList: true, subtree: true });

        // Blokuj żądania sieciowe dla czcionek
        const originalFetch = window.fetch;
        window.fetch = function(...args) {
            if (args[0] && typeof args[0] === 'string' && args[0].includes('fonts')) {
                return Promise.resolve(new Response(''));
            }
            return originalFetch.apply(this, args);
        };

        const originalXMLHttpRequest = window.XMLHttpRequest;
        window.XMLHttpRequest = function() {
            const xhr = new originalXMLHttpRequest();
            const originalOpen = xhr.open;
            xhr.open = function(method, url) {
                if (url.includes('fonts')) {
                    return;
                }
                originalOpen.apply(xhr, arguments);
            };
            return xhr;
        };
    }

    // Wywołanie funkcji blokującej żądania czcionek
    blockFontRequests();
})();
