import "./styles/index.scss";
import "./js/cards";

document.getElementById("date").innerText = new Date().getFullYear();
/*window.addEventListener("load", () => {
  var b = document.getElementsByClassName("addToCartBtn");
  for (var i = 0; i < b.length; i++)
    b[i].onclick = (e) =>
      addToCart(e.currentTarget.dataset.productId, function () {
        window.location.href = "https://glxnow.com/checkout/1068";
      });
});

submitFormToSalesJet();
createCards();*/
