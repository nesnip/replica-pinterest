import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import Header from './components/Header';
import Home from './components/Home';
import unsplash from './controller/getImages';

const Routes = ({ category, data, setData }) => {
  /* const [data, setData] = useState([]);
  const [category, setCategory] = useState('random');
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const changeCategory = (type) => {
    setCategory(type);
  };

  const searchImages = (query) => unsplash.search.photos(query, 3, 20)
    .then(toJson).then((res) => {
      console.log(res.results);
      return setData(res.results);
    });

  const clickThis = () => {
    unsplash.photos.listPhotos(1, 10, 'popular')
      .then(toJson)
      .then((res) => console.log(res));
    unsplash.photos.listPhotos(2, 10, 'popular')
      .then(toJson)
      .then((res) => console.log(res));
    unsplash.photos.listPhotos(3, 10, 'popular')
      .then(toJson)
      .then((res) => console.log(res));
  }; */

  return (
    <BrowserRouter>
      {/* <Header
        changeCategory={changeCategory}
        searchImages={searchImages}
        handleSearch={handleSearch}
        search={search}
        clickThis={clickThis}
      /> */}
      <Switch>
        <Route exact path="/">
          <Home
            category={category}
            data={data}
            setData={setData}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
