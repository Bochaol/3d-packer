function addItem() {
  activeLink('add-item');
  openPage('../pages/add-item.html', 'jetpack');
}

function addBox() {
  activeLink('add-box');
  openPage('../pages/add-box.html', 'jetpack');
}

function packing() {
  activeLink('packing');
  openPage('../pages/packing.html', 'jetpack');
}

function activeLink(id) {
  const links = document.querySelectorAll('nav.nav.nav-masthead > a');

  for (let link of links) {
    if (link.id === id) {
      if (!link.classList.contains('active')) {
        link.classList.add('active');
      }
    } else {
      link.classList.remove('active');
    }
  }

}

function openPage(url) {
  window.open(url, 'jetpack');
}