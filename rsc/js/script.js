"use strict";


function open_search(elmnt, trigger) {
    if (elmnt.css("display") == "none") {
        elmnt.css("display", "block");
        trigger.removeClass("fa-search").addClass("fa-close");
    }
    else {
        elmnt.css("display", "none");
        trigger.removeClass("fa-close").addClass("fa-search");
    }
}


function ajax() {

    var pathFile = document.location.pathname;
    var fileName = pathFile.match(/[^\/]+$/);
    var pathOnly = pathFile.replace(fileName, '');
    var pathModule = pathOnly;

    if (pathOnly == "/") {
        fileName = "index.html";
        pathOnly = "/";
        pathFile = pathOnly + fileName;
        pathModule = "/modules/home/";
        var pathIndex = null;
    }

    $('nav').load('/navigation.html', function() {
        if (pathOnly.includes("home")) {
            pathOnly = "/";
        }
        $("a[href='" + pathOnly + "index.html" + "']").addClass("active");
    });

    $('aside').load(pathModule + "menu.html", function() {
        $("a[href='" + pathFile + "']").addClass("active");
    });

    $('footer').load('/footer.html', function() {
    });
}


$(function () {
    $(".dropdown").has('a.active').addClass('active');
});


function pubdate() {
    var documentUpdate = new Date(document.lastModified);
    var iso8601 = /\d{4}-\d{2}-\d{2}/.exec(documentUpdate.toISOString())[0];

    $("time[pubdate]").attr("datetime", iso8601);
    $("time[pubdate]").html(documentUpdate.toLocaleDateString());
}