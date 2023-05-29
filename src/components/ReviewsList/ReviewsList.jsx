import React from 'react';
import { Ul, Li, Reviever } from './ReviewsList.styled';

const ReviewsList = ({ reviewes }) => {
  return (
    <Ul>
      {reviewes.map(review => {
        // console.log('review', review);
        return (
          <Li key={review.id}>
            <Reviever>Reviewer: {review.author}</Reviever>
            <p>{review.content}</p>
          </Li>
        );
      })}
    </Ul>
  );
};

export default ReviewsList;
