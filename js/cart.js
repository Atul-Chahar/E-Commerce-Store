document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.querySelector(".cart-container");
  const totalDisplay = document.querySelector(".total");

  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".product").forEach(product => {
      const priceText = product.querySelector(".price").textContent;
      const price = parseInt(priceText.replace(/\D/g, ""));
      const qty = parseInt(product.querySelector("input[type='number']").value);
      total += price * qty;
    });
    totalDisplay.textContent = `Total: ₹${total.toLocaleString()}`;
  }

  container.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="product-image">
      <div class="product-details">
        <h3>${item.name}</h3>
        <p><b class="price">₹${item.price}</b></p>
        <label>Qty: <input type="number" value="${item.quantity}" min="1"></label>
        <button class="remove">Remove</button>
      </div>
    `;
    container.appendChild(div);
  });

  updateTotal();

  container.addEventListener("input", event => {
    if (event.target.type === "number") {
      if (event.target.value < 1) event.target.value = 1;
      updateTotal();
    }
  });

  container.addEventListener("click", event => {
    if (event.target.classList.contains("remove")) {
      const productEl = event.target.closest(".product");
      const name = productEl.querySelector("h3").textContent;
      productEl.remove();
      const updatedCart = cart.filter(p => p.name !== name);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      updateTotal();
    }
  });
});
