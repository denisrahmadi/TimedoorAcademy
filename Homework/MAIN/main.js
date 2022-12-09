function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function hideModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// --------------------------------------------------------------------------------------------------------------------

const foods = [
  {
    name: "Gado - Gado",
    img: "https://3.bp.blogspot.com/-H6tqQ1mlilE/V6odVDEF8GI/AAAAAAAA2Ag/Wuf8cksZwv82nJ3w7IlYcJNu1gmVCYiSACLcB/s1600/Packshot%2BGADO%2BGADO.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${100}`,
  },
  {
    name: "Nasi Pecel",
    img: "https://dapursolo.com/library/2019/06/soto-betawi-1561628865.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${200}`,
  },
  {
    name: "Soto Betawi",
    img: "https://dapursolo.com/library/2019/06/nasi-pecel-maduin-1561626911.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${300}`,
  },
];

let outputFood = ``;
for (const food of foods) {
  outputFood += `
        <li class="wrapperMenu">
            <div class="card">
                <p>${food.name}</p>
                <img src="${food.img}" width="200px" height="200px">
                <p>${food.desc}</p>
                <p>${food.price}</p>
                <button onclick="showModal()">Buy</button>
            </div>
        </li>
`;
}

document.getElementById("ulFood").innerHTML = outputFood;

const drinks = [
  {
    name: "Es Teh Manis",
    img: "https://pngimage.net/wp-content/uploads/2018/06/teh-manis-panas-png.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${100}`,
  },
  {
    name: "Air Mineral",
    img: "https://www.tobys.co.id/wp-content/uploads/2017/05/AIR-MINERAL-TOBYS.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${200}`,
  },
  {
    name: "Teh Tarik",
    img: "https://burgerking.com.my/upload/image/Product/122/Teh%20Tarik.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${300}`,
  },
];

let outputDrink = ``;
for (const drink of drinks) {
  outputDrink += `
        <li class="wrapperMenu">
            <div class="card">
                <p>${drink.name}</p>
                <img src="${drink.img}" width="200px" height="200px">
                <p>${drink.desc}</p>
                <p>${drink.price}</p>
                <button onclick="showModal()">Buy</button>
            </div>
        </li>
`;
}

document.getElementById("ulDrink").innerHTML = outputDrink;

// ---------------------------------------------------------------------------------------------------

const cities = [
  "Jakarta Barat",
  "Jakarta Pusat",
  "Jakarta Selatan",
  "Jakarta Timur",
  "Jakarta Utara",
  "Tangerang",
  "Tangerang Selatan",
  "Batang",
  "Batu",
  "Cimahi",
  "Bekasi",
  "Belitung",
  "Belitung Timur",
  "Boyolali",
  "Cilacap",
  "Brebes",
  "Ciamis",
  "Bukittinggi",
  "Cianjur",
  "Cilegon",
  "Buleleng",
  "Baubau",
  "Cirebon",
  "Surabaya",
  "Medan",
];

let outputResto = "";

for (const city of cities) {
  outputResto += `<li>${city}</li>`;
}

document.getElementById("cabangResto").innerHTML = outputResto;

// -----------------------------------------------------------------------------------------------------------

const app = new Vue({
  el: '#app',
  data: {
    customerName: ["Aisha", "Denis", "Keanu"],
    comments: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsum vel commodi ipsam neque voluptas consequatur sunt. Velit quasi rem debitis quia repudiandae voluptas quam nihil libero,",
  },
  methods: {},
  computed: {},
})