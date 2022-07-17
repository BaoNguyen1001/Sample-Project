import React from 'react';
import { Button } from '@progress/kendo-react-buttons'
import { authActions } from '../authSlice';
import { useDispatch, connect } from 'react-redux';
import { Form, FormElement, Field } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Error } from "@progress/kendo-react-labels";

const Login = (props) => {

  const dispatch = useDispatch();




  const handleLogin = () => {
    props.login({ username: '', password: '' })
  }


  return (
    <div>
      <Form
        render={(formRenderProps) => (
          <FormElement
            style={{ maxWidth: 650, }}
          >
            <fieldset>
              <legend>
                Sign in
              </legend>
            </fieldset>
          </FormElement>
        )}
      />
    </div>


  )
}

const mapStateToProps = (state) => {
  return {
    auth: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (obj) => dispatch(authActions.login(obj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
