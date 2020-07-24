import formurlencoded from "form-urlencoded";

export default function () {
  const popup = document.querySelector(".popup");
  const orderSpan = document.querySelector(".order_name");
  const popupContainer = document.querySelector(".popup__container");
  const form = document.querySelector("form");
  const cardBtn = document.querySelector("#card");
  const loader = document.querySelector(".loader");

  let btnClicked = false;

  popup.addEventListener("click", () => {
    popup.classList.add("d-none");
  });

  cardBtn.addEventListener("click", () => {
    btnClicked = true;
  });

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      loader.classList.remove("d-none");
      const formData = new FormData(form);

      const requestBody = {};
      for (var [name, value] of formData.entries()) requestBody[name] = value;
      requestBody.accept = true;

      try {
        const response = await fetch("/f/1155-4702", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formurlencoded(requestBody),
        });
        if (response.status === 200) {
          loader.classList.add("d-none");
          if (btnClicked) {
            addToCart(cardBtn.dataset.productId, function () {
              window.location.pathname = "/checkout/1155";
            });
          } else {
            popup.classList.remove("d-none");
            orderSpan.innerText = `${requestBody.first_name} ${requestBody.last_name}`;
          }
        } else throw new Error("Messaggio non Inviato");
      } catch (err) {
        console.dir(err);
        loader.classList.add("d-none");
        popupContainer.innerHTML = /*html*/ `
          <h1 class="popup__title red">Il messaggio non è stato registrato</h1>
          <p class="popup__paragraph">Per favore scrivi a giocotabu@gmail.com per effettuare il tuo ordine.</p>
        `;
        popup.classList.remove("d-none");
      }
    });
  }
}
