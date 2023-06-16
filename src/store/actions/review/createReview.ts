import { createReviewApi } from 'store/api/reviews';
import {
  CREATE_REVIEW_FAILURE,
  CREATE_REVIEW_SUCCESS
} from 'store/constants/reviewConstants';
import { SUCCESSFUL } from 'store/constants/statusCodes';

import { IReview } from 'types/Review';

const success = (review: IReview) => ({
  type: CREATE_REVIEW_SUCCESS,
  review,
});

const failure = (error: any) => ({
  type: CREATE_REVIEW_FAILURE,
  error,
});

export const createReview = (agentId: any ,review: IReview) => (dispatch: any) => {
  createReviewApi(agentId, review)
    .then((response) => {
      if (response.status === SUCCESSFUL) {
        dispatch(success(response.data.review));
      } else {
        dispatch(failure(response));
      }
    })
    .catch((err) => {
      dispatch(failure(err));
    });
};
