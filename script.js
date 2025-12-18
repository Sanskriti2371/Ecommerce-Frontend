document.addEventListener("DOMContentLoaded",()=>{
    const products =[
        {id: 1, name:"Product 1", price:499 },
        {id: 2, name:"Product 2", price:1499 },
        {id: 3, name:"Product 3", price:2499 }
    ];

    const cart = []
    const productList = document.getElementById("product-list");
    const cartitems = document.getElementById("cart-items");
    const emptycartMessage = document.getElementById("empty-cart");
    const cartTotalmessage =document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutbtn = document.getElementById("checkout-btn");

    products.forEach(product=>{
      const productDiv =  document.createElement('div');
      productDiv.classList.add('product')
      productDiv.innerHTML = `
        <span>${product.name} : $${product.price.toFixed(2)}</span>   
        <button data-id="${product.id}">Add to cart</button>
        `;
    productList.appendChild(productDiv);

    });

    productList.addEventListener("click",(e)=>{
if(e.target.tagName === "BUTTON"){
  const productId = parseInt(e.target.getAttribute('data-id'));
  const product = products.find(p => p.id === productId)
  addToCart (product)
}
    });

    function addToCart(product){
cart.push(product);
 renderCart();
    }

    function renderCart(){
        cartitems.innerText="";
        let totalPrice =0

        if(cart.length){
             emptycartMessage.classList.add('hidden');
             cartTotalmessage.classList.remove('hidden');
             cart.forEach((item , index) => {
                totalPrice += item.price;
                 const cartitem = document.createElement('div');
                 cartitem.innerHTML =`
                 ${item.name} - $${item.price.toFixed(2)} `
                 cartitems.appendChild(cartitem);
                 totalPriceDisplay.textContent = `$${totalPrice}`;
             });

             
        }else{
            emptycartMessage.classList.remove("hidden");
            totalPriceDisplay.textContent =`$0.00`;
        }
    }

    checkoutbtn.addEventListener('click', ()=>{
     cart.length =0
     alert("Checkout successfullty")
     renderCart();
    });
    
});