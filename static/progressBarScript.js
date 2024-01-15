//  FOR TOP PROGRESS BAR 
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

function myFunction() {
    // console.log("scrolling")
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winScroll)
    // console.log(document.documentElement.scrollHeight)
    // console.log(document.documentElement.clientHeight)

    // var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // var height = document.documentElement.clientHeight;
    var height = document.documentElement.scrollHeight;

    // console.log(height)

    var scrolled = (winScroll / height) * 100;
    if (winScroll >= 3120) {
        scrolled = 100;
    }
    document.getElementById("myBar").style.width = scrolled + "%";
}
