'use strict';

window.addEventListener('load', function() {
  const form = document.querySelector('form.needs-validation');
  const button = document.getElementById('add-box');

  button.addEventListener('click', function(event) {
    if (form.checkValidity()) {
      form.classList.add('was-validated');
      addBox(form);
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  });
});

function previewBox() {
  const container = document.querySelector('div#preview-box-modal div.modal-body');

  container.innerHTML = null;

  addItemInit({ x: 1, y: 1, z: 1}, '../assets/peter.jpg', container);
}

function addBox(form) {
  window.opener.postMessage(JSON.stringify({
    name: form.name.value,
    width: form.width.value,
    height: form.height.value,
    length: form.length.value,
  }), '*');
}