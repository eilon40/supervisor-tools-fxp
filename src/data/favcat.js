import categories from './categories';

export function setFavCat(catId) {
    const isCatExists = categories.filter((cat) => cat.id === catId)[0];
    if (isCatExists) {
        window.localStorage.setItem('fav', JSON.stringify({ id: catId }));
    }
}

export function removeFavCat() {
    window.localStorage.removeItem('fav');
    window.location.reload();
}
