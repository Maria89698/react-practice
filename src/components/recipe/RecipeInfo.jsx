import PropTypes from 'prop-types';
import { Recipe } from "./Recipe";

export function RecipeInfo({name, time, servings, calories, image, difficulty, iconTime: IconTime, iconCalories: IconCalories, iconPie: IconPie}) {
    return (
        <li>
            <img width="300" src={image} alt={name} />
            <h2>{name}</h2>
            <p><IconPie />Кількість порцій: {servings}</p>
            <p><iconTime />Час приготування: {time} хв</p>
            <p><iconCalories />Кількість калорій: {calories}</p>
            <p>{difficulty}</p>
        </li>
    )
}

RecipeInfo.propTypes = {
	name: PropTypes.string,
	time: PropTypes.string,
	servings: PropTypes.number,
	calories: PropTypes.number,
	difficulty: PropTypes.number,
	image: PropTypes.string
}