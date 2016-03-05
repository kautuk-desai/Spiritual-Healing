$(document).ready(function() {
        $(".navbar-toggle").on("click", function() {
            $(this).toggleClass("active");
        });
        $('[data-toggle="tooltip"]').tooltip({title: "Prof. Mahendra Bheda", animation: true});
    });