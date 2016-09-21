// Write your Javascript code.

$("#dialog").dialog({
    autoOpen: false,
    show: {
        effect: "explode",
        duration: 150
    },
    hide: {
        effect: "explode",
        duration: 150
    }
});

$("#logo").click(function(event) {
    $("#dialog").dialog("open");
})

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: [ "home", "about", "team" ],
        sectionsColor: [ "#F6881E", "#1589A9", "#1589A9" ],
        normalScrollElements: '#profPicsRow1, #profPicsRow2',
        
        menu: '#menu',
        
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Sobre', 'Equipe'],
        
        scrollOverflow: true
    });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});