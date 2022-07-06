import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { pt } from 'date-fns/locale';

export default function FeedCard({ author, createdAt, message }) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{format(new Date(createdAt), "dd 'de' MMM yyyy 'as' HH:mm", { locale: pt })}</Card.Subtitle>
        <Card.Text>
          {message}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

FeedCard.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  message: PropTypes.string,
}.isRequired;
