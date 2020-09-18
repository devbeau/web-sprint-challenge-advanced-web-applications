import React, { useState, useEffect } from "react";
import {fetchColors} from '../fetchColors';


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../axiosWithAuth';
const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  function fetchColors() {
    axiosWithAuth().get('api/colors')
        .then(res => setColorList(res.data))
        .catch(err => console.log('fetchColors', err))
  }

  useEffect(() => {
    fetchColors()
  }, [])
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
