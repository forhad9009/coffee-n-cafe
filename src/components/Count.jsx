import PropTypes from 'prop-types';
// import { totalCount } from '../App'; 

const Count = ({count}) => {
   
    // console.log(count);
    return (
        <div  className="w-1/3 p-5 self-start rounded-md border-2">
          <h2 className='text-center'>Want to cook:0
          
          </h2>
          <div className='flex justify-around items-center'>
           <div>
           <h3>Name</h3>
            {count.map((count,index) => <h3 key={count.index}>{index+1}  {count.name}</h3>)}
           </div>
            <div>
            <h3>Time</h3>
            {count.map(count => <h3 key={count.index}>{count.preparing_time}</h3>)}
            </div>
            <div>
            <h3>Calories</h3>
            {count.map(count => <h3 key={count.index}>{count.calories}</h3>)}
            </div>

          </div>
          <hr />
          <h2 className='text-center'>Currently cooking: 0 </h2>
          <div className='flex justify-around items-center'>
            <h3>Name</h3>
            <h3>Time</h3>
            <h3>Calories</h3>
          </div>
          <hr />
          <div className='flex justify-evenly'>
            <h2>Total Time = 0 minute</h2>
            <h2>Total Calories = 0 calories</h2>
          </div>
        </div>
    );
};

Count.propTypes = {
    count: PropTypes.array.isRequired,
};

export default Count;