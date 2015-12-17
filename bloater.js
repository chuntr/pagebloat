// ==UserScript==
// @name         bloater
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tampermonkey script that resizes the default column widths for some popular sites to take advantage of wider monitors
// @author       Christopher Hunter <chunter@denormal.org>
// @match        http://*.readthedocs.org/*
// @match        http://stackexchange.com/*
// @match        http://stackoverflow.com/*
// @match        http://serverfault.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function jQsetWidthByClassName(width,className){
    jQuery(className).css('width', width);
}

function jQsetMaxWidthByClassName(pxWidth,className){
    jQuery(className).css('max-width', pxWidth);
}

function setWidthByClassName(width,className){
    var elements = document.getElementsByClassName(className);
    for (var i=0; i<elements.length; i++){
        elements[i].setAttribute("style","width:"+width+";");
        elements[i].style.width = width;
    }
}

function setWidthById(width,id){
    var element = document.getElementById(id);
    element.setAttribute("style","width:"+width+";");
    element.style.width = width;
}

// readthedocs.org
jQsetWidthByClassName(1024,"div.rst-content");
jQsetMaxWidthByClassName("1128px","div.wy-nav-content");

// stackexchange
setWidthById("1200px","answers-header");
setWidthById("1200px","content");
setWidthById("1100px","mainbar");
setWidthById("1100px","question");
setWidthByClassName("1000px","post-text");
