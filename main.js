let shop = document.getElementById("shop");

let shopItesData = [{
id: "fkjdhdkj",
name:"Man High-top Jordan Basketball",
price:"35",
desc: "Lorem ipsum dolor sit.",
img: "images/image (7).jpg",
},
{
id: "weroojjkpl",
name:"Man High-top Jordan Basketball",
price:"5",
desc: "Lorem ipsum dolor sit.",
img: "images/image (7).jpg",
},
{
id: "dfjnglkfn",
name:"Man High-top Jordan Basketball",
price:"5",
desc: "Lorem ipsum dolor sit.",
img: "images/image (7).jpg",
},
{
id: "kfjgnlskjf",
name:"Man High-top Jordan Basketball",
price:"5",
desc: "Lorem ipsum dolor sit.",
img: "images/image (7).jpg",
},
{
id: "sfhdgoir",
name:"Man High-top Jordan Basketball",
price:"5",
desc: "Lorem ipsum dolor sit.",
img: "images/image (7).jpg",
},
];

let generateShop = () => {
    return (shop.innerHTML = shopItesData.map((x) => {
      let { id, name, price, desc, img } = x;
      return  `
      <div id=product-id-${id} class="item">
    <img width="200px" src="images/image (7).jpg" alt="">
    <div class="details">
      <h3>${name}</h3>
      <P>${desc}</P>
      <div class="price-quantity">
        <h2>$ ${price}</h2>
        <div class="buttons">
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">0</div>
          <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>
      `;
    })
    .join(""));
};

generateShop();

let increment = () => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else{
    search.item +=1;
  }

  console.log(basket);
  update(selectedItem.id);
};
let decrement = () => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search.item === 0) return;
    else{
    search.item -=1;
  }

  console.log(basket);
  update();
};


let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
};