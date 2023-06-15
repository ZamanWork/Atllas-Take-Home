import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { IAgent } from 'types/Agent';

const Review: React.FC<{ agent: IAgent }> = ({ agent }) => {
  return (
    <div className='row text-center d-flex align-items-stretch'>
      <h3>Reviews</h3>
      {agent?.Reviews && agent.Reviews.map((review, index) => (
        <div className='card testimonial-card'>
          <div className='card-up'></div>
          <div className='avatar bg-white'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp'
              className='rounded-circle shadow-1-strong'
              width='100'
              height='100'
              alt='Avatar'
            />
          </div>
          <h4 className='mb-4'>Anonymous</h4>
          <div className='card-body'>
            <hr />
            <p className='mb-3'>Agent Expert</p>
            <p className='mb-3'>{review.comment}</p>
            <p className='mb-3'>Rating: {review.rating}</p>
            <ul className='list-unstyled d-flex justify-content-center text-warning mb-0'>
              {Array.from({ length: review.rating }, (_, i) => (
                <li key={i}>
                  <StarIcon />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
