import React, { useEffect, useState } from 'react';
import axios from 'axios';

import urlConfig from '../../router/urlConfig';
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
      .then(resp => setUseFeed(resp.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getFeed();
  }, []);

  if (!useFeed) return <div>...loading</div>;

  return (
    <div>
      {useFeed.publications.map(publication => (
        <FeedCard
          key={publication.id}
          author={publication.author}
          createdAt={publication.created_at}
          message={publication.message}
        />
      ))}

    </div>
  );
}
