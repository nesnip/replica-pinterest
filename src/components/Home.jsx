import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// import getImages from '../controller/getImages';
import { toJson } from 'unsplash-js';
import unsplash from '../controller/getImages';
import Item from './Item';

const Home = ({ category, data, setData }) => {
  useEffect(() => {
    unsplash.photos.listPhotos(1, 20, 'popular').then(toJson).then((res) => setData(res));
  }, []);

  /* useEffect(() => {
    getImages(category).then((res) => {
      console.log(res);
      setData(res);
    }).catch((e) => console.log(e));
  }, [category]); */

  /* const [currScrollPosition, setCurrScrollPosition] = useState(0);

  useEffect(() => {
    const handleScrollEvent = () => {
      setCurrScrollPosition(window.scrollY);
    };
    document.addEventListener('scroll', handleScrollEvent);
    return () => document.removeEventListener('scroll', handleScrollEvent);
  }, []);

  console.log(currScrollPosition);

  useEffect(() => {
    if (currScrollPosition > 40 && currScrollPosition < 46) {
      unsplash.photos.listPhotos(2, 20, 'popular')
        .then(toJson)
        .then((res) => {
          setData(data.concat(res));
          console.log(data.concat(res));
        });
    }
  }, [currScrollPosition]); */

  return (
    <div className="home">
      <section className="list-container">
        {data.map((dataObj) => (
          <Item
            key={dataObj.id}
            url={dataObj.urls.small}
            description={dataObj.description}
            title={dataObj.alt_description}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
