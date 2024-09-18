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

  {
    name: "Landscape test",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

// establish variables

const editModal = document.querySelector("#editprofilemodal");
const formElement = editModal.querySelector(".modal__form");
const editProfileBtn = document.querySelector(".profile__edit-button");
const modalCloseBtn = document.querySelector(".modal__close-btn");

const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__description");

const nameInput = editModal.querySelector("#name");
const descInput = editModal.querySelector("#description");

const submitButton = editModal.querySelector(".modal__submit-btn");

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

const newPostModal = document.querySelector("#newpostmodal");
const newPostFormElement = newPostModal.querySelector(".modal__form");
const newPostBtn = document.querySelector(".profile__add-button");
const newPostModalCloseBtn = document.querySelector("#newpostmodalclosebtn");
const newPostSaveBtn = newPostModal.querySelector(".modal__submit-btn");
const linkInput = newPostModal.querySelector("#imglink");
const captionInput = newPostModal.querySelector("#caption");

const previewModal = document.querySelector("#modal-preview");
const previewModalImageElement = previewModal.querySelector(".modal__image");
const previewModalCaptionElement =
  previewModal.querySelector(".modal__caption");
const previewModalCloseBtn = document.querySelector("#previewmodalclosebtn");

// universal 'modal' opener

function openModal(custommodal) {
  custommodal.classList.add("modal_opened");
}

// universal 'modal' closer

function closeModal(custommodal) {
  custommodal.classList.remove("modal_opened");
}
//

editProfileBtn.addEventListener("click", () => {
  //open the edit profile modal
  openModal(editModal);
});

newPostBtn.addEventListener("click", () => {
  //open the new post modal
  openModal(newPostModal);
});

function getCardElement(data) {
  // function that returns card elements using the array info
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__title");
  cardNameElement.textContent = data.name;
  const cardImageElement = cardElement.querySelector(".card__image");
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_liked");
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    previewModalImageElement.src = cardImageElement.src;
    previewModalImageElement.alt = cardImageElement.alt;
    previewModalCaptionElement.textContent = cardNameElement.textContent;
    openModal(previewModal);
  });

  return cardElement;
}

editProfileBtn.addEventListener("click", function () {
  // open edit modal when edit button is clicked
  openModal(editModal);
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
});

modalCloseBtn.addEventListener("click", function () {
  // close edit modal
  closeModal(editModal);
});

newPostModalCloseBtn.addEventListener("click", function () {
  // close new post modal
  closeModal(newPostModal);
});

previewModalCloseBtn.addEventListener("click", function () {
  // close preview  modal
  closeModal(previewModal);
});

function handleProfileFormSubmit(evt) {
  //update profile name and description function
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
  closeModal(editModal);
}

formElement.addEventListener("submit", handleProfileFormSubmit); // edit modal form submit event

initialCards.forEach(function (item) {
  // function that iterates through the initialCards array and prepends the cards
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});

// add new card
function addNewCard(link, caption) {
  const newCardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const newCardNameElement = newCardElement.querySelector(".card__title");
  newCardNameElement.textContent = caption.value;
  const newCardImageElement = newCardElement.querySelector(".card__image");
  newCardImageElement.src = link.value;
  newCardImageElement.alt = caption.value;

  const newCardLikeBtn = newCardElement.querySelector(".card__like-button");
  const newCardDeleteBtn = newCardElement.querySelector(".card__delete-button");

  newCardLikeBtn.addEventListener("click", () => {
    newCardLikeBtn.classList.toggle("card__like-button_liked");
  });

  newCardDeleteBtn.addEventListener("click", () => {
    newCardElement.remove();
  });

  newCardImageElement.addEventListener("click", () => {
    previewModalImageElement.src = newCardImageElement.src;
    previewModalImageElement.alt = newCardImageElement.alt;
    previewModalCaptionElement.textContent = newCardNameElement.textContent;
    openModal(previewModal);
  });

  cardsList.prepend(newCardElement);
}

function handleNewPostFormSubmit(evt) {
  //update profile name and description function
  evt.preventDefault();
  console.log("button1");
  addNewCard(linkInput, captionInput);
  console.log("button2");
  closeModal(newPostModal);
}

newPostFormElement.addEventListener("submit", handleNewPostFormSubmit);
