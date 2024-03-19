import PropTypes from 'prop-types';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-6 w-10/12 mx-auto'>
            <h2 className='text-2xl font-bold'>Coffee n Cafe</h2>
            <div className='list-none flex items-center space-x-5'>
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </div>
            <div className='flex items-center justify-between gap-2'>
            <input type="text" name="" id="" placeholder='search' className='p-2 rounded-md'/>
            <h2 className='text-2xl text-green-600'><CgProfile></CgProfile></h2>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;