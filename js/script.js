var popupButton = document.querySelector(".popup-button");
var popupForm = document.querySelector(".map-search");
var popupOpen = false;

var adults = popupForm.querySelector("[name=adults-count]");
var children = popupForm.querySelector("[name=children-count]");

var checkin = popupForm.querySelector("[name=checkin]");
var checkout = popupForm.querySelector("[name=checkout]");

var isStorageSupport = true;
var adultsStorage = "";
var childrenStorage = "";

try {
    adultsStorage = localStorage.getItem("adults-count");
    childrenStorage = localStorage.getItem("children-count");
} catch (err) {
    isStorageSupport = false;
}


popupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!popupOpen) {
        popupForm.classList.add("map-search-show");
        if (popupForm.classList.contains("map-search-hide"))
            popupForm.classList.remove("map-search-hide");
        popupOpen = true;
    }
    else {
        popupForm.classList.add("map-search-hide");
        if (popupForm.classList.contains("map-search-show"))
            popupForm.classList.remove("map-search-show");
        popupOpen = false;
    }

    if (adultsStorage)
        adults.value = adultsStorage;
    if (childrenStorage)
        children.value = childrenStorage;

});

popupForm.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value) {
        evt.preventDefault();
        popupForm.classList.remove("modal-error");
        popupForm.offsetWidth = popupForm.offsetWidth;
        popupForm.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adults-count", adults.value);
            localStorage.setItem("children-count", children.value);
        }
    }
});