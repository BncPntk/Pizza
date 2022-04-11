const cardContainer = document.querySelector('#cardContainer');


const placeImage = function () {

    for (let i = 0; i < 3; i++) {
        let image = document.createElement('img');
        image.src = `https://i.stack.imgur.com/n4qMI.png`;
        image.classList.add('card-img-top');
        cardContainer.appendChild(image);
        console.log(1);
    }
};

placeImage();
