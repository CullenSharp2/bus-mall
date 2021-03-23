'use strict';
let rounds = 0;

//store where each item is on
let leftItem = null;
let middleItem = null;
let rightItem = null;

function Item(name, path) {
    this.name = name;
    this.path = path;
    this.views = 0;
    this.likes = 0;

    Item.items.push(this);
}

Item.prototype.getRandomItem = function (catalogItems) {
    const arr = Item.items;
    let target;

    shuffle(arr);
    leftItem = arr[0];
    middleItem = arr[1];
    rightItem = arr[2];

    for (let i = 0; i < 3; i++) {
        target = document.getElementById(`item-${i+1}`);
        target.src = arr[i].path;
    }
}

Item.items = [];


for (let i of document.getElementsByTagName('img')) {
    i.addEventListener('click', voteHandler);
}

function voteHandler(event) {
    event.preventDefault();
    let id = event.target.id;

    if (rounds < 25) {
        rounds++;

        if (id === 'item-1') {
            leftItem.likes++;
        } else if (id === 'item-2') {
            middleItem.likes++;
        } else if (id === 'item-3') {
            rightItem.likes++;
        }
        console.log(rounds, `${leftItem.name} has ${leftItem.likes} likes`)
        render(Item.items);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
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
const petSweep = new Item('pet-sweep', 'imgs/pet-sweep.jpg');
const pen = new Item('pen', 'imgs/pen.jpg');
const dragon = new Item('dragon', 'imgs/dragon.jpg');
const dogDuck = new Item('dog-duck', 'imgs/dog-duck.jpg');
const cthulhu = new Item('cthulhu', 'imgs/cthulhu.jpg');
const chair = new Item('chair', 'imgs/chair.jpg');
const bubblegum = new Item('bubblegum', 'imgs/bubblegum.jpg');
const breakfast = new Item('breakfast', 'imgs/breakfast.jpg');
const boots = new Item('boots', 'imgs/boots.jpg');
const bathroom = new Item('bathroom', 'imgs/bathroom.jpg');
const banana = new Item('banana', 'imgs/banana.jpg');
const bag = new Item('bag', 'imgs/bag.jpg');


function render(catalogItem) {
    catalogItem[0].getRandomItem();
}

render(Item.items);