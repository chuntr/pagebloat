
// ==UserScript==
// @name        bloater
// @author      Christopher Hunter
// @namespace   http://github.com/chuntr/
// @source      https://github.com/chuntr/pagebloat
// @version     0.3.06
// @updateURL   https://raw.githubusercontent.com/chuntr/pagebloat/master/bloater.js
// @description Tampermonkey script that resizes the default column widths for some popular sites to take advantage of wider monitors
// @match       http://github.com/*
// @match       http://git.corp.*.*/*
// @match       http://*.readthedocs.org/*
// @match       http://stackexchange.com/*
// @match       http://*.stackexchange.com/*
// @match       http://stackoverflow.com/*
// @match       http://serverfault.com/*
// @require     http://code.jquery.com/jquery-latest.js
// @match       https://jira.bigfish.lan/*
// @grant       none
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
function setHeightByClassName(height,className){
    var elements = document.getElementsByClassName(className);
    for (var i=0; i<elements.length; i++){
        elements[i].setAttribute("style","height:"+height+";");
        elements[i].style.height = height;
    }
}
function setMarginsByClassName(marginLeft,marginRight,className){
    var elements = document.getElementsByClassName(className);
    for (var i=0; i<elements.length; i++){
        elements[i].setAttribute("style","margin-left:"+marginLeft+";");
        elements[i].setAttribute("style","margin-right:"+marginRight+";");
    }
}
function setStyleAttributeById(attributeName,value,id){
    var element = document.getElementById(id);
    element.setAttribute("style",attributeName+":"+value+";");
}
function setWidthById(width,id){
    var element = document.getElementById(id);
    element.setAttribute("style","width:"+width+";");
    element.style.width = width;
}
function setFontSizeById(newSize,id){
    var element = document.getElementById(id);
    element.setAttribute("style","font-size:"+newSize+";");
}

// readthedocs.org
jQsetWidthByClassName(1024,"div.rst-content");
jQsetMaxWidthByClassName("1128px","div.wy-nav-content");

// stackexchange
setWidthById("1100px","content");
setWidthById("1100px","mainbar");
setWidthById("1100px","question");
setWidthByClassName("1100px","post-text");
setMarginsByClassName("0","0","content");
setWidthById("1000px","answers");
setWidthById("1200px", "content");
setStyleAttributeById("margin-left","0","content");
setStyleAttributeById("margin-right","0","content");
setStyleAttributeById("width","1500px","content");

// github/git.corp
setHeightByClassName("1000","main-content");
setHeightByClassName("509","ace_editor");
setHeightByClassName("509","ace-github-light");
setHeightByClassName("509","ace_content");
setWidthByClassName("1100px","post-cell");
setWidthById("1100px","answers");

// jira
setWidthById("15%","viewissuesidebar");
//setFontSizeById("70%","viewissuesidebar");
