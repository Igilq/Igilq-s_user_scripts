// ==UserScript==
// @name         Redirect Fandom to Wiki.gg or .wiki
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Przekierowuje z Fandom na Wiki.gg lub .wiki dla wybranych wiki
// @author       You
// @match        *://*.fandom.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Lista wiki z odpowiednimi końcówkami
    const wikiRedirects = {
        'terraria': '.wiki.gg',
        'minecraft': '.wiki',
        // Dodaj inne wiki tutaj
    };

    // Pobierz nazwę wiki z adresu URL
    const urlParts = window.location.hostname.split('.');
    const wikiName = urlParts[0];

    // Sprawdź, czy wiki jest na liście
    if (wikiRedirects.hasOwnProperty(wikiName)) {
        // Pobierz odpowiednią końcówkę
        const newDomain = wikiRedirects[wikiName];

        // Utwórz nowy adres URL
        const wikiUrl = window.location.href.replace('.fandom.com', newDomain);

        // Przekieruj na nowy adres URL
        window.location.href = wikiUrl;
    }
})();
