const API_URL = 'https://api.coincap.io/v2/assets';

const append = (name, symbol, price) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `${name} (${symbol}): ${price}`;
    document.querySelector('#crypto_list').appendChild(newLi);
};

const fetchCrypto = () => {
    fetch(API_URL).then(response => response.json()).then(data => {
        data.data.filter((coin) => coin.rank <= 10).forEach((coin) => {
            append(coin.name, coin.symbol, coin.priceUsd);
        });
    });
};

window.onload = () => fetchCrypto();