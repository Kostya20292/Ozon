import getData from './getData';

export default () => {
    const cartBtn = document.getElementById('cart');

    getData().then((data) => console.log(data));
};
