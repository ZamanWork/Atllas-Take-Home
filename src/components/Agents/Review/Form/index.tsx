import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IReview } from 'types/Review';
import AgentInfo from '../../Details';
import { IAgent } from 'types/Agent';

interface ReviewFormProps {
  review: IReview;
  agent: IAgent;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ review, agent }) => {
  const initialValues = {
    rating: review.rating,
    comment: review.comment,
  };

  const validationSchema = Yup.object().shape({
    rating: Yup.number().required('Rating is required'),
    comment: Yup.string().required('Comment is required'),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className='container'>
      <div className='row-container'>
        <AgentInfo agent={agent} title='Review Form'/>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className='mb-3'>
              <label htmlFor='rating' className='form-label'>
                Rating
              </label>
              <Field
                id='rating'
                name='rating'
                type='number'
                className='form-control'
              />
              <ErrorMessage
                name='rating'
                component='div'
                className='error-message'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='comment' className='form-label'>
                Comment
              </label>
              <Field
                id='comment'
                name='comment'
                as='textarea'
                className='form-control'
              />
              <ErrorMessage
                name='comment'
                component='div'
                className='error-message'
              />
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ReviewForm;
