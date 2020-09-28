$(function () {
  const listHome = [
    {
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-n6dX56dG/w:222/h:225/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/demo1.jpg",
      title: "Default Shop"
    },
    {
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-n6dX56dG/w:222/h:225/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/demo1.jpg",
      title: "Default Shop"
    },
    {
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-n6dX56dG/w:222/h:225/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/demo1.jpg",
      title: "Default Shop"
    },
    {
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-n6dX56dG/w:222/h:225/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/demo1.jpg",
      title: "Default Shop"
    },
    {
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-n6dX56dG/w:222/h:225/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/demo1.jpg",
      title: "Default Shop"
    },
    {
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-n6dX56dG/w:222/h:225/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/demo1.jpg",
      title: "Default Shop"
    },
    {
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-n6dX56dG/w:222/h:225/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/demo1.jpg",
      title: "Default Shop"
    },
    {
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-n6dX56dG/w:222/h:225/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/demo1.jpg",
      title: "Default Shop"
    },
    {
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-n6dX56dG/w:222/h:225/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/demo1.jpg",
      title: "Default Shop"
    },
    {
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-n6dX56dG/w:222/h:225/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/demo1.jpg",
      title: "Default Shop"
    }
  ]

  const showClothingMenBlack = [
    {
      id: 1,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-weUEYZtD/w:375/h:713/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/hero-fashion-classic-1.png"
    },
    {
      id: 2,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-l2ufPbzb/w:367/h:751/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/hero-fashion-classic-2.png"
    },
    {
      id: 3,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-Nb3Fe9TY/w:373/h:733/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/hero-fashion-classic-3.png"
    }
  ]
  const listClothingMenBlack = [
    {
      id: 1,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-2n5o8W-g/w:39/h:50/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/hero-men-thumb-1.jpg"
    },
    {
      id: 2,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-2n5o8W-g/w:39/h:50/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/hero-men-thumb-2.jpg"
    },
    {
      id: 3,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-2n5o8W-g/w:39/h:50/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/hero-men-thumb-3.jpg"
    }
  ]
  const listOurProducts = [
    {
      id: 1,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-zwbVD84J/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/7a.jpg",
      imgHover: "https://mld080hfvime.i.optimole.com/ZK8IPZM-0gcN5lUQ/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/7c.jpg",
      category: "Accessories",
      categorySecond: "Men",
      title: "Polo Outdoor Jacket",
      price: "£98.89",
      oldPrice: "£125.00",
      rate: "fas fa-star"
    },
    {
      id: 2,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-DQ_wcIFo/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2a.jpg",
      imgHover: "https://mld080hfvime.i.optimole.com/ZK8IPZM-JqKwBojF/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2e.jpg",
      category: "Accessories",
      categorySecond: "Men",
      title: "Polo Outdoor Jacket",
      price: "£98.89",
      oldPrice: "£125.00",
      rate: "fas fa-star"
    },
    {
      id: 3,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-DQ_wcIFo/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2a.jpg",
      imgHover: "https://mld080hfvime.i.optimole.com/ZK8IPZM-JqKwBojF/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2e.jpg",
      category: "Accessories",
      categorySecond: "Men",
      title: "Polo Outdoor Jacket",
      price: "£98.89",
      oldPrice: "£125.00",
      rate: "fas fa-star"
    },
    {
      id: 4,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-DQ_wcIFo/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2a.jpg",
      imgHover: "https://mld080hfvime.i.optimole.com/ZK8IPZM-JqKwBojF/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2e.jpg",
      category: "Accessories",
      categorySecond: "Men",
      title: "Polo Outdoor Jacket",
      price: "£98.89",
      oldPrice: "£125.00",
      rate: "fas fa-star"
    },
    {
      id: 5,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-DQ_wcIFo/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2a.jpg",
      imgHover: "https://mld080hfvime.i.optimole.com/ZK8IPZM-JqKwBojF/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2e.jpg",
      category: "Accessories",
      categorySecond: "Men",
      title: "Polo Outdoor Jacket",
      price: "£98.89",
      oldPrice: "£125.00",
      rate: "fas fa-star"
    },
    {
      id: 6,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-DQ_wcIFo/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2a.jpg",
      imgHover: "https://mld080hfvime.i.optimole.com/ZK8IPZM-JqKwBojF/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2e.jpg",
      category: "Accessories",
      categorySecond: "Men",
      title: "Polo Outdoor Jacket",
      price: "£98.89",
      oldPrice: "£125.00",
      rate: "fas fa-star"
    },
    {
      id: 7,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-DQ_wcIFo/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2a.jpg",
      imgHover: "https://mld080hfvime.i.optimole.com/ZK8IPZM-JqKwBojF/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2e.jpg",
      category: "Accessories",
      categorySecond: "Men",
      title: "Polo Outdoor Jacket",
      price: "£98.89",
      oldPrice: "£125.00",
      rate: "fas fa-star"
    },
    {
      id: 8,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-DQ_wcIFo/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2a.jpg",
      imgHover: "https://mld080hfvime.i.optimole.com/ZK8IPZM-JqKwBojF/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2e.jpg",
      category: "Accessories",
      categorySecond: "Men",
      title: "Polo Outdoor Jacket",
      price: "£98.89",
      oldPrice: "£125.00",
      rate: "fas fa-star"
    },
    {
      id: 9,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-DQ_wcIFo/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2a.jpg",
      imgHover: "https://mld080hfvime.i.optimole.com/ZK8IPZM-JqKwBojF/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2e.jpg",
      category: "Accessories",
      categorySecond: "Men",
      title: "Polo Outdoor Jacket",
      price: "£98.89",
      oldPrice: "£125.00",
      rate: "fas fa-star"
    },
    {
      id: 10,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-DQ_wcIFo/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2a.jpg",
      imgHover: "https://mld080hfvime.i.optimole.com/ZK8IPZM-JqKwBojF/w:295/h:295/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2e.jpg",
      imgChoose: "https://mld080hfvime.i.optimole.com/ZK8IPZM-fze-llWW/w:auto/h:auto/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/black-coat.jpg",
      imgChooseSecond: "https://mld080hfvime.i.optimole.com/ZK8IPZM-3P-rrvBR/w:auto/h:auto/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/blue-dark-coat.jpg",
      imgChooseThird: "https://mld080hfvime.i.optimole.com/ZK8IPZM-EGBhuVAn/w:auto/h:auto/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/light-coat.jpg",
      category: "Accessories",
      categorySecond: "Men",
      title: "Polo Outdoor Jacket",
      price: "£98.89",
      oldPrice: "£125.00",
      rate: "fas fa-star"
    },
  ]
  RenderlistOurProducts(listOurProducts)

  RenderlistHomeMenu(listHome);
  let click = 0;

  $("body").on("click", ".btn-category", function (e) {
    e.stopPropagation()
    click++;
    if (click % 2 === 1) {
      $(".categoryList").fadeIn();
      isClick = false
      console.log(isClick)
    } else {
      isClick = true;
      $(".categoryList").fadeOut();
    }
  })
  $("body").on("click", function (e) {
    if (click % 2 === 1) {
      click++;
      console.log("abc")
      $(".categoryList").fadeOut();
    }

  })
  function RenderlistHomeMenu(list) {
    const listHome = list.map((val) => {
      $(`<div class="col-sm-2.4">
        <div class="item">
          <a href=""><img src="${val.img}" alt=""></a>
          <h3>${val.title}</h3>
        </div>
      </div>`).appendTo('.products .row');
    })
  }
  $(".bannerInterface.owl-carousel").owlCarousel({
    items: 1, //số hình ảnh xuất hiện trong 1 lần
    // margin: 20,
    loop: true, //khi chạy hết hình thì chạy tiếp
    dots: true, //tạo dấu chấm khi lướt
    autoplay: true, // tự động lướt
    autoplayTimeout: 10000, //lướt sau 2s
    autoplayHoverPause: true,
    nav: true,
    navText: ["<span style='color:red'></span>", "<span style='color:red'><i class='fas fa-chevron-right'></i></span>"],
  });
  $(".productCountDown-owl.owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    navText: ["<span><i class='fas fa-chevron-left'></i></span>", "<span><i class='fas fa-chevron-right'></i></span>"]
  })
  $(".showPopularProducts.owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    navText: ["<span><i class='fas fa-chevron-left'></i></span>", "<span><i class='fas fa-chevron-right'></i></span>"]
  })
  $(".showImage-OurProducts-owl.owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    navText: ["<span><i class='fas fa-chevron-left'></i></span>", "<span><i class='fas fa-chevron-right'></i></span>"]
  })
  function RenderlistClothingMenBlack(cloth) {
    const listClothMen = cloth.map((val) => {
      $(`<li class="chooseClothMan" data-id="${val.id}"><img
        src="${val.img}"
        alt=""></li>
    `).appendTo(".bannerInterface .manBlack  .textManBlack ul");
    })
  }
  RenderlistClothingMenBlack(listClothingMenBlack)

  $(".chooseClothMan").on("click", function () {
    let id = $(this).data("id")
    let showImageClothingMenBlack = showClothingMenBlack.filter((item, index) => {
      return item.id === id;
    }).map((val) => {
      $(".showImageClothMan").empty();
      $(`<img class="NoneAnimationFirst"
      src="${val.img}"
      alt="">`).appendTo(".bannerInterface .manBlack .showImageClothMan");
    })
  });

  function RenderlistOurProducts(listOurProducts) {
    const listOurProductsMap = listOurProducts.map((val) => {
      if (val.imgChoose) {
        $(`<div class="col-sm-3">
    <div class="item">
      <div class="coverImage-OurProducts">
        <div class="ImageEmpty-OurProduct">
          <img src="${val.img}" alt="">
        </div>
        <img class="ImageHover-OurProducts" src="${val.imgHover}" alt="">
        <div class="iconInterfaceinImage-OurProduct">
          <button><span>Wishlist</span><i class="far fa-heart"></i></button>
          <button><span>Add to Cart</span><i class="fas fa-cart-plus"></i></button>
          <button><span>Compare</span><i class="fas fa-sync-alt"></i></button>
          <button><span>Quick View</span><i class="far fa-eye"></i></button>
        </div>
      </div>
      <div class="contentImage-OurProducts">
        <ul class="chooseItemImage-OurProducts">
          <li class="clickToShowImage-OurProducts" data-id=${val.imgChoose}><img src="${val.imgChoose}" alt=""></li>
          <li class="clickToShowImage-OurProducts" data-id=${val.imgChooseSecond}><img src="${val.imgChooseSecond}" alt=""></li>
          <li class="clickToShowImage-OurProducts" data-id=${val.imgChooseThird}><img src="${val.imgChooseThird}" alt=""></li>
        </ul>
        <a href="">${val.category}</a>, <a href="">${val.categorySecond}</a>
        <p>${val.title}</p>
        <p class="priceRed-OurProducts">${val.price}<span>${val.oldPrice}</span></p>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
  </div>`).appendTo(".listItemImage-OurProducts .row");
      } else {
        $(`<div class="col-sm-3">
    <div class="item">
      <div class="coverImage-OurProducts">
        <img src="${val.img}" alt="">
        <img class="ImageHover-OurProducts" src="${val.imgHover}" alt="">
        <div class="iconInterfaceinImage-OurProduct">
          <button><span>Wishlist</span><i class="far fa-heart"></i></button>
          <button><span>Add to Cart</span><i class="fas fa-cart-plus"></i></button>
          <button><span>Compare</span><i class="fas fa-sync-alt"></i></button>
          <button><span>Quick View</span><i class="far fa-eye"></i></button>
        </div>
      </div>
      <div class="contentImage-OurProducts">
        <a href="">${val.category}</a>, <a href="">${val.categorySecond}</a>
        <p>${val.title}</p>
        <p class="priceRed-OurProducts">${val.price}<span>${val.oldPrice}</span></p>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
    </div>
  </div>`).appendTo(".listItemImage-OurProducts .row");
      }

    })
  }
  const showImageofclickModelOurProducts = [
    {
      id: 1,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-J1zfD5s0/w:600/h:600/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2z.jpg",
      imgChoose: "https://mld080hfvime.i.optimole.com/ZK8IPZM-fze-llWW/w:auto/h:auto/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/black-coat.jpg"
    },
    {
      id: 2,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-fd3suXjc/w:600/h:600/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2f.jpg",
      imgChoose: "https://mld080hfvime.i.optimole.com/ZK8IPZM-3P-rrvBR/w:auto/h:auto/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/blue-dark-coat.jpg",
    }
    ,
    {
      id: 3,
      img: "https://mld080hfvime.i.optimole.com/ZK8IPZM-XcpJyjra/w:600/h:600/q:auto/rt:fill/g:ce/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/2h.jpg",
      imgChoose: "https://mld080hfvime.i.optimole.com/ZK8IPZM-EGBhuVAn/w:auto/h:auto/q:auto/https://lorada.c-themes.com/fashion-classic/wp-content/uploads/2020/02/light-coat.jpg",
    }
  ]
  $("body").on("click", ".clickToShowImage-OurProducts", function () {
    let id = $(this).data("id")
    const showImageofclickModel = showImageofclickModelOurProducts.filter((item) => {
      return item.imgChoose === id
    }).map((val) => {
      $(".ImageEmpty-OurProduct").empty();
      $(`<img src="${val.img}" alt="">`).appendTo(".showImage-OurProducts-owl .listItemImage-OurProducts .row .col-sm-3 .item .coverImage-OurProducts .ImageEmpty-OurProduct");
    })
    console.log (showImageofclickModel)
  })
});
