import "./styles/index.scss";
import "./js/cards";
import "./js/responsive-nav";
import submitFormToSalesJet from "./js/submitToSalesJet";

submitFormToSalesJet();
document.getElementById("date").innerText = new Date().getFullYear();
