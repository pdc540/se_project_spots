const initialCards = [
  {
    name: "Estes Park, Colorado",
    link: "https://res.cloudinary.com/dazkjajdh/image/upload/v1726718810/estes_qmpcre.jpg",
  },

  {
    name: "Barcelona, Spain",
    link: "https://res.cloudinary.com/dazkjajdh/image/upload/v1726718810/barcelona_tn03q3.jpg",
  },

  {
    name: "Ibiza, Spain",
    link: "https://res.cloudinary.com/dazkjajdh/image/upload/v1726718810/ibitha_ffcz8r.jpg",
  },

  {
    name: "New York City, NY",
    link: "https://res.cloudinary.com/dazkjajdh/image/upload/v1726718810/nyc_rnbc33.jpg",
  },

  {
    name: "Oahu, Hawaii",
    link: "https://res.cloudinary.com/dazkjajdh/image/upload/v1726718810/oahu_mvs0sx.jpg",
  },

  {
    name: "Las Vegas, Nevada",
    link: "https://res.cloudinary.com/dazkjajdh/image/upload/v1726718810/vegas_kidv1i.jpg",
  },

  {
    name: "Landscape test",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

// establish variables

const editModal = document.querySelector("#editprofilemodal");
const profileForm = editModal.querySelector(".modal__form");
const editProfileBtn = document.querySelector(".profile__edit-button");
const profileCloseBtn = document.querySelector(".modal__close-btn");

const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__description");

const nameInput = editModal.querySelector("#name");
const descInput = editModal.querySelector("#description");

const submitButton = editModal.querySelector(".modal__submit-btn");

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

const newPostModal = document.querySelector("#newpostmodal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostBtn = document.querySelector(".profile__add-button");
const newPostCloseBtn = document.querySelector("#newpostmodalclosebtn");
const newPostSaveBtn = newPostModal.querySelector(".modal__submit-btn");
const linkInput = newPostModal.querySelector("#imglink");
const captionInput = newPostModal.querySelector("#caption");

const previewModal = document.querySelector("#modal-preview");
const previewImageElement = previewModal.querySelector(".modal__image");
const previewCaptionElement = previewModal.querySelector(".modal__caption");
const previewCloseBtn = document.querySelector("#previewmodalclosebtn");

// universal 'modal' opener

function openModal(custommodal) {
  custommodal.classList.add("modal_opened");
}

// universal 'modal' closer

function closeModal(custommodal) {
  custommodal.classList.remove("modal_opened");
}
//

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
    previewImageElement.src = cardImageElement.src;
    previewImageElement.alt = cardImageElement.alt;
    previewCaptionElement.textContent = cardNameElement.textContent;
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

profileCloseBtn.addEventListener("click", function () {
  // close edit modal
  closeModal(editModal);
});

newPostCloseBtn.addEventListener("click", function () {
  // close new post modal
  closeModal(newPostModal);
});

previewCloseBtn.addEventListener("click", function () {
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

profileForm.addEventListener("submit", handleProfileFormSubmit); // edit modal form submit event

initialCards.forEach(function (item) {
  // function that iterates through the initialCards array and prepends the cards
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});

function handleNewPostFormSubmit(evt) {
  //update profile name and description function
  evt.preventDefault();

  const inputValues = {
    name: captionInput.value,
    link: linkInput.value,
  };
  const newCardElement = getCardElement(inputValues);
  cardsList.prepend(newCardElement);

  closeModal(newPostModal);
  linkInput.value = "";
  captionInput.value = "";
}

newPostForm.addEventListener("submit", handleNewPostFormSubmit);
