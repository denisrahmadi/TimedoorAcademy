/*
function detail(option) {
    let image,title,origin,material,price
 
    if (option === "ramen"){
        image = "https://i.ibb.co/hYMzxSC/ramen.jpg"
        title = "Ramen"
        origin = "Jepang"
        material = "Mie Ramen, Ayam, Sawi Hijau, Kaldu Ayam, Jahe"
        price = "Rp 25.000"
    } else if (option === "pizza"){
        image = "https://i.ibb.co/ckz3Nd7/pizza.jpg"
        title = "Pizza"
        origin = "Italia"
        material = "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble"
        price = "Rp 60.000"
    } else if (option === "kimchi"){
        image = "https://i.ibb.co/Vw62nCp/kimchi.jpg"
        title = "Kimchi"
        origin = "Korea Selatan"
        material = "Sawi Putih, Lobak, Cabai,  Saus Ikan Daun Bawang"
        price = "Rp 102.000"
    } else{
        image = "https://i.ibb.co/2NHd94W/rendang.jpg"
        title = "Rendang"
        origin = "Indonesia"
        material = "Daging Sapi, Daun Singkong, Cabai Rawit, Lengkuas"
        price = "Rp 50.000"
    }
    document.getElementById("image").src= image;
    document.getElementById("foodTitle").innerHTML = title;
    document.getElementById("foodOrigin").innerHTML = "Asal Makanan : " + origin;
    document.getElementById("foodMaterial").innerHTML = "Bahan Makanan : "  + material;
    document.getElementById("foodPrice").innerHTML = price;
}
*/

/*
function detail(option) {
    let image,title,origin,material,price
 
switch (option) {
  case "ramen":
        image = "https://i.ibb.co/hYMzxSC/ramen.jpg"
         title = "Ramen"
         origin = "Jepang"
         material = "Mie Ramen, Ayam, Sawi Hijau, Kaldu Ayam, Jahe"
         price = "Rp 25.000"
    break;
  case "pizza":
         image = "https://i.ibb.co/ckz3Nd7/pizza.jpg"
         title = "Pizza"
         origin = "Italia"
         material = "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble"
         price = "Rp 60.000"
    break;
  case "kimchi":
         image = "https://i.ibb.co/Vw62nCp/kimchi.jpg"
         title = "Kimchi"
         origin = "Korea Selatan"
         material = "Sawi Putih, Lobak, Cabai,  Saus Ikan Daun Bawang"
         price = "Rp 102.000"
    break;
  default:
         image = "https://i.ibb.co/2NHd94W/rendang.jpg"
         title = "Rendang"
         origin = "Indonesia"
         material = "Daging Sapi, Daun Singkong, Cabai Rawit, Lengkuas"
         price = "Rp 50.000"
    break;
}
    document.getElementById("image").src= image;
    document.getElementById("foodTitle").innerHTML = title;
    document.getElementById("foodOrigin").innerHTML = "Asal Makanan : " + origin;
    document.getElementById("foodMaterial").innerHTML = "Bahan Makanan : "  + material;
    document.getElementById("foodPrice").innerHTML = price;
}
*/

// ini latihan latihan aja

function detail(option) {
  let image, title, origin, material, price;
  if (option === "ramen") {
    image = "https://i.ibb.co/hYMzxSC/ramen.jpg";
    title = "Ramen";
    origin = "Jepang";
    material = "Mie Ramen, Ayam, Sawi Hijau, Kaldu Ayam, Jahe";
    price = "Rp 25.000";
  } else if (option === "pizza") {
    image = "https://i.ibb.co/ckz3Nd7/pizza.jpg";
    title = "Pizza";
    origin = "Italia";
    material = "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble";
    price = "Rp 60.000";
  } else if (option === "kimchi") {
    image = "https://i.ibb.co/Vw62nCp/kimchi.jpg";
    title = "Kimchi";
    origin = "Korea Selatan";
    material = "Sawi Putih, Lobak, Cabai, Saus Ikan Daun Bawang";
    price = "Rp 102.000";
  } else if (option === "rendang") {
    image = "https://i.ibb.co/2NHd94W/rendang.jpg";
    title = "Rendang";
    origin = "Indonesia";
    material = "Daging Sapi, Daun Singkong, Cabai Rawit, Lengkuas";
    price = "Rp 50.000";
  }

  document.getElementById("image").innerHTML = image;
  document.getElementById("foodTitle").innerHTML = title;
  document.getElementById("foodOrigin").innerHTML = origin;
  document.getElementById("foodMaterial").innerHTML = material;
  document.getElementById("foodPrice").innerHTML = price;
}

switch (option) {
  case "ramen":
    image = "https://i.ibb.co/hYMzxSC/ramen.jpg";
    title = "Ramen";
    origin = "Jepang";
    material = "Mie Ramen, Ayam, Sawi Hijau, Kaldu Ayam, Jahe";
    price = "Rp 25.000";
    break;
  case "pizza":
    image = "https://i.ibb.co/ckz3Nd7/pizza.jpg";
    title = "Pizza";
    origin = "Italia";
    material = "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble";
    price = "Rp 60.000";
    break;
  case "kimchi":
    image = "https://i.ibb.co/Vw62nCp/kimchi.jpg";
    title = "Kimchi";
    origin = "Korea Selatan";
    material = "Sawi Putih, Lobak, Cabai, Saus Ikan Daun Bawang";
    price = "Rp 102.000";
    break;
    default:
    image = "https://i.ibb.co/2NHd94W/rendang.jpg";
    title = "Rendang";
    origin = "Indonesia";
    material = "Daging Sapi, Daun Singkong, Cabai Rawit, Lengkuas";
    price = "Rp 50.000";
    break;
}







function detail(option) {
    
        image = window[option].image
        title = window[option].title;
        origin = window[option].origin
        material = window[option].material
        price = window[option].price

    document.getElementById("image").src= image;
    document.getElementById("foodTitle").innerHTML = title;
    document.getElementById("foodOrigin").innerHTML = "Asal Makanan : " +origin;
    document.getElementById("foodMaterial").innerHTML = "Bahan Makanan : "  +material;
    document.getElementById("foodPrice").innerHTML = "Rp. " + price;
}