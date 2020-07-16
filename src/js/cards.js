const container = document.querySelector(".personaggi__content-container");

const cardsData = [
  {
    name: "Tab&ugrave;",
    subtitle: "&nbsp;",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/214_tabu.png",
    alt: "Tab&ugrave;",
  },
  {
    name: "Tab&ugrave;",
    subtitle: "In piscina",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/218_tabu-5.png",
    alt: "Tabù in piscina",
  },
  {
    name: "Tab&ugrave;",
    subtitle: "che corre",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/215_tabu-2.png",
    alt: "Tabù che corre;",
  },
  {
    name: "Tab&ugrave;",
    subtitle: "il pirata",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/216_tabu-3.png",
    alt: "Tabù il pirata",
  },
  {
    name: "Tabù",
    subtitle: "in Egitto",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/221_frick-e-tabu.png",
    alt: "Frick insieme a Tabù",
  },
  {
    name: "Tab&ugrave;",
    subtitle: "il vichingo",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/217_tabu-4.png",
    alt: "Tabù il vichingo",
  },
  {
    name: "Ray",
    subtitle: "&nbsp;",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/213_ray.png",
    alt: "Ray",
  },
  {
    name: "Ray e Tab&ugrave;",
    subtitle: "Gli inseparabili",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/219_tabu-ray.png",
    alt: "Ray e Tabù",
  },
  {
    name: "Mel&ugrave;",
    subtitle: "&nbsp;",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/225_melu.png",
    alt: "Melù",
  },
  {
    name: "Mel&ugrave;",
    subtitle: "Melù al parco",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/212_melu-2.png",
    alt: "Melù al parco",
  },
  {
    name: "Lolla",
    subtitle: "&nbsp;",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/222_lolla.png",
    alt: "Lolla",
  },
  {
    name: "Lolla",
    subtitle: "lolla che corre",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/223_lolla-2.png",
    alt: "Lolla che corre",
  },
  {
    name: "Lolla",
    subtitle: "lolla al parco",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/224_lolla-3.png",
    alt: "Lolla che corre",
  },
  {
    name: "Frick",
    subtitle: "&nbsp;",
    image: "https://cdn.salesjet.io/850/funnel_files/1155/220_frick.png",
    alt: "Frick",
  },
];

container.innerHTML = `${cardsData
  .map(({ name, subtitle, image, alt }) => {
    return /*html*/ `<div class="card">
    <img class="card__image" src="${image}" alt="${alt}" />
    <h3 class="card__name">${name}</h3>
    <span class="card__subtext">${subtitle}</span>
  </div>`;
  })
  .join("")}`;
