"use strict";

//VAR:
const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//FUNCTION: define an open modal function
const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

//FUNCTION: define an close modal function
const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

//FUNCTION: select each button and apply the open function
for (let i = 0; i < btnOpenModal.length; i++) {
	btnOpenModal[i].addEventListener("click", openModal);
}

//FUNCTION: define actions to close the modal
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
