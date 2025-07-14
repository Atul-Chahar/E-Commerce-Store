document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-card").forEach(card => {
    const name = card.querySelector("h3").textContent;
    const priceText = card.querySelector(".price").textContent;
    const price = parseInt(priceText.replace(/\D/g, ""));
    const image = card.querySelector("img").src;

    card.querySelector(".button-group button").addEventListener("click", () => {
      const product = {
        name,
        price,
        image,
        quantity: 1
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existing = cart.find(p => p.name === product.name);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart!");
    });

    card.querySelector(".view-details").addEventListener("click", () => {
      const pageSlug = name.toLowerCase().replace(/\s+/g, "-");
      window.location.href = `products/${pageSlug}.html`;
    });
  });
});
