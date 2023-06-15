import React from 'react';
import { IAgent } from 'types/Agent';
import { Formik, Form } from 'formik';
import InputField from './InputField';
import {agentValidationSchema} from 'helpers/agentValidationSchema'

interface AgentFormProps {
  agent: IAgent;
}

const AddAgentForm: React.FC<AgentFormProps> = ({ agent }) => {
  interface AgentFormValues {
    firstName: string;
    lastName: string;
    agentLicense: string;
    address: string;
    practiceAreas: string;
    aboutMe: string;
    pictureUrl: string;
  }

  const handleSubmit = (values: AgentFormValues) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div className="container">
      <h1>Agent Form</h1>
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          agentLicense: '',
          address: '',
          practiceAreas: '',
          aboutMe: '',
          pictureUrl: '',
        }}
        validationSchema={agentValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>

          <InputField
            labelText='First Name'
            inputName='firstName'
          />

          <InputField
            labelText='Last Name'
            inputName='lastName'
          />

          <InputField
            labelText='Agent License'
            inputName='agentLicense'
          />

          <InputField
            labelText='Address'
            inputName='address'
          />        

          <InputField
            labelText='Practice Areas'
            inputName='practiceAreas'
          /> 

          <InputField
            labelText='About Me'
            inputName='aboutMe'
            type='textarea'
          /> 

          <InputField 
            labelText='Picture URL'
            inputName='pictureUrl'
          />
          
          <button className='btn btn-primary' type="submit">Add Agent</button>

        </Form>
      </Formik>
    </div>
  );
};

export default AddAgentForm;
