import PropTypes from 'prop-types';

const Coverphoto = () => {
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/dP4fK6s/frank-holleman-r-N-RMq-SXRKw-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-5xl text-start">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for yor!</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
      <div className='space-x-5'>
      <button className="btn btn-primary">Explore Now</button>
      <button className="btn opacity-50 font-bold">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

Coverphoto.propTypes = {
    
};

export default Coverphoto;