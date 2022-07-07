import React, { useEffect, useState } from 'react';
import axios from 'axios';

import FeedContainer from './styles';

import urlConfig from '../../router/urlConfig';
// eslint-disable-next-line no-unused-vars
import history from '../../router/history';
import FeedCard from '../FeedCard';

export default function Timeline() {
  const baseURL = urlConfig[urlConfig.enviroment.api].api;
  const [useFeed, setUseFeed] = useState();

  function getFeed() {
    const localItem = localStorage.getItem('newsLetters');

    const objectLocal = JSON.parse(localItem);

    const headers = {
      authorization: `Bearer ${objectLocal.token}`,
    };

    axios.post(`${baseURL}/publication/read`, {}, {
      headers,
    })
      .then((resp) => {
        setUseFeed(resp.data);
      })
      .catch(err => err);
  }

  useEffect(async () => {
    await getFeed();
  }, []);

  if (!useFeed) return <div>...loading</div>;
  if (!useFeed.publications) return <div>Não há publicações no momento =/</div>;

  return (
    <FeedContainer>
      {useFeed.publications.map(publication => (
        <FeedCard
          key={publication.id}
          author={publication.author}
          createdAt={publication.created_at}
          message={publication.message}
        />
      ))}
    </FeedContainer>
  );
}
