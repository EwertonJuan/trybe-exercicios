const API_URL = 'https://api.coincap.io/v2/assets';

const append = (name, symbol, price) => {
    const cryptoList = document.querySelector('#crypto_list');
    const newLi = document.createElement('li');
    newLi.innerHTML = `${name} (${symbol}): ${price}`;
    cryptoList.appendChild(newLi);
};

const fetchCrypto = () => {
    fetch(API_URL).then(response => response.json()).then(data => {
        data.data.filter((coin) => coin.rank <= 10)
        .forEach((coin) => {
            append(coin.name, coin.symbol, coin.priceUsd);
        });
    });
};

window.onload = () => fetchCrypto();