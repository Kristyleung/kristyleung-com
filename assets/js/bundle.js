// Get Current Year
document.getElementById("year").innerHTML = new Date().getFullYear();
// Create back button
function goBack() {
    window.history.back();
}
// Jquery Plugins
$(function() {
    $("img.lazyload").lazyload();
});