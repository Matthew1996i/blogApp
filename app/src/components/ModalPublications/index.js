import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

import PropTypes from 'prop-types';

import urlConfig from '../../router/urlConfig';
import history from '../../router/history';

export default function ModalPublications({ showModal, setShow }) {
  const [useText, setUseText] = useState('');
  const [useMessage, setMessage] = useState({
    message: '',
    type: '',
    color: '',
  });

  const baseURL = urlConfig[urlConfig.enviroment.api].api;

  const handleClose = () => {
    setUseText('');
    return setShow(false);
  };

  const handleSubmit = () => {
    const { token } = JSON.parse(localStorage.getItem('newsLetters'));

    const data = {
      publication: useText,
    };

    const headers = {
      authorization: `Bearer ${token}`,
    };

    if (!useText === 'Incorrect password or email') return setMessage({ message: 'Email ou Senha incorreto!', type: 'warning', color: '#ed717d' });
    if (!useText === 'User not found') return setMessage({ message: 'Usuario não encontrado!', type: 'warning', color: '#ed717d' });


    return axios.post(`${baseURL}/publication/create`, { ...data }, { headers })
      .then((resp) => {
        if (resp.data.status === 'ok') {
          setShow(false);
          return setTimeout(() => {
            window.location.reload(true);
          }, 1000);
        }
        return '';
      })
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem('newsLetters');
          return history.push('/');
        }

        return err;
      });
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Publicar na Timeline</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>O que está pensando hoje?</Form.Label>
            <Form.Control as="textarea" rows={3} value={useText} onChange={e => setUseText(e.target.value)} />
          </Form.Group>
          <p type={useMessage.type} color={useMessage.color}>{useMessage.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" className="btn-cancel" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" className="btn-submit" onClick={handleSubmit}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ModalPublications.propTypes = {
  showModal: PropTypes.bool,
  setShow: PropTypes.func,
}.isRequired;
