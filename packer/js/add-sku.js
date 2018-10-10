'use strict';

window.addEventListener('load', function() {
  const form = document.querySelector('form.needs-validation');
  const button = document.getElementById('add-sku');

  button.addEventListener('click', function(event) {
    if (form.checkValidity()) {
      form.classList.add('was-validated');
      addSku(form);
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  });
});

function previewSku() {
  const form = document.querySelector('form.needs-validation');
  const container = document.querySelector('div#preview-sku-modal div.modal-body');

  container.innerHTML = null;

  addItemInit({ x: form.width.value, y: form.height.value, z: form.length.value }, '../assets/peter.jpg', container);
}

function addSku(form) {
  window.opener.postMessage(JSON.stringify({
    name: form.name.value,
    image: form.image.value,
    width: form.width.value,
    height: form.height.value,
    length: form.length.value,
  }), '*');
}