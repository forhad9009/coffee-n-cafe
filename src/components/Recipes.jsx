import PropTypes from 'prop-types';
import Recipe from './Recipe';

const Recipes = ({recipes, handleCount}) => {
    // console.log(recipes);
    return (
        <div className="w-2/3 grid grid-cols-2 gap-6">
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe = {recipe} handleCount = {handleCount}></Recipe>)
            }
            
        </div>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    handleCount: PropTypes.func.isRequired,
};

export default Recipes;