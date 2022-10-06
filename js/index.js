$(() => {
    $(".js-eye-grid").load("eye-grid.html", function() {
        $(".js-eye-box--border-contact").each(function(i) {
            if (i % 6 == 0) $(this).css("border-left-width", "4px");
            if (i % 6 == 5) $(this).css("border-right-width", "4px");
            if (i < 6) $(this).css("border-top-width", "4px");
            if (i >= 30) $(this).css("border-bottom-width", "4px");
        });
    });

    console.log("hahahah");
});