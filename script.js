// import { menu } from './menuData.js';

const container = document.querySelector('#container');
const container2 = document.querySelector('#container2');
const container3 = document.querySelector('#container3');
const pizzaScroll = document.querySelector('.pizzaScroll');
const baseURL = 'https://raw.githubusercontent.com/BncPntk/Pizza/main/images/menu/'
// CART MODAL ELEMENTS
const payBtn = document.querySelector('#payBtn');
const tbodyId = document.querySelector('#tbodyId');
const money = document.querySelector('#money');

// NUMBER OF ITEMS IN CART
const badgeNmb = document.querySelector('#cartBtnBadge');


// FORMAT PRICE
for (let i = 1; i < 24; i++) {
    if (menu[i].price.length >= 4) {
        let temp = menu[i].price.slice(1);
        let newPrice = `HUF ${menu[i].price[0]},${temp}`
        // console.log(newPrice);
        menu[i].price = newPrice;
    } else {
        let newPrice = `HUF ${menu[i].price}`
        menu[i].price = newPrice;
    }

}

// INSERT PIZZA
const insertItems = function (imageFrom, imageTo, destination, titleMargin, imgType, imgSizeAtr, imgSizeClass) {
    for (let i = imageFrom; i <= imageTo; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-10', 'offset-1', 'offset-md-0', 'col-md-6', 'col-lg-4', 'my-4');
        colDiv.setAttribute('id', menu[i].id);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        const newImg = document.createElement('img');
        newImg.classList.add('rounded-top', imgSizeClass);
        newImg.setAttribute('style', imgSizeAtr);
        newImg.src = `${baseURL}${i}.${imgType}`;
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');
        const h5 = document.createElement('h5');
        h5.classList.add('card-title', titleMargin, 'text-uppercase');
        h5.innerHTML = `${menu[i].name}`;
        const p = document.createElement('p');
        p.classList.add('card-text', 'p-height', 'descFont');
        p.innerHTML = `${menu[i].desc}`;
        const inputDiv = document.createElement('div');
        inputDiv.classList.add('form-outline', 'd-flex', 'justify-content-center', 'my-1', 'mb-3');
        const input = document.createElement('input');
        input.classList.add('form-control', 'text-center');
        input.setAttribute('id', 'typeNumber');
        input.setAttribute('type', 'number');
        input.setAttribute('style', 'width: 5rem');
        input.setAttribute('min', 1);
        input.setAttribute('max', 5);
        input.setAttribute('required', '');
        input.setAttribute('value', 1);
        const pPrice = document.createElement('p');
        pPrice.classList.add('text-center', 'text-primary', 'fw-bold', 'priceText');
        pPrice.innerHTML = `${menu[i].price}`;
        const a = document.createElement('a');
        a.classList.add('btn', 'btn-outline-warning', 'kosarBtn', 'cartButton');
        a.innerHTML = `Hozzáadás`;

        cardDiv.appendChild(newImg);
        cardDiv.appendChild(cardBodyDiv);
        cardBodyDiv.appendChild(h5);
        cardBodyDiv.appendChild(p);
        cardBodyDiv.appendChild(inputDiv);
        inputDiv.appendChild(input);
        cardBodyDiv.appendChild(pPrice);
        cardBodyDiv.appendChild(a);
        colDiv.appendChild(cardDiv);
        destination.appendChild(colDiv);
    }
}
// INSERT PIZZA
insertItems(1, 10, container, 'my-3', 'jpg');

// INSERT GYROS
insertItems(11, 14, container2, 'my-3', 'jpg');

// INSERT DRINKS
insertItems(15, 23, container3, 'my-0', 'png', 'max-width:50%', 'mx-auto');


// GO TO TOP BTN
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("btnTop").style.display = "block";
    } else {
        document.getElementById("btnTop").style.display = "none";
    }
}

function btnUp() {
    window.scrollTo(0, 0);
}

// ADD TO CARD BTN
let itemInCartNmb = 0;
let itemSet = new Set();
let buttons = document.querySelectorAll('.cartButton');
let quantityInputs = document.querySelectorAll('#typeNumber');
let quantityValue = 0;

// FINAL VALUES
let finalName = '';
let finalQty = 0;
let finalPrice = 0;
let grandTotal = 0;
let grandGrandTotal = 0;

let inputs = ['',];

quantityInputs.forEach((btn, nmb) => {
    inputs.push(btn);

})

buttons.forEach((btn, nmb) => {
    btn.addEventListener('click', e => {

        if (!itemSet.has(nmb + 1)) {
            itemSet.add(nmb + 1);
            itemInCartNmb++;

            if (inputs[nmb + 1].value == 0) {
            } else {
                quantityValue = inputs[nmb + 1].value
            }
        }

        // FORMATTING DATA TO USE WITH CART
        badgeNmb.innerHTML = itemInCartNmb
        finalQty = quantityValue;
        finalName = menu[nmb + 1].name;
        finalPrice = menu[nmb + 1].price;
        finalPrice = finalPrice.replace('HUF ', '');
        finalPrice = finalPrice.replace(',', '');

        grandTotal = Number(finalPrice) * finalQty;
        grandGrandTotal += grandTotal;

        console.log('Név: ', finalName);
        console.log('Végösszeg: ', grandTotal);
        console.log('Egységár: ', finalPrice);
        console.log('db:', quantityValue);
        console.log('Végvégösszeg: ', grandGrandTotal);
    });

    //  CART MODAL
    btn.addEventListener('click', () => {

        // ADD ITEM DIVS IN CART MODAL
        const trDiv = document.createElement('tr');
        const tdDiv = document.createElement('td');
        tdDiv.classList.add('col-2');
        const p = document.createElement('p');
        p.innerHTML = `${finalPrice} Ft`;
        p.classList.add('mt-1');
        p.setAttribute('id', 'itemName');
        //PRICE
        const tdDiv2 = document.createElement('td');
        tdDiv2.classList.add('col-8', 'text-start');
        const p2 = document.createElement('p');
        p2.innerHTML = `${finalName}`;
        p2.classList.add('mt-1');
        // QT
        const tdDiv3 = document.createElement('td');
        tdDiv3.classList.add('col-1');
        const input = document.createElement('input');
        input.classList.add('mt-1', 'text-center');
        input.setAttribute('id', 'cartQ');
        input.setAttribute('type', 'number');
        input.setAttribute('style', 'width: 5rem');
        input.setAttribute('min', 1);
        input.setAttribute('max', 5);
        input.setAttribute('required', '');
        input.setAttribute('style', 'width: 60px');
        input.value = quantityValue;
        // DELETE
        const tdDiv4 = document.createElement('td');
        tdDiv4.classList.add('col-1');
        const btn = document.createElement('button');
        btn.classList.add('btn', 'btn-danger')
        btn.setAttribute('id', 'deleteBtn');
        btn.innerHTML = 'Törlés';

        // APPEND
        tbodyId.appendChild(trDiv);
        // PRICE
        trDiv.appendChild(tdDiv);
        tdDiv.appendChild(p);
        // NAME
        trDiv.appendChild(tdDiv2);
        tdDiv2.appendChild(p2);
        // QT
        trDiv.appendChild(tdDiv3);
        tdDiv3.appendChild(input);
        // DELETE
        trDiv.appendChild(tdDiv4);
        tdDiv4.appendChild(btn);

        money.innerHTML = `${grandGrandTotal} Ft`;
    })


});


