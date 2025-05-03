import React, { useState } from "react";
import "./home.css";
import Header from "../../components/Header/header";
import ExploreMenu from "../../components/ExploreMenu/exploremenu";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";

const home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
    </div>
  );
};

export default home;
