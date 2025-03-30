// ==UserScript==
// @name         Replace Google Logo with Spinning Fish
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Replace the Google logo with a spinning fish GIF on google.com
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to replace the Google logo with the spinning fish
    function replaceLogo() {
        // Select the Google logo element
        const logo = document.querySelector('img[alt="Google"]');
        
        if (logo) {
            // Create a new image element for the spinning fish
            const fish = document.createElement('img');
            fish.src = 'https://media1.tenor.com/m/ZHze27YyLIkAAAAd/joel-spinning.gif';
            fish.style.width = logo.style.width;
            fish.style.height = logo.style.height;
            
            // Replace the Google logo with the fish
            logo.parentElement.replaceChild(fish, logo);
        } else {
            // Retry if the logo is not found yet
            setTimeout(replaceLogo, 1000);
        }
    }

    // Execute the function to replace the logo
    replaceLogo();
})();