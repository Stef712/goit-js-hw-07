import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryIndex = document.querySelector(".gallery");

function createImage() {
  let galleryImages = "";
  for (let i = 0; i < galleryItems.length; i++) {
    galleryImages += `<li class = "gallery__item">
          <a class = "gallery__link" href = "${galleryItems[i].original}">
            <img class = "gallery__image"
                src = "${galleryItems[i].preview}"
                data-source = "${galleryItems[i].original}"
                alt = "${galleryItems[i].description}"
            />
          </a >
        </li>`;
  }
  galleryIndex.innerHTML = galleryImages;
}
createImage();

// galleryIndex.addEventListener("click", itemSelected);

// function itemSelected(event) {
//   event.preventDefault();

//   if (!event.target.classList.contains("gallery__image")) {
//     return;
//   }

//   const instance = basicLightbox.create(
//     `<img src = '${event.target.dataset.source}'>`,
//     {
//       onShow: (instance) => {
//         document.addEventListener("keydown", pressEsc);
//       },
//       onClose: (instance) => {
//         document.removeEventListener("keydown", pressEsc);
//       },
//     }
//   );
//   instance.show();

//   function pressEsc(event) {
//     if (event.code === "Escape") {
//       instance.close();
//     }
//   }
// }

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

// console.log(galleryItems);
