import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StarIcon from '@mui/icons-material/Star';
import { IAgent } from 'types/Agent';
import Avatar from '@mui/material/Avatar';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
const Review: React.FC<{ agent: IAgent }> = ({ agent }) => {
  console.log(agent, "here", agent?.Reviews)
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {agent.firstName} {agent.lastName}
          {agent.photoUrl && (
            <div className="mb-3">
              <img src={agent.photoUrl} alt="Profile" className="profile-image" />
            </div>
          )}
        </Typography>

        <Typography color="textSecondary">
          ID: {agent.id}
        </Typography>

        <Typography color="textSecondary">
          Agent License: {agent.agentLicense}
        </Typography>

        <Typography variant="h6" component="h3">
          Reviews:
        </Typography>
        
        {agent.Reviews.map((review, index) => (
          <div key={index} >
            <Avatar 
              className='rounded-circle shadow-1-strong m-auto' 
              sx={{ width: 128, height: 128 }}
            >
              <AccountCircleRoundedIcon sx={{ width: 128, height: 128 }}/>
            </Avatar>
            <h5 className="mb-3 mt-0">Anonymous</h5>
            <i className="fas fa-quote-left pe-2"></i>
            {review.comment}
            
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              {Array.from({ length: review.rating }, (_, i) => (
                <li key={i}>
                  <StarIcon/>
                </li>
              ))}
              {Array.from({ length: 5 - review.rating }, (_, i) => (
                <li key={i}>
                  <StarIcon/>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Review;


