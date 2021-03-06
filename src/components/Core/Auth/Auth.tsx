import React, { Component, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { FormField } from '../../../shared/FormField/FormField';

import { AuthFormFields } from '../../../enums/AuthFormFields';
import { StringParams } from '../../../enums/StringParams';
import { IAuthFormProps } from './IAuthFormProps';
import { IAuthFormState } from './IAuthFormState';
import { Routes } from '../../../enums/Routes';
import { AuthType } from '../../../enums/AuthType';

import { resources } from '../../../constants/resources';

import './Auth.css';

export class Auth extends Component<IAuthFormProps, IAuthFormState> {
  constructor(props: IAuthFormProps) {
    super(props);
    this.state = {
      login: '',
      password: '',
      errors: {
        login: '',
        password: '',
      },
    };
  }

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { login, password } = this.state;
    const isValidationError = !!(this.validateLogin(login) || this.validatePassword(password));
    if (isValidationError) {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          login: this.validate(AuthFormFields.LOGIN, login),
          password: this.validate(AuthFormFields.PASSWORD, password),
        },
      }));
      return;
    }
    const { onSubmit } = this.props;
    onSubmit({ login, password });
  }

  onChange = (filed: AuthFormFields) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      this.setState((prevState) => ({ ...prevState, [filed]: value }));
    };
  }

  onBlur = (field: AuthFormFields) => {
    return () => {
      const { [field]: value } = this.state;
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [field]: this.validate(field, value),
        },
      }));
    };
  }

  private validate(field: AuthFormFields, value: string) {
    if (field === AuthFormFields.LOGIN) {
      return this.validateLogin(value).replace(StringParams.FIELD, field);
    }
    return this.validatePassword(value).replace(StringParams.FIELD, field);
  }

  private validateLogin(value: string) {
    const { loginPattern } = this.props;
    if (!value.trim().length) {
      return resources.auth.validation.required;
    }
    if (!loginPattern.test(value)) {
      return resources.auth.validation.forbiddenFieldThreeChars;
    }
    return '';
  }

  private validatePassword(value: string) {
    const { passwordPattern } = this.props;
    if (!value.trim().length) {
      return resources.auth.validation.required;
    }
    if (!passwordPattern.test(value)) {
      return resources.auth.validation.forbiddenFieldEightChars;
    }
    return '';
  }

  render() {
    const { login, password, errors } = this.state;
    const { type } = this.props;
    const isSignIn = type === AuthType.SIGN_IN;
    const action = isSignIn ? resources.auth.actions.signIn : resources.auth.actions.signUp;
    const link = isSignIn ? Routes.REGISTER : Routes.LOGIN;
    const linkText = isSignIn ? resources.auth.link.signIn : resources.auth.link.signUp;
    return (
      <div className="auth-form-container center">
        <div className="auth-form-wrap">
          <h3 className="auth-form-header">{action}</h3>
          <form onSubmit={this.onSubmit} className="auth-form center">
            <FormField
              label={AuthFormFields.LOGIN}
              value={login}
              error={errors.login}
              onBlur={this.onBlur(AuthFormFields.LOGIN)}
              onChange={this.onChange(AuthFormFields.LOGIN)}
            />
            <FormField
              label={AuthFormFields.PASSWORD}
              value={password}
              error={errors.password}
              type="password"
              onBlur={this.onBlur(AuthFormFields.PASSWORD)}
              onChange={this.onChange(AuthFormFields.PASSWORD)}
            />
            <div className="auth-form__actions">
              <Link to={link}>{linkText}</Link>
              <button className="button-reset auth-form__button" type="submit">{action}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
