export default function () {
  const popup = document.querySelector(".popup");
  const orderSpan = document.querySelector(".order_name");
  const popupContainer = document.querySelector(".popup__container");
  popup.addEventListener("click", () => {
    popup.classList.add("d-none");
  });

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      const requestBody = {};
      for (var [name, value] of formData.entries()) requestBody[name] = value;

      try {
        const response = await fetch("/f/1155-4702", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (response.status === 200) {
          popup.classList.remove("d-none");
          orderSpan.innerText = `${requestBody.first_name} ${requestBody.last_name}`;
        } else throw new Error("Messaggio non Inviato");
      } catch (err) {
        console.dir(err);
        console.log(popupContainer);
        popupContainer.innerHTML = /*html*/ `
          <h1 class="popup__title red">Il messaggio non è stato registrato</h1>
          <p class="popup__paragraph">Per favore scrivi a giocotabu@gmail.com per effettuare il tuo ordine.</p>
        `;
        popup.classList.remove("d-none");
      }
    });
  }

  // Checkout Page:
  // /checkout/1155

  // Product-Id:
  //
}
