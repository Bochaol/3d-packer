'use strict';

window.addEventListener('load', function() {
  const form = document.querySelector('form.needs-validation');
  const button = document.getElementById('add-box');

  button.addEventListener('click', function(event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      form.classList.add('was-validated');
      addBox();
    }
  });
});

function previewBox() {
  const container = document.querySelector('div#preview-box-modal div.modal-body');

  container.innerHTML = null;

  addItemInit({ x: 1, y: 1, z: 1}, '../assets/peter.jpg', container);
}

function addBox() {
  window.opener.postMessage('this is new box', '*');
}