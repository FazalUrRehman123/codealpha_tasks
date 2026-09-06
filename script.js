const images = document.querySelectorAll(".gallery-img");

// Category buttons
const allBtn = document.getElementById("allBtn");
const natureBtn = document.getElementById("natureBtn");
const carsBtn = document.getElementById("carsBtn");
const animalsBtn = document.getElementById("animalsBtn");
const citiesBtn = document.getElementById("citiesBtn");

// Filter
const filterBtn = document.getElementById("filterBtn");
const categoryButtons = document.getElementById("categoryButtons");

// Modal
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


filterBtn.addEventListener("click", function () {

    if (categoryButtons.style.display === "none") {
        categoryButtons.style.display = "flex";
    } else {
        categoryButtons.style.display = "none";
    }

});


function filterImages(category) {

    images.forEach(function (image) {

        if (category === "all" || image.dataset.category === category) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }

    });

}


// All
allBtn.addEventListener("click", function () {
    filterImages("all");
});

// Nature
natureBtn.addEventListener("click", function () {
    filterImages("nature");
});

// Cars
carsBtn.addEventListener("click", function () {
    filterImages("cars");
});

// Animals
animalsBtn.addEventListener("click",
    function () {
        filterImages("animals");
    });

// Cities
citiesBtn.addEventListener("click", function () {
    filterImages("cities");
});

let currentIndex = 0;

function showImage(index) {

    currentIndex = index;

    modalImage.src = images[currentIndex].src;
    modalImage.alt = images[currentIndex].alt;

    imageModal.style.display = "flex";
}


images.forEach(function (image, index) {

    image.addEventListener("click",
        function () {
            showImage(index);
        });

});


nextBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);

});


prevBtn.addEventListener("click",
    function (event) {

        event.stopPropagation();

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        showImage(currentIndex);

    });

// CLOSE MODAL

closeModal.addEventListener("click",
    function () {

        imageModal.style.display = "none";

    });

imageModal.addEventListener("click", function (event) {

    if (event.target === imageModal) {
        imageModal.style.display = "none";
    }

});