const thumbnails = document.querySelectorAll(".thumbnails-anchore");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainContent = document.querySelector(".main-class");
// тип данных let нужен для того, чтобы можно было менять значение переменной
let selectedItem = thumbnails[0].parentElement;
const HIDDEN = "hidden";
const SELECTED ="selected"

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function(event) {
        event.preventDefault();
        showDetails();
        setDetails(thumbnail);
        selectItem(thumbnail);
    }) 
})
function setDetails(thumbnail) {
    detailsImage.src = thumbnail.href;
    // получение контента из элемента делается через getter
    detailsTitle.textContent = thumbnail.getAttribute("data-detailed-title");
}
function showDetails() {
    // методы группы classList не требуют указания точки (.) перед названием класса
    mainContent.classList.remove(HIDDEN);
}
function hideDetails() {
    mainContent.classList.add(HIDDEN);
    selectedItem.classList.remove(SELECTED);
}
function selectItem(thumbnail) {
    selectedItem.classList.remove(SELECTED);
    selectedItem = thumbnail.parentElement;
    selectedItem.classList.add(SELECTED);
}