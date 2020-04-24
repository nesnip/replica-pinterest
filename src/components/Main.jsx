import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';

const Main = () => {
  const [category, setCategory] = useState('random');

  const changeCategory = (type) => {
    setCategory(type);
  };

  return (
    <>
      <Header changeCategory={changeCategory} />
      <Home category={category} />
    </>
)};

export default Main;
