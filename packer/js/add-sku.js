(function() {
  'use strict';

  window.addEventListener('load', function() {
    const forms = document.getElementsByClassName('needs-validation');

    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function previewSku() {
  const container = document.querySelector('div#preview-sku-modal div.modal-body');

  container.innerHTML = null;

  addItemInit({ x: 1, y: 1, z: 1}, '../assets/peter.jpg', container);
}