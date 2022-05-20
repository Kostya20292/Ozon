import getData from './getData';
import renderGoods from './renderGoods';
import { searchFilter } from './filters';

export default () => {
    const searchInput = document.querySelector('.search-wrapper_input');

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value;

        getData().then((data) => renderGoods(searchFilter(data, value)));
    });
};
