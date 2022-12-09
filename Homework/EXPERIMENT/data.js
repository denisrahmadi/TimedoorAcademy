const foods = [
  {
    name: "Gado - Gado",
    img: 'https://3.bp.blogspot.com/-H6tqQ1mlilE/V6odVDEF8GI/AAAAAAAA2Ag/Wuf8cksZwv82nJ3w7IlYcJNu1gmVCYiSACLcB/s1600/Packshot%2BGADO%2BGADO.png',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${100}`,
  },
  {
    name: "Nasi Pecel",
    img: 'https://dapursolo.com/library/2019/06/soto-betawi-1561628865.png',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${200}`,
  },
  {
    name: "Soto Betawi",
    img: 'https://dapursolo.com/library/2019/06/nasi-pecel-maduin-1561626911.png',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${300}`,
  },
];

const drink = {
  esTeh: {
    name: "Es Teh Manis",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${100}`,
  },
  airMineral: {
    name: "Air Mineral",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${200}`,
  },
  tehTarik: {
    name: "Teh Tarik",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nulla? Nulla facere optio rerum! Veniam quos tempora dolore",
    price: `Rp. ${300}`,
  },
};



for (const food in foods) {
  output += `<li>${food.name}</li>`
}

