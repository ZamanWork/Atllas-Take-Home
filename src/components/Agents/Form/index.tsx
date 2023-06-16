import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { FormValues } from 'types/Agent';
import { Formik, Form } from 'formik';
import InputField from 'components/Agents/Form/InputField';
import { createAgent } from 'store/actions/createAgent';
import {agentValidationSchema} from 'helpers/agentValidationSchema'

const AddAgentForm: React.FC = () => {

  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    agentLicense: '',
    address: '',
    practiceAreas: [],
    aboutMe: '',
    pictureUrl: '',
  };

  const dispatch: Dispatch<any> = useDispatch();

  const handleSubmit = (values: any) => {
    const payload = { ...values };
    if (payload.pictureUrl === '') {
      delete payload.pictureUrl;
    }
    const practices = payload.practiceAreas.split(', ');
    dispatch(createAgent({...payload, practiceAreas: practices}));
  };

  return (
    <div className='container'>
      <h1>Agent Form</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={agentValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputField labelText='First Name' inputName='firstName' />

          <InputField labelText='Last Name' inputName='lastName' />

          <InputField labelText='Agent License' inputName='agentLicense' />

          <InputField labelText='Address' inputName='address' />

          <InputField labelText='Practice Areas' inputName='practiceAreas' />

          <InputField
            labelText='About Me'
            inputName='aboutMe'
            type='textarea'
          />

          <InputField labelText='Picture URL' inputName='pictureUrl' />

          <button className='btn btn-primary' type='submit'>
            Add Agent
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddAgentForm;
