/*
    dictalegis.js -- Javascript library for generating Liber AL vel Legis quotations

    Copyright (C) 2024  Frater Zeteo

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/

'use strict';

(function () {

    var dictalegis = {

        quoteList: [],

        /**
         * Get a random quote
         *
         */
        getQuote: function() {
            let index = Math.floor(Math.random()*dictalegis.quoteList.length);
            let quote = this.quoteList[index];
            return quote;
        },

        /**
         * Refresh and load a new quote
         * 
         */
        refreshQuote: function(current) {
            let quote = this.getQuote();

            // Ensure new quote is not the same as current quote
            if (!current) {
                current = document.querySelector('.legis-quote').innerHTML || '';
            }
            if (current && quote == current) return this.refreshQuote(current);

            // Set the quote value
            let elements = document.querySelectorAll('.legis-quote');
            for (let i = 0; i < elements.length; i++) {
                let el = elements[i];
                el.innerHTML = quote;
            }
        },

        /**
         * Initialize needed resources
         * 
         */
        init: function() {
            if (typeof window.dictalegisQuoteList !== 'undefined' && window.dictalegisQuoteList.length) {
                dictalegis.quoteList = window.dictalegisQuoteList;
            }
            else {
                dictalegis.quoteList.push(
                    "Every man and every woman is a star. <br>\n-Liber AL I:3",
                    "Come forth, o children, under the stars, & take your fill of love! <br>\n-Liber AL I:12",
                    "I am above you and in you. My ecstasy is in yours. My joy is to see your joy. <br>\n-Liber AL I:13",
                    "For I am divided for love's sake, for the chance of union. <br>\n-Liber AL I:29",
                    "For pure will, unassuaged of purpose, delivered from the lust of result, is every way perfect. <br>\n-Liber AL I:44",
                    "Invoke me under my stars! Love is the law, love under will. <br>\n-Liber AL I:57",
                    "I give unimaginable joys on earth: certainty, not faith, while in life, upon death; peace unutterable, rest, ecstasy; nor do I demand aught in sacrifice. <br>\n-Liber AL I:58",
                    "I am the flame that burns in every heart of man, and in the core of every star. <br>\n-Liber AL II:6",
                    "Beauty and strength, leaping laughter and delicious languor, force and fire, are of us. <br>\n-Liber AL II:20",
                    "Beware therefore! Love all, lest perchance is a King concealed! <br>\n-Liber AL II:59",
                    "Success is your proof; courage is your armour; go on, go on, in my strength; & ye shall turn not back for any! <br>\n-Liber AL III:46",
                    "There is no law beyond Do what thou wilt. <br>\n-Liber AL III:60",
                    "To Me do ye reverence! to me come ye through tribulation of ordeal, which is bliss. <br>\n-Liber AL III:62",
                    "Nu is your refuge as Hadit your light; and I am the strength, force, vigour, of your arms. <br>\n-Liber AL III:17",
                    "There is a splendour in my name hidden and glorious, as the sun of midnight is ever the son. <br>\n-Liber AL III:74",
                    "Remember all ye that existence is pure joy; that all the sorrows are but as shadows; they pass & are done; but there is that which remains. <br>\n-Liber AL II:9",
                    "Nuit! Hadit! Ra-Hoor-Khuit! The Sun, Strength & Sight, Light; these are for the servants of the Star & the Snake. <br>\n-Liber AL II:21",
                    "Let the rituals be rightly performed with joy & beauty! <br>\n-Liber AL II:35",
                    "Wisdom says: be strong! Then canst thou bear more joy. Be not animal; refine thy rapture! <br>\n-Liber AL II:70"
                );
            }
            dictalegis.refreshQuote();
        }
    };

    window.dictalegis = dictalegis;

    dictalegis.init();
})();
