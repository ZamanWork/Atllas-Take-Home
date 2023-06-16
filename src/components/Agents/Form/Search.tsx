import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { 
  Formik, 
  Form, 
  Field, 
  FormikProps, 
  FieldProps 
} from 'formik';
import TextField from '@mui/material/TextField';
import { listAgents } from 'store/actions/listAgents';
import SearchIcon from '@mui/icons-material/Search';
import { AgentParams, SearchProps } from 'types/Agent';

const AgentSearch: React.FC<SearchProps> = ({ currentPage, setCurrentPage }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleSubmit = (values: AgentParams) => {
    values.page=currentPage.page;
    dispatch(listAgents(values));
    setCurrentPage(values);
  };

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {({ handleSubmit }: FormikProps<string>) => (
        <Form className='d-flex' onSubmit={handleSubmit}>
          <Field name="search">
            {({ field }: FieldProps<AgentParams['search']>) => (
              <TextField
                {...field}
                label="Search Agent"
                className='form-control me-2'
                type='search'
                placeholder='Search'
              />
            )}
          </Field>
          <button className='btn btn-outline-success' type='submit'>
            <SearchIcon />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AgentSearch;
