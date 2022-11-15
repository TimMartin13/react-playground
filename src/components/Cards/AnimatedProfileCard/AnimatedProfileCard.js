import React from 'react';
import './AnimatedProfileCard.scss';

const AnimatedProfileCard = () => {
  return (
    <div className='animated-profile-card-body'>
      <div className='card'>
        <div className='lines'></div>
        <div className='imgBx'>
          <img
            src={process.env.PUBLIC_URL + '/images/BusterProfile.jpg'}
            alt='Buster sitting'
          />
        </div>
        <div className='content'>
          <div className='details'>
            <h2>
              Buster Martin
              <br />
              <span>House Protector</span>
            </h2>
            <div className='data'>
              <h3>
                342
                <br />
                <span>Posts</span>
              </h3>
              <h3>
                120k
                <br />
                <span>Followers</span>
              </h3>
              <h3>
                285
                <br />
                <span>Following</span>
              </h3>
            </div>
            <div className='actionBtn'>
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProfileCard;
