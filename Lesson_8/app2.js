function count() {
    let counter = 0;
    return function () {
        return counter += 1;
    };
}

const myDiv = document.querySelector('div.newArrivals > div');
const clsCrtIcon = document.querySelector('img.cartIcon')
const spanEl = document.querySelector('span.cartIconWrap > span')
//const price = document.querySelector('.featuredPrice')
spanEl.textContent = '0'
let _number = Number.parseInt(spanEl.textContent);
const basket = {};
const divContainer = document.querySelectorAll('div.featuredItem')
divContainer.forEach(el => {
    const counter = count()
    el.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            _number += 1;
            spanEl.textContent = _number.toString();

            function addToBasket() {
                const keyBasket = event.target.parentElement.parentElement.parentElement.dataset['id']
                basket[keyBasket] =
                {
                    'id': event.target.parentElement.parentElement.parentElement.dataset['id'],
                    'name': event.target.parentElement.parentElement.parentElement.dataset['name'],
                    'price': event.target.parentElement.parentElement.parentElement.dataset['price'],
                    'count': counter()
                }
                function objBasket() {
                    return basket;
                }

                function key() {
                    return keyBasket
                }

                return {
                    objBasket,
                    key
                };
            }

            const myBasket = addToBasket();
            const bsktId = basket[myBasket.key()].id
            const bsktPrice = basket[myBasket.key()].price
            const bsctCount = basket[myBasket.key()].count

            console.log(`product ${bsktId}, price: ${bsktPrice}, count: ${bsctCount} total: ${Number.parseInt(bsctCount * bsktPrice)}`)
            //console.log(sum)
            const abc = Object.values(basket)
            let s = 0
            abc.forEach(i => {
                s += i.count * i.price
            });
            console.log(`Total amount: ${s}`)


        }

    })


});

clsCrtIcon.addEventListener('click', function () {
    //myDiv.classList.toggle('hidden')
    //myDiv.textContent = `product${myBasket.objBasket()}`
    console.log(basket)

});
