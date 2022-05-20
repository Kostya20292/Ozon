import getData from './getData';
import renderGoods from './renderGoods';

export default () => {
    getData().then((data) => renderGoods(data));
};
