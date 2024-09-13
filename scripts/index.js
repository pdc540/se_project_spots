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
const formElement = modal.querySelector(".modal__form");
const editProfileBtn = document.querySelector(".profile__edit-button");
const modalCloseBtn = document.querySelector(".modal__close-btn");

const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__description");

const nameInput = modal.querySelector("#name");
const descInput = modal.querySelector("#description");

const submitButton = modal.querySelector(".modal__submit-btn");

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function closeProfileModal() {
  modal.classList.remove("modal_opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__title");
  cardNameElement.textContent = data.name;
  const cardImageElement = cardElement.querySelector(".card__image");
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;

  return cardElement;
}

editProfileBtn.addEventListener("click", function () {
  modal.classList.add("modal_opened");
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
});

modalCloseBtn.addEventListener("click", function () {
  closeProfileModal();
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
  closeProfileModal();
}

formElement.addEventListener("submit", handleProfileFormSubmit);

for (i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
