'use strict';

const maxRounds = 25;
let currentRound = 0;

//reference to the object on the page
let leftItem = null;
let middleItem = null;
let rightItem = null;

//reference button
const resultsButton = document.getElementById('get-results');

function shuffle(array) {
    //randomizes the index of each item in a given array

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function Item(name, path) {
    this.name = name;
    this.path = path;
    this.views = 0;
    this.likes = 0;

    //add new Item to a list of Item(s)
    //items is a property of this object
    Item.items.push(this);
}

Item.prototype.get3NewItems = function (catalogItems) {
    //adds a new method to Item: get3NewItems()

    const items = Item.items; //reference items array for brevity
    let target;

    let previousLeft = leftItem;
    let previousMiddle = middleItem;
    let previousRight = rightItem;

    shuffle(items);

    //check for duplicates
    for (let item of items) {
        if (item !== previousLeft && item !== previousMiddle && item !== previousRight) {
            leftItem = item;
            leftItem.views += 1;
            break
        }
    }

    for (let item of items) {
        if (item !== previousLeft && item !== previousMiddle && item !== previousRight && item !== leftItem) {
            middleItem = item;
            leftItem.views += 1;
            break
        }
    }

    for (let item of items) {
        if (item !== previousLeft && item !== previousMiddle && item !== previousRight && item !== leftItem && item !== middleItem) {
            rightItem = item;
            rightItem.views += 1;
            break
        }
    }

    target = document.getElementById('item-1');
    target.src = leftItem.path;

    target = document.getElementById('item-2');
    target.src = rightItem.path;

    target = document.getElementById('item-3');
    target.src = middleItem.path;
}

Item.items = [];

//broken image at the top of page
for (let element of document.querySelectorAll('img.image')) {
    element.addEventListener('click', voteHandler);
}

function voteHandler(event) {
    event.preventDefault();

    let id = event.target.id;

    if (currentRound !== maxRounds) {
        currentRound++;

        if (id === 'item-1') {
            leftItem.likes++;
        } else if (id === 'item-2') {
            middleItem.likes++;
        } else if (id === 'item-3') {
            rightItem.likes++;
        }
        render(Item.items);
    } else {
        setStoredItems();
        for (let i of document.getElementsByTagName('img')) {
            i.removeEventListener('click', voteHandler);
        }
    }
}

function getResults() {
    const parent = document.getElementById('results');
    let items = Item.items;
    parent.innerHTML = '';

    if (currentRound > 1) {
        for (let i in items) {
            createChild('li', parent, `${items[i].name} got ${items[i].likes} likes and was seen ${items[i].views} times.`);
        }
    }
}

resultsButton.addEventListener('click', getResults)

function createChild(tag, parent, text) {
    const newElem = document.createElement(tag);
    let newTextNode = document.createTextNode(text);
    newElem.appendChild(newTextNode);
    parent.appendChild(newElem);
}

//chartJS

function makeItemChart() {
    let itemNames = [];
    let itemLikes = [];

    for (let item of Item.items) {
        itemNames.push(item.name);
        itemLikes.push(item.likes);
    }

    const ctx = document.getElementById('itemChart').getContext('2d');
    const itemChart = new Chart(ctx, {
        // type of chart
        type: 'bar',

        data: {
            labels: itemNames,
            datasets: [{
                label: 'Item Likes',
                backgroundColor: 'rgb(255,255,255)',
                borderColor: 'rgb(255,255,255)',
                data: itemLikes
            }]
        },
        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function render(items) {
    items[0].get3NewItems();

    if (currentRound === maxRounds) {
        makeItemChart();
    }
}

function setStoredItems() {
    let stringifiedItems = JSON.stringify(Item.items);
    localStorage.setItem('item', stringifiedItems);
}

function getStoredItems() {
    let storedItems = localStorage.getItem('item');

    if (storedItems !== null) {
        let parsedItems = JSON.parse(storedItems);

        for (let productData of parsedItems) {
            let retrievedItem = new Item(productData.name, productData.path);
            retrievedItem.views = productData.views;
            retrievedItem.likes = productData.likes;
        }
    } else {
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
    }
}

getStoredItems();
render(Item.items);