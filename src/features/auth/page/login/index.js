import React from 'react';
import { Button } from '@progress/kendo-react-buttons'
import { authActions } from '../../authSlice';
import { useDispatch, connect } from 'react-redux';
import { Form, FormElement, Field } from '@progress/kendo-react-form';
import { FloatingLabelEmailInput } from './formComponent';
import './style.scss';
import { formValidator } from './validator';
import { Link } from 'react-router-dom';
const Login = (props) => {

  const handleLogin = (dataItem) => {
    const { username, password } = dataItem;
    props.login({ username, password })
  }


  return (
    <div className='container'>
      <h2 style={{ margin: 0 }}>Sign in</h2>
      <Form
        onSubmit={handleLogin}
        validator={formValidator}
        render={(formRenderProps) => (
          <FormElement
            style={{ maxWidth: 300 }}
          >
            <Field
              id={'username'}
              name={'username'}
              label={'Username'}
              component={FloatingLabelEmailInput}
            >
            </Field>
            <Field
              id={'password'}
              name={'password'}
              label={'Password'}
              component={FloatingLabelEmailInput}
              type={'password'}
            >
            </Field>
            <div className="k-form-buttons">
              <button
                type={"submit"}
                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base btn"
                disabled={!formRenderProps.allowSubmit}
              >
                Login
              </button>
            </div>
          </FormElement>
        )}
      />
      <div className={'signup'}>
        <p>You dont have account? <Link style={{ color: '#ffff' }} to={'/signup'} >Sign up</Link> </p>
      </div>
    </div >


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
