import data from "./data.js";
const products = document.querySelector(".products");
const formatPrice = (price) => {
    return  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}
const htmls = data.map((product, i) => {
  if(i <4 ) {
     return `
  <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
  <div class="product__item">
      <div class="product__item__pic set-bg" onclick="window.location.replace('./${i+1}.html')" data-setbg="${product.image}" style='background-image: url(${product.image})' >
          <ul class="product__hover">
              <li><a href="#"><img src="img/icon/heart.png" alt=""></a></li>
              <li><a href="#"><img src="img/icon/compare.png" alt=""> <span>Compare</span></a>
              </li>
              <li><a href="#"><img src="img/icon/search.png" alt=""></a></li>
          </ul>
      </div>
      <div class="product__item__text">
          <h6>${product.name}</h6>
          <a href="#" class="add-cart">+ Add To Cart</a>
          <h5>${formatPrice(product.price)}</h5>
      </div>
  </div>
</div>
  `;
  }
 
});
products.innerHTML = htmls.join('')