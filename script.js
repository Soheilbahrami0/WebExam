document.querySelectorAll(".buy-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.closest(".product");
    const stockEl = product.querySelector(".stock");

    let stock = parseInt(stockEl.dataset.stock);

    if (stock > 0) {
      stock--;
      stockEl.dataset.stock = stock;

      alert("✅ محصول به سبد خرید اضافه شد");

      if (stock === 0) {
        button.disabled = true;
        button.innerText = "ناموجود";
      }
    }
  });
});
