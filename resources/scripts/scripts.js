$(document).ready(function(){
    $(this).nextUntil("tr.clickable").slideToggle(100, function(){})

    $("#projects > div > div > div.table-container > table > tbody > .clickable").click(function() {
        $(this).nextUntil("tr.clickable").slideToggle(100, function(){})
    });
})