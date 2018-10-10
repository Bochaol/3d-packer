const sku = [
  {
    name: 'Sku 1',
    width: 5,
    length: 1,
    height: 5,
  },
  {
    name: 'Sku 2',
    width: 5,
    length: 5,
    height: 2,
  },
  {
    name: 'Sku 3',
    width: 3,
    length: 5,
    height: 5,
  },
  {
    name: 'Sku 4',
    width: 11,
    length: 5,
    height: 5,
  },
];

const box = [
  {
    name: 'Box 1',
    width: 15,
    length: 10,
    height: 25,
  },
  {
    name: 'Box 2',
    width: 8,
    length: 9,
    height: 11,
  },
  {
    name: 'Box 3',
    width: 11,
    length: 12,
    height: 9,
  },
  {
    name: 'Box 4',
    width: 21,
    length: 15,
    height: 5,
  },
];

let skuWin = null;
let boxWin = null;

function addSku() {
  activeLink('add-sku');

  skuWin = openPage('../pages/add-sku.html', 'jetpack');

  setTimeout(() => {
    renderSkuList();
  }, 1000);
}

function renderSkuList() {
  const skuList = skuWin.document.getElementById('sku-list');
  const skuCount = skuWin.document.getElementById('sku-count');

  skuCount.innerHTML = `${sku.length}`;
  skuList.innerHTML = sku.map((s) => `
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 class="my-0">${s.name}</h6>
        <small class="text-muted">(Width x Length x Height) ${s.width} x ${s.length} x ${s.height}</small>
      </div>
    </li>
  `).join('');
}

function addBox() {
  activeLink('add-box');
  boxWin = openPage('../pages/add-box.html', 'jetpack');

  setTimeout(() => {
    renderBoxList();
  }, 1000);
}

function renderBoxList() {
  const boxList = boxWin.document.getElementById('box-list');
  const boxCount = boxWin.document.getElementById('box-count');

  boxCount.innerHTML = `${box.length}`;
  boxList.innerHTML = box.map((s) => `
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 class="my-0">${s.name}</h6>
        <small class="text-muted">(Width x Length x Height) ${s.width} x ${s.length} x ${s.height}</small>
      </div>
    </li>
  `).join('');
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
  return window.open(url, 'jetpack');
}


(function() {
  openPage('../pages/jet-box.html', 'jetpack');
})();