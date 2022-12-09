function detail(option) {
    var image = document.getElementById('image')
    var foodTitle = document.getElementById('foodTitle')
    var foodOrigin = document.getElementById('foodOrigin')
    var foodMaterial = document.getElementById('foodMaterial')
    var foodPrice = document.getElementById('foodPrice')
  
    if (option === "ramen") {
        image.src = "https://i.ibb.co/hYMzxSC/ramen.jpg"
        foodTitle.innerText = "Ramen"
        foodOrigin.innerText = "Asal Makanan : Jepang"
        foodMaterial.innerText = "Bahan Makanan : " + "Mie Ramen, Ayam, Sawi Hijau, Kaldu Ayam, Jahe"
        foodPrice.innerText = "Rp 25.000"
      
    } else if (option === "pizza") {
        image.src = "https://i.ibb.co/ckz3Nd7/pizza.jpg" 
        foodTitle.innerText = "Pizza" 
        foodOrigin.innerText = "Asal Makanan : Italia" 
        foodMaterial.innerText = "Bahan Makanan : " + "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble"
        foodPrice.innerText = "Rp 60.000" 
    
    } else if (option === "kimchi") {
        image.src = "https://i.ibb.co/Vw62nCp/kimchi.jpg"
        foodTitle.innerText = "Kimchi" 
        foodOrigin.innerText = "Asal Makanan : Korea Selatan" 
        foodMaterial.innerText = "Bahan Makanan : " + "Sawi Putih, Lobak, Cabai, Saus Ikan Daun Bawang"
        foodPrice.innerText = "Rp 102.000" 

    } else {
        image.src = "https://i.ibb.co/2NHd94W/rendang.jpg"
        foodTitle.innerText = "Rendang" 
        foodOrigin.innerText = "Asal Makanan : Indonesia" 
        foodMaterial.innerText = "Bahan Makanan : " + "Daging Sapi, Daun Singkong, Cabai Rawit, Lengkuas"
        foodPrice.innerText = "Rp 50.000" 

    }
  }