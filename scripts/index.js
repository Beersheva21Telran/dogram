var thumbnails = document.querySelectorAll(".thumbnails-anchore");
var detailsImage = document.querySelector(".details-image");
var detailsTitle = document.querySelector(".details-title");
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function(event) {
        event.preventDefault();
        setDetails(thumbnail);
        })     
    })
function setDetails(thumbnail) {
    detailsImage.src = thumbnail.href;
    // получение контента из элемента делается через getter
    detailsTitle.textContent = thumbnail.getAttribute("data-detailed-title");
}