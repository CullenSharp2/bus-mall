'use strict';
let rounds = 0;

//store where each item is on
let leftItem = null;
let middleItem = null;
let rightItem = null;

function Item (name, path) {
    this.name = name;
    this.path = path;
    this.views = 0;
    this.likes = 0;

    Item.items.push(this);
}

Item.prototype.getRandomItem = function(catalogItems) {
    let target;
    let randInt;

    for(let i = 1; i <= 3; i += 1) {
        randInt = Math.floor(Math.random() * (Item.items.length - 0) + 0); 
        leftItem = Item.items[];
        target = document.getElementById(`item-${i}`);
        target.src = Item.items[randInt].path;

        Item.items[randInt].views++;
    }
}

Item.items = [];


for(let i of document.getElementsByTagName('img')) {
    i.addEventListener('click', voteHandler);
}

function voteHandler(event) {
    event.preventDefault();
    let id = event.target.id;

    if (rounds < 25) {
        rounds++;

        if (id === 'item-1') {
            // leftItem.likes++;
        } else if (id === 'item-2') {
            // middleItem.likes++;
        } else if (id === 'item-3') {
            // rightItem.likes++;
        }
    render(Item.items);
    }
}

const wineGlass = new Item('wine-glass', 'imgs/wine-glass.jpg');
const waterCan = new Item('water-can', 'imgs/water-can.jpg');
const usb = new Item('usb', 'imgs/usb.gif');
const unicorn = new Item('unicorn', 'imgs/unicorn.jpg');
const tauntaun = new Item('tauntaun', 'imgs/tauntaun.jpg');
const sweep = new Item('sweep', 'imgs/sweep.png');
const shark = new Item('shark', 'imgs/shark.jpg');
const scissors = new Item('scissors', 'imgs/scissors.jpg');
const petSweep = new Item ('pet-sweep', 'imgs/pet-sweep.jpg');
const pen = new Item('pen', 'imgs/pen.jpg');
const dragon = new Item('dragon', 'imgs/dragon.jpg';
const dogDuck = new Item('dog-duck', 'imgs/dog-duck.jpg');
const cthulhu = new Item('cthulhu', 'imgs/cthulhu.jpg');
const chair = new Item('chair', 'imgs/chair.jpg');
const bubblegum = new Item('bubblegum', 'imgs/bubblegum.jpg');
const breakfast = new Item('breakfast', 'imgs/breakfast.jpg');
const boots = new Item('boots', 'imgs/boots.jpg');
const bathroom = new Item('bathroom', 'imgs/bathroom.jpg';
const banana = new Item('banana', 'imgs/banana.jpg';
const bag = new Item ('bag', 'imgs/bag.jpg');


function render(catalogItem) {
    catalogItem[0].getRandomItem();
}

render(Item.items);