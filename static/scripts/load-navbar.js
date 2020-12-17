var static = document.currentScript.getAttribute('data-static');
var language = document.currentScript.getAttribute('data-language');
var root = document.currentScript.getAttribute('data-root');
var current = document.currentScript.getAttribute('data-current');

function setLinks() {
    $("#load-navbar .add-static-path").attr('src', function (_, val) {return static+val});
    $("#load-navbar .add-root").attr('href', function (_, val) {return root+val});
    $('#load-navbar .'+current).addClass("active");
    langchange = ""
    if (language == "en") {
        langchange = window.location.origin+"/fr"+window.location.pathname;
    } else if (language == "fr") {
        langchange = window.location+""
        langchange = langchange.replace("/fr", "");
    }
    $("#load-navbar .lang-change").attr('href', langchange);
}
var langchange = "";
if (language == "en") {
    $("#load-navbar").load(static+"/templates/navbar-en.html", setLinks);
} else if (language =="fr") {
    $("#load-navbar").load(static+"/templates/navbar-fr.html", setLinks);
}