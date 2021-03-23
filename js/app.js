'use strict';
let rounds = 25;

//bad var for test only
let count = 0;

function CatalogItem (name, path, views) {
    this.name = name;
    this.path = path;
    this.views = views;
    this.likes = likes;

    CatalogItem.catalogItems.push(this);
}

CatalogItem.prototype.getRandomItem = function(catalogItems) {
    let target;
    let randInt;

    for(let i = 1; i <= 3; i += 1) {
        randInt = Math.floor(Math.random() * (CatalogItem.catalogItems.length - 0) + 0); 
        target = document.getElementById(`item-${i}`);
        target.src = CatalogItem.catalogItems[randInt].path;
        // createImg('img', target, CatalogItem.catalogItems[randInt].path, 'medium');

        CatalogItem.catalogItems[randInt].views++;
        // console.log(`${CatalogItem.catalogItems[randInt].name} has been viewed ${CatalogItem.catalogItems[randInt].views} times`);
    }
}

CatalogItem.catalogItems = [];

function createImg (tag, parent, value, size) {
    const newElem = document.createElement(tag);
    newElem.setAttribute('src', value);
    newElem.setAttribute('class', size);
    parent.appendChild(newElem);
}

for(let i of document.getElementsByTagName('img')) {
    i.addEventListener('click', voteHandler);
}

function voteHandler(event) {
    event.preventDefault();
    let id = event.target.id;

    if()

    render(CatalogItem.catalogItems);
}

const wineGlass = new CatalogItem('wine-glass', 'imgs/wine-glass.jpg', 0, 0);
const waterCan = new CatalogItem('water-can', 'imgs/water-can.jpg', 0, 0);
const usb = new CatalogItem('usb', 'imgs/usb.gif', 0, 0);
const unicorn = new CatalogItem('unicorn', 'imgs/unicorn.jpg', 0, 0);
const tauntaun = new CatalogItem('tauntaun', 'imgs/tauntaun.jpg', 0, 0);
const sweep = new CatalogItem('sweep', 'imgs/sweep.png', 0, 0);
const shark = new CatalogItem('shark', 'imgs/shark.jpg', 0, 0);
const scissors = new CatalogItem('scissors', 'imgs/scissors.jpg', 0, 0);
const petSweep = new CatalogItem ('pet-sweep', 'imgs/pet-sweep.jpg', 0, 0);
const pen = new CatalogItem('pen', 'imgs/pen.jpg', 0, 0);
const dragon = new CatalogItem('dragon', 'imgs/dragon.jpg', 0, 0);
const dogDuck = new CatalogItem('dog-duck', 'imgs/dog-duck.jpg', 0, 0);
const cthulhu = new CatalogItem('cthulhu', 'imgs/cthulhu.jpg', 0, 0);
const chair = new CatalogItem('chair', 'imgs/chair.jpg', 0, 0);
const bubblegum = new CatalogItem('bubblegum', 'imgs/bubblegum.jpg', 0, 0);
const breakfast = new CatalogItem('breakfast', 'imgs/breakfast.jpg', 0, 0);
const boots = new CatalogItem('boots', 'imgs/boots.jpg', 0, 0);
const bathroom = new CatalogItem('bathroom', 'imgs/bathroom.jpg', 0, 0);
const banana = new CatalogItem('banana', 'imgs/banana.jpg', 0, 0);
const bag = new CatalogItem ('bag', 'imgs/bag.jpg', 0, 0);


function render(catalogItem) {
    catalogItem[0].getRandomItem();
}

render(CatalogItem.catalogItems);