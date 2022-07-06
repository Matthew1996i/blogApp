import React, { useState } from 'react';
import axios from 'axios';

import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faAt, faUser } from '@fortawesome/free-solid-svg-icons';

import urlConfig from '../../router/urlConfig';
import history from '../../router/history';
import { LoginContainer, LoginContent, ReturnButton, MessageLabel } from './styles';

const Login = () => {
  const baseURL = urlConfig[urlConfig.enviroment.api].api;

  const [useData, setData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [useMessage, setMessage] = useState({
    message: '',
    type: '',
    color: '',
  });

  const captureDataLogin = (e) => {
    const { id } = e.target;
    setData({
      ...useData,
      [id]: e.target.value,
    });
  };

  const createUser = () => {
    if (!useData.name) return setMessage({ message: 'Insira um nome de como gostaria de ser chamado!', type: 'warning', color: '#ed717d' });

    return axios.post(`${baseURL}/create`, useData)
      .then((resp) => {
        if (resp.data.message === 'There is already a user for this email') return setMessage({ message: 'O email informado já está sendo usado!', type: 'warning', color: '#ed717d' });

        return history.push('/login');
      })
      .catch(error => error);
  };

  return (
    <LoginContainer>
      <LoginContent>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faUser} />
            </InputGroup.Text>
            <FormControl
              onChange={captureDataLogin}
              type="text"
              placeholder="Seu nome"
              aria-label="name"
              id="name"
              aria-describedby="basic-addon1"
              value={useData.name}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faAt} />
            </InputGroup.Text>
            <FormControl
              onChange={captureDataLogin}
              type="email"
              placeholder="E-mail"
              aria-label="Email"
              id="email"
              aria-describedby="basic-addon1"
              value={useData.email}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faKey} />
            </InputGroup.Text>
            <FormControl
              onChange={captureDataLogin}
              type="password"
              placeholder="Password"
              aria-label="Password"
              id="password"
              aria-describedby="basic-addon1"
              value={useData.password}
            />
          </InputGroup>
          <MessageLabel>
            <p type={useMessage.type} color={useMessage.color}>{useMessage.message}</p>
          </MessageLabel>
          <Button onClick={() => createUser()} className="btn btn-success">
            <span>Criar uma conta</span>
          </Button>
        </Form>
        <ReturnButton className="btn btn-return" onClick={() => history.push('/login')}>
          <span>Cancelar</span>
        </ReturnButton>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
