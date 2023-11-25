import painting from "../../painting.json";

const options = painting[0]

// false && true //false
// false || true // true
// !
// умова ? true : false

export function Painting() {
    return (
        <ul>
            {painting.map(option =>
                    <li>
                        <img src={option.url} alt="" width="480" />
                        <h2>{option.itle}</h2>
                        <p>Автор: <a href={option.autor.url}>{option.autor.url}</a>{option.autor.url}</p>
                        <p>Ціна: {option.price} грн</p>
                        <p>Доступність: {option.quantity < 5 ? 'закінчується' : `є в наявності ${option.quantity}`}</p>
                        <button type="button">Додати в кошик</button>
                    </li>
                )
            }
        </ul>
    )
}