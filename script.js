const container = document.querySelector('#container');
const container2 = document.querySelector('#container2');
const container3 = document.querySelector('#container3');
const pizzaScroll = document.querySelector('.pizzaScroll');
const baseURL = 'https://raw.githubusercontent.com/BncPntk/Pizza/main/images/menu/'


const menu = [
    {},
    {
        id: 1,
        name: 'FELICE /QUATTRO FORMAGGI',
        desc: `Fontina, pecorino, gorgonzola, mozzarella, extra szűz olívaolaj, bazsalikom
    (allergének:glutén,laktóz)`,
        price: '2490',
    },
    {
        id: 2,
        name: 'NONNA /NAPOLETANA',
        desc: `Paradicsom, szardella, fekete olívabogyó, kapribogyó, mozzarella, extra szűz olívaolaj
    (allergének: glutén, laktóz, hal)`,
        price: '2490',
    }, {
        id: 3,
        name: 'PAOLINA /SALAME NAPOLI',
        desc: `Nápolyi szalámi, édes pepperoni, kaliforniai paprika, parmezán, bazsalikom, mozzarella, extra szűz olívaolaj, aszalt paradicsom
    (allergének: glutén, laktóz)`,
        price: '2999',
    },
    {
        id: 4,
        name: 'SIMONETTA /SPIANATA SALAME',
        desc: `Paradicsom, spianata szalámi, parmezán, mozzarella, bazsalikom, extra szűz olívaolaj
        (allergének: glutén, laktóz)`,
        price: '2490',
    },
    {
        id: 5,
        name: 'CRISTINA /P.CRUDO',
        desc: `Paradicsom, prosciutto crudo, parmezán, mozzarella, extra szűz olívaolaj, rukkola
        (allergének:glutén)`,
        price: '2990',
    },
    {
        id: 6,
        name: 'MARINARA',
        desc: `Paradicsom, oregánó, fokhagyma, extra szűz olivaolaj
        (allergének: glutén)`,
        price: '1690',
    },
    {
        id: 7,
        name: 'MARGHERITA',
        desc: `Paradicsom, mozzarella, parmezán, bazsalikom, extra szűz olívaolaj
        (allergének: glutén, laktóz)`,
        price: '1990',
    },
    {
        id: 8,
        name: 'CARLOTTA /CARBONARA',
        desc: `Pancetta, pacorino, tojás, mozzarella, tört feketebors, extra szűz olívaolaj
        (allergének:glutén,tojás)`,
        price: '2490',
    },
    {
        id: 9,
        name: 'BELLA /BLT',
        desc: `Paradicsom, pancetta, parmezán, mozzarella, vöröshagyma, extra szűz olívaolaj, rukkola
        (allergének: glutén, laktóz)`,
        price: '2690',
    },
    {
        id: 10,
        name: 'VINCENZA /VEGA',
        desc: `Paradicsom, padlizsán, cukkini, kaliforniai paprika, parmezán, mozzarella, bazsalikom, extra szűz olívaolaj, fenyőmag
        (allergének: glutén, földimogyoró)`,
        price: '2890',
    },
    {
        id: 11,
        name: 'Basic pita',
        desc: `Fetakrém, tzatziki, olívabogyó, paradicsom, hagyma, csirkecomb`,
        price: '1790',
    },
    {
        id: 12,
        name: 'Extra pita',
        desc: `Eredeti görög feta sajt, eredeti görög joghurt, Cserpes füstölt sajt, répasaláta, tzatziki, olívabogyó, paradicsom, hagyma, extra mennyiségű csirkecomb`,
        price: '2090',
    },
    {
        id: 13,
        name: 'Jalapeno pita',
        desc: `eredeti görög feta sajt, eredeti görög joghurt, olívabogyó, paradicsom, hagyma, jalapeno paprika, csirkecomb`,
        price: '2090',
    },
    {
        id: 14,
        name: 'Gyros tál',
        desc: `eredeti görög feta sajt, eredeti görög joghurt, olívabogyó, paradicsom, hagyma, csirkecomb, fűszeres hasábburgonya`,
        price: '2490',
    },
    {
        id: 15,
        name: '0,5l CocaCola',
        desc: ``,
        price: '450',
    },
    {
        id: 16,
        name: '0,5l CocaCola Zero',
        desc: ``,
        price: '450',
    },
    {
        id: 17,
        name: '0,5l Cherry Coke',
        desc: ``,
        price: '450',
    },


]




