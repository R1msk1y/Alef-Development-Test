
//вывод миниатюр на главный экран

const allMiniCards = document.querySelectorAll(`[data-mini]`);
let mainImg = document.querySelector(`.main__left-img`);
let hiddenTitle = document.querySelector(`.main__left-hidenTitle`);

allMiniCards[0].addEventListener(`click`, function(){

    mainImg.src = `assets/img/main/main__img1.jpg`;
    hiddenTitle.innerText = `Пижама для мальчиков из первой карточки`;

});

allMiniCards[1].addEventListener(`click`, function(){

    mainImg.src = `assets/img/main/main__img2.jpg`;
    hiddenTitle.innerText = `Пижама для девочек из второй карточки`;

});

allMiniCards[2].addEventListener(`click`, function(){

    mainImg.src = `assets/img/main/main__img3.jpg`;
    hiddenTitle.innerText = `Пижама для девочек из третьей карточки`;

});

allMiniCards[3].addEventListener(`click`, function(){

    mainImg.src = `assets/img/main/main__img4.jpg`;
    hiddenTitle.innerText = `Пижама для девочек из четвертой карточки`;

});

allMiniCards[4].addEventListener(`click`, function(){

    mainImg.src = `assets/img/main/main__img5.jpg`;
    hiddenTitle.innerText = `Пижама для девочек из пятой карточки`;

});


//счетчик

window.addEventListener(`click`, function(event){



    if(event.target.dataset.counter === `plus`){

       let parentOfCounter =  event.target.closest(`.form__counter`);

       let counterForPlus = parentOfCounter.querySelector(`[data-counter="counter"]`);

       counterForPlus.innerText = ++counterForPlus.innerText;

    }


    if(event.target.dataset.counter === `minus`) {

        let parentOfCounter =  event.target.closest(`.form__counter`);

        let counterForMinus = parentOfCounter.querySelector(`[data-counter="counter"]`);

        if(parseInt(counterForMinus.innerText) > 1)

        counterForMinus.innerText = --counterForMinus.innerText;


    }

});

//шапка

let header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});




//вывод в коризну

const modalBtn = document.querySelector(`.form__btn`);
const modal = document.querySelector(`.modal`);

modalBtn.addEventListener(`click`, function(){

    modal.classList.remove(`modal`);
    modal.classList.add(`modal__show`);
    modal.classList.add(`fade`);

    let itemsInBasket = modal.querySelector(`.modal__productCounter`);

    let counterForBasket = document.querySelector(`[data-counter="counter"]`);

    itemsInBasket.innerText = ``;
    itemsInBasket.innerText = counterForBasket.innerText;

    let nameOfProduct = modal.querySelector(`.modal__productDescr`);

    let nameOfProductInBasket = document.querySelector(`.main__left-hidenTitle`);

    nameOfProduct.innerText = ``;
    nameOfProduct.innerText = nameOfProductInBasket.innerText;


    setTimeout(function(){

        modal.classList.add(`modal`);
        modal.classList.remove(`modal__show`);
        modal.classList.remove(`fade`);
        itemsInBasket.innerText = ``;
        nameOfProduct.innerText = ``;


    }, 3000);


});


// добавление в избранное

const modalFavoritesBtn = document.querySelector(`.form__like`);
const modalFavoritesMain = document.querySelector(`.modal__favorites`);

modalFavoritesBtn.addEventListener(`click`, function(){

    modalFavoritesMain.classList.remove(`modal__favorites`);
    modalFavoritesMain.classList.add(`modal__favorites-show`);
    modalFavoritesMain.classList.add(`fade`);



    let nameOfProductForFavorites = modalFavoritesMain.querySelector(`.modal__favorites-productDescr`);
    let productNameOnCards = document.querySelector(`.main__left-hidenTitle`);

    nameOfProductForFavorites.innerText = ``;
    nameOfProductForFavorites.innerText = productNameOnCards.innerText;


    setTimeout(function(){

    modalFavoritesMain.classList.remove(`modal__favorites-show`);
    modalFavoritesMain.classList.add(`modal__favorites`);
    modalFavoritesMain.classList.remove(`fade`);
        itemsInBasket.innerText = ``;
        nameOfProduct.innerText = ``;


    }, 3000);


});



//бургер меню
$(document).ready(function(){

    $(`.header__burger`).click(function(event){

        $(`.header__burger, .burger__navigator`).toggleClass(`active`);

    });

    $(`.burger__exit`).click(function(event){


        $(`.header__burger, .burger__navigator`).toggleClass(`active`);


    });



});



//Проверка Email

let regForEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

let forEmail = document.querySelector(`#forEmail`);

document.querySelector(`.footer__form-btn`).onclick = function(e){

    e.preventDefault();

    if(!regForEmail.test(forEmail.value)){

        alert("Проверка не пройдена. Email введен не корректно");


    }else{

        alert("Проверка пройдена, Email введен корректно. Спасибо за подписку!");

    }

};

//работа с селектом

const option = document.querySelector(`.form__option`);
const select = document.querySelector(`.form__select`);

select.addEventListener(`click`, function(){

    option.classList.add(`hideme`);




});









