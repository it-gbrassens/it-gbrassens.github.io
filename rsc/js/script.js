"use strict";


function ajax() {

    var pathFile = document.location.pathname;
    var fileName = pathFile.match(/[^\/]+$/);
    var pathOnly = pathFile.replace(fileName, '');
    var pathModule = pathOnly;

    if (pathOnly == "/" && fileName != "inscription.html") {
        fileName = "index.html";
        pathOnly = "/";
        pathFile = pathOnly + fileName;
    }

    $('nav').load('/navigation.html', function() {
        if (fileName != "inscription.html") {
            $("a[href='" + pathOnly + "index.html" + "']").addClass("active");
            console.log("yes");
        }
        else {
            $("a[href='" + pathOnly + "inscription.html" + "']").addClass("active");
        }
    });

    $('aside').load(pathModule + "menu.html", function() {
        $("a[href='" + pathFile + "']").addClass("active");
        console.log(pathFile);
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