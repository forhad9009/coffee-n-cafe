import PropTypes from 'prop-types';
import { GiMedicinePills } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

const Recipe = ({recipe, handleCount}) => {
    // console.log(recipe);
    const {image,name,description,ingredients,preparing_time,calories} = recipe;
    return (
        <div className='p-4 bg-green-100 rounded shadow-2xl space-y-2'>
            <img src={image} alt="" className='rounded-md h-48 object-cover w-full'/>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p className='font-light text-sm'>{description}</p>
            <hr />
            <div>
                <h2 className='text-xl'>Ingredients</h2>
                <ul>{ingredients}</ul>
            </div>
            <hr />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <h2><IoMdTime></IoMdTime></h2>
                    <h2>{preparing_time} minute</h2>
                </div>
                <div className='flex items-center gap-2'>
                    <h2><GiMedicinePills></GiMedicinePills></h2>
                    <h2>{calories} calories</h2>
                </div>
            </div>
            <button onClick={()=> handleCount(recipe)} className='btn btn-primary'>Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCount: PropTypes.func.isRequired,
};

export default Recipe;