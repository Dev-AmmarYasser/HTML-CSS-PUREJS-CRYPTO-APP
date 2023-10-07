// Toggle Dark Mode Button
let switchBullets = document.querySelectorAll(".switch .icon");

toggler(switchBullets);

function toggler(all) {
  all.forEach((item) => {
    item.addEventListener("click", function () {
      all.forEach((item) => {
        item.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
}

// Toggel Side Bar Icons

let sideBarItems = document.querySelectorAll("aside ul li");

toggler(sideBarItems);

// Drop Down Info Toggel

let dropIcon = document.querySelectorAll("section .indicator .details .icon");

let details = document.querySelectorAll("section .indicator .details");

dropIcon.forEach((icon) => {
  icon.onclick = function () {
    icon.classList.toggle("active");

    let mainParent = icon.parentElement.parentElement;

    document
      .querySelector(`.${mainParent.classList[0]} .info`)
      .classList.toggle("active");

    details.forEach((detail) => {
      detail.classList.remove("active");
    });

    document
      .querySelector(`.${icon.parentElement.classList[0]}`)
      .classList.add("active");
  };
});

// Start Table Making With Chart Js

const chart = document.querySelector("#chart").getContext("2d");

new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116,
          61004,
        ],
        borderColor: "red",
        borderWidth: "3",
      },
      {
        label: "ETH",
        data: [
          31500, 41000, 88880, 26000, 46000, 32698, 5000, 3000, 18656, 24832,
          36844,
        ],
        borderColor: "blue",
        borderWidth: "3",
      },
    ],
  },
  options: {
    responsive: true,
  },
});

/* datasets: [ { label: 'BTC', data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004), borderColor: 'red', borderWidth: 2 
1, { 
label: 'ETH', data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004], borderColor: 'red', borderWidth: 2 */
