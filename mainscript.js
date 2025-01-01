document.addEventListener("DOMContentLoaded", function() {
    var bar1 = document.getElementById("bar");
    var menu = document.getElementById("dropdownmenu");

    bar1.addEventListener('click', function() {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        } else {
            menu.classList.add('open');
        }
    });

    var shop = document.getElementById("shopcollection");
    shop.addEventListener("click", function(){
        alert("added to wishlist")
    });
});

