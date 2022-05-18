export default () => {
    return fetch(
        'https://ozon-a1bc3-default-rtdb.firebaseio.com/goods.json'
    ).then((response) => response.json());
};
