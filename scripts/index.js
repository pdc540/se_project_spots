const initialCards = [
  {
    name: "Estes Park, Colorado",
    link: "../images/estes.jpg",
  },

  {
    name: "Barcelona, Spain",
    link: "../images/barcelona.jpg",
  },

  {
    name: "Ibiza, Spain",
    link: "../images/ibitha.jpg",
  },

  {
    name: "New York City, NY",
    link: "../images/nyc.jpg",
  },

  {
    name: "Oahu, Hawaii",
    link: "../images/oahu.jpg",
  },

  {
    name: "Las Vegas, Nevada",
    link: "../images/vegas.jpg",
  },
];

const modal = document.querySelector("#editprofilemodal");
const editProfileBtn = document.querySelector(".profile__edit-button");
const modalCloseBtn = document.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  modal.classList.add("modal__opened");
});

modalCloseBtn.addEventListener("click", function () {
  modal.classList.remove("modal__opened");
});
