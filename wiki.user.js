// ==UserScript==
// @name         Redirect Fandom to Wiki.gg
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Przekierowuje z Fandom na Wiki.gg dla wybranych wiki
// @author       You
// @match        *://*.fandom.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Lista wiki, które mają być przekierowane
    const wikiList = [
        'terraria',
        'minecraft'
        // Dodaj inne wiki tutaj
    ];

    // Pobierz nazwę wiki z adresu URL
    const urlParts = window.location.hostname.split('.');
    const wikiName = urlParts[0];

    // Sprawdź, czy wiki jest na liście
    if (wikiList.includes(wikiName)) {
        // Utwórz nowy adres URL dla Wiki.gg
        const wikiGgUrl = window.location.href.replace('.fandom.com', '.wiki.gg');

        // Przekieruj na nowy adres URL
        window.location.href = wikiGgUrl;
    }
})();
