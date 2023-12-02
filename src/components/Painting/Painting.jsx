import PropTypes from 'prop-types';

export const Painting = ({id, title, url, quantity, price, author}) => {
    return (
        <li>
            <img src={url} alt="" width="480" />
            <h2>{title}</h2>
            <p>Автор: <a href={author.url}>{author.url}</a>{author.tag}</p>
            <p>Ціна: {price} грн</p>props
            <p>Доступність: {quantity < 5 ? 'закінчується' : `є в наявності ${quantity}`}</p>
            <button type="button">Додати в кошик</button>
        </li>
    )
}

Painting.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.string,
    author: PropTypes.object
}