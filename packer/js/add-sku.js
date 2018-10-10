'use strict';

window.addEventListener('load', function() {
  const form = document.querySelector('form.needs-validation');
  const button = document.getElementById('add-sku');

  button.addEventListener('click', function(event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      form.classList.add('was-validated');
      addSku();
    }
  });
});

function previewSku() {
  const container = document.querySelector('div#preview-sku-modal div.modal-body');

  container.innerHTML = null;

  addItemInit({ x: 1, y: 1, z: 1}, '../assets/peter.jpg', container);
}

function addSku() {
  window.opener.postMessage('this is new sku', '*');
}