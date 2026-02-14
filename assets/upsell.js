console.log("Upsell script cargado");

document.addEventListener('click', async (event) => {
  const button = event.target.closest('.upsell-add');
  if (!button) return;

  event.preventDefault();

  const variantId = button.dataset.productId;
  if (!variantId) return;

  
  const cart =
    document.querySelector('cart-notification') ||
    document.querySelector('cart-drawer');

  
  button.setAttribute('aria-disabled', 'true');
  button.classList.add('loading');

  let spinner = button.querySelector('.loading__spinner');
  if (spinner) spinner.classList.remove('hidden');

  try {
    
    const formData = new FormData();
    formData.append('id', variantId);
    formData.append('quantity', 1);

    if (cart) {
      formData.append(
        'sections',
        cart.getSectionsToRender().map((section) => section.id)
      );
      formData.append('sections_url', window.location.pathname);
    }

    const response = await fetch("/cart/add.js", {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });

    const data = await response.json();

    
    if (data.status) {
      showError(button, data.description);
      return;
    }

    
    if (cart) {
      cart.renderContents(data);
    } else {
      window.location.href = routes.cart_url;
    }

  } catch (error) {
    console.error('Upsell error:', error);
  } finally {
    
    button.classList.remove('loading');
    button.removeAttribute('aria-disabled');

    if (spinner) spinner.classList.add('hidden');
  }
});


function showError(button, message) {
  let errorEl = button.parentElement.querySelector('.upsell-error');

  if (!errorEl) {
    errorEl = document.createElement('div');
    errorEl.className = 'upsell-error';
    button.parentElement.appendChild(errorEl);
  }

  errorEl.textContent = message;
}