// FORMIN PRICE
for (let i = 1; i < 15; i++) {
    let temp = menu[i].price.slice(1);
    let newPrice = `HUF ${menu[i].price[0]},${temp}`
    // console.log(newPrice);
    menu[i].price = newPrice;
}


// INSERT PIZZA
const insertItems = function (imageFrom, imageTo, destination, imgType) {
    for (let i = imageFrom; i <= imageTo; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-10', 'offset-1', 'offset-md-0', 'col-md-6', 'col-lg-4', 'my-4');
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        const newImg = document.createElement('img');
        newImg.classList.add('rounded-top');
        newImg.src = `${baseURL}${i}.${imgType}`;
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');
        const h5 = document.createElement('h5');
        h5.classList.add('card-title', 'my-3', 'text-uppercase');
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
        const pPrice = document.createElement('p');
        pPrice.classList.add('text-center', 'text-primary', 'fw-bold', 'priceText');
        pPrice.innerHTML = `${menu[i].price}`;
        const a = document.createElement('a');
        a.classList.add('btn', 'btn-outline-warning', 'kosarBtn');
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
insertItems(1, 10, container, 'jpg');

// INSERT GYROS
insertItems(11, 14, container2, 'jpg');

// INSERT DRINKS
insertItems(15, 23, container3, 'png');
// for (let i = 11; i < 15; i++) {
//     const colDiv = document.createElement('div');
//     colDiv.classList.add('col-10', 'offset-1', 'offset-md-0', 'col-md-6', 'col-lg-4', 'my-4');
//     const cardDiv = document.createElement('div');
//     cardDiv.classList.add('card');
//     const newImg = document.createElement('img');
//     newImg.classList.add('rounded-top');
//     newImg.src = `${baseURL}${i}.jpg`;
//     const cardBodyDiv = document.createElement('div');
//     cardBodyDiv.classList.add('card-body');
//     const h5 = document.createElement('h5');
//     h5.classList.add('card-title', 'my-3', 'text-uppercase');
//     h5.innerHTML = `${menu[i].name}`;
//     const p = document.createElement('p');
//     p.classList.add('card-text', 'p-height', 'descFont');
//     p.innerHTML = `${menu[i].desc}`;
//     const inputDiv = document.createElement('div');
//     inputDiv.classList.add('form-outline', 'd-flex', 'justify-content-center', 'my-1', 'mb-3');
//     const input = document.createElement('input');
//     input.classList.add('form-control', 'text-center');
//     input.setAttribute('id', 'typeNumber');
//     input.setAttribute('type', 'number');
//     input.setAttribute('style', 'width: 5rem');
//     input.setAttribute('min', 1);
//     input.setAttribute('max', 5);
//     const pPrice = document.createElement('p');
//     pPrice.classList.add('text-center', 'text-primary', 'fw-bold', 'priceText');
//     pPrice.innerHTML = `${menu[i].price}`;
//     const a = document.createElement('a');
//     a.classList.add('btn', 'btn-outline-warning', 'kosarBtn');
//     a.innerHTML = `Hozzáadás`;

//     cardDiv.appendChild(newImg);
//     cardDiv.appendChild(cardBodyDiv);
//     cardBodyDiv.appendChild(h5);
//     cardBodyDiv.appendChild(p);
//     cardBodyDiv.appendChild(inputDiv);
//     inputDiv.appendChild(input);
//     cardBodyDiv.appendChild(pPrice);
//     cardBodyDiv.appendChild(a);
//     colDiv.appendChild(cardDiv);
//     container2.appendChild(colDiv);

// }