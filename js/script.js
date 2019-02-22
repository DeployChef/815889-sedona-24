var popupButton = document.querySelector(".popup-button");
var popup = document.querySelector(".map-search");
var popupOpen = false;

popupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!popupOpen)
    {
        popup.classList.add("map-search-show");
        if(popup.classList.contains("map-search-hide"))
            popup.classList.remove("map-search-hide");
        popupOpen = true;
    }
    else
    {
        popup.classList.add("map-search-hide");
        if(popup.classList.contains("map-search-show"))
            popup.classList.remove("map-search-show");
        popupOpen = false;
    }
});