document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".upsell-add");

  buttons.forEach(button => {
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      const productId = button.getAttribute("data-product-id");

      try {
        const response = await fetch("/cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            id: productId,
            quantity: 1
          })
        });

        if (response.ok) {
          const cart = await response.json();
          alert(`✅ Producto agregado: ${cart.title}`);
        } else {
          alert("❌ Error al agregar el producto");
        }
      } catch (error) {
        console.error(error);
        alert("❌ Ocurrió un problema con la petición");
      }
    });
  });
});
