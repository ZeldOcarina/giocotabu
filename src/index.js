import "./styles/index.scss";
import "./js/cards";
import "./js/responsive-nav";
import "./js/_video-player";
import "./js/_expand-text";
import submitFormToSalesJet from "./js/submitToSalesJet";

submitFormToSalesJet();
document.getElementById("date").innerText = new Date().getFullYear();
