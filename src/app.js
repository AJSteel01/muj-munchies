const app = new Vue({
  el: "#restSection",
  data() {
    return {
      restaurants: [],
    };
  },
  computed: {
    restGroups() {
      let resultArray = [];
      let tempArray = [];
      for (let i = 0; i < this.restaurants.length; i++) {
        if (i % 3 == 0 && i != 0) {
          console.log(true);
          resultArray.push(tempArray);
          let tempArray = [];
        }

        tempArray.push(this.restaurants[i]);
      }
      console.log(`restGroups: ${resultArray}`);
      return resultArray;
    },
  },
  async created() {
    const data = await this.fetchAndLoad(
      "http://localhost:3030/api/restaurants"
    );

    console.log(data);
    this.restaurants = data;
  },
  methods: {
    async fetchAndLoad(url) {
      const response = await fetch(url);

      if (response.errors) throw new Error(response.errors[0].message);

      const obj = await response.json();
      return obj.data || obj;
    },
  },
});

//import { $ } from "../node_modules/jquery";
//import { createPopper } from "@popperjs/core";

async function fetchAndLoad(url) {
  const response = await fetch(url);

  if (response.errors) throw new Error(response.errors[0].message);

  const obj = await response.json();
  return obj.data || obj;
}

// function createMenu(data, body) {
//   const targetFields = ["id", "name", "price"];

//   data.forEach((dishes, index) => {
//     console.log(dishes);
//     const row = `<tr>
//     <td>${dish["id"]}</td>
//     <td>${dish["name"]}</td>
//     <td>${dish["price"]}</td>
//     </tr>`;
//     body.innerHTML += row;
//   });
// }

// createMenu(fetchAndLoad("http://localhost:3030/api/restaurants/2?include=all"))
// // For CrazyChefs
// $("#restaurantModal").on("show.bs.modal", async function (e) {
//   const data = await fetchAndLoad(
//     "http://localhost:3030/api/restaurants/3?include=all"
//   );

//   createMenu(data.dishes);
// });

// $("#restaurantModal").on("hidden.bs.modal", function (e) {
//   const tableBody = document.getElementById("myTable");

//   tableBody.innerHTML = "";
// });

// //For Zaika
// $("#zaikaModal").on("show.bs.modal", async function (e) {
//   const data = await fetchAndLoad(
//     "http://localhost:3030/api/restaurants/1?include=all"
//   );

//   createMenu(data.dishes);
// });

// $("#zaikaModal").on("hidden.bs.modal", function (e) {
//   const tableBody = document.getElementById("zaikaTable");

//   tableBody.innerHTML = "";
// });

// //For Tandoor Se
// $("#tandoorModal").on("show.bs.modal", async function (e) {
//   const data = await fetchAndLoad(
//     "http://localhost:3030/api/restaurants/4?include=all"
//   );

//   createMenu(data.dishes);
// });

// $("#tandoorModal").on("hidden.bs.modal", function (e) {
//   const tableBody = document.getElementById("tandoorTable");

//   tableBody.innerHTML = "";
// });

// //For Dev
// $("#devModal").on("show.bs.modal", async function (e) {
//   const data = await fetchAndLoad(
//     "http://localhost:3030/api/restaurants/2?include=all"
//   );

//   createMenu(data.dishes);
// });

// $("#devModal").on("hidden.bs.modal", function (e) {
//   const tableBody = document.getElementById("devTable");

//   tableBody.innerHTML = "";
// });

// //For Lets Go
// $("#letsgoModal").on("show.bs.modal", async function (e) {
//   const data = await fetchAndLoad(
//     "http://localhost:3030/api/restaurants/2?include=all"
//   );
//   const tableBody = document.getElementById("letsgoTable");

//   createMenu(data.dishes, tableBody);
// });

// $("#letsgoModal").on("hidden.bs.modal", function (e) {
//   const tableBody = document.getElementById("letsgoTable");

//   tableBody.innerHTML = "";
// });

// //For Saras
// $("#sarasModal").on("show.bs.modal", async function (e) {
//   const data = await fetchAndLoad(
//     "http://localhost:3030/api/restaurants/2?include=all"
//   );

//   createMenu(data.dishes);
// });

// $("#sarasModal").on("hidden.bs.modal", function (e) {
//   const tableBody = document.getElementById("sarasTable");

//   tableBody.innerHTML = "";
// });

// $(document).ready(async (e) => {
//   const restSection = document.getElementById("restSection");

//   const restData = await fetchAndLoad("http://localhost:3030/api/restaurants");

//   restData.forEach((rest, index) => {
//     if (index % 3 === 0) {
//       const row = document.createElement("div");
//       row.classList.add("row", "mb-4");

//       for (let j = 0; j < 3; j++) {
//         const card = document.createElement("div");
//         card.classList.add("card", "bg-dark", "text-white", "text-center");

//         const item = document.createElement("div");
//         item.classList.add("card-body");

//         const h3 = document.createElement("h3");
//         h3.innerText = restData[index + j]["restName"];

//         const desc = document.createElement("p");
//         desc.innerText = restData[index + j]["description"];

//         card.appendChild(h3);
//         card.appendChild(desc);
//       }
//       restSection.appendChild(row);
//     }
//   });
// });
