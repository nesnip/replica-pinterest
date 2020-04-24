import React, { useState, useEffect } from 'react';
// import getImages from '../controller/getImages';
import { toJson } from 'unsplash-js';
import unsplash from '../controller/getImages';
import Header from './Header';
import Item from './Item';

const Home = ({ category, data, setData }) => {
  useEffect(() => {
    unsplash.photos.listPhotos(4, 20, 'popular').then(toJson).then((res) => setData(res));
  }, [category]);

  /* useEffect(() => {
    getImages(category).then((res) => {
      console.log(res);
      setData(res);
    }).catch((e) => console.log(e));
  }, [category]); */

  console.log(data);

  return (
    <div>
      <section className="list-container">
        {data.map((dataObj) => (
          <Item key={dataObj.id} url={dataObj.urls.small} description={dataObj.description} />
        ))}
      </section>
    </div>
  );
};

export default Home;
