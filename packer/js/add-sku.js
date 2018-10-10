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
  const container = document.querySelector('div#preview-sku-modal div.modal-body');

  container.innerHTML = null;

  addItemInit({ x: 1, y: 1, z: 1}, '../assets/peter.jpg', container);
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