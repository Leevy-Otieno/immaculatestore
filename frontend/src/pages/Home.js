import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      {/* Horizontal Slider Rows */}
      <HorizontalCardProduct
        category={"Mens Perfumes"}
        heading={"Mens Perfumes"}
      />
      <HorizontalCardProduct
        category={"watches"}
        heading={"Popular's Watches"}
      />

      {/* Vertical Card Grid Rows */}
      <VerticalCardProduct
        category={"unisex perfumes"}
        heading={"Unisex Perfumes"}
      />
      <VerticalCardProduct
        category={"women's fragrances"}
        heading={"Women's Fragrances"}
      />
      <VerticalCardProduct
        category={"body Sprays & mists"}
        heading={"Body Sprays & Mists"}
      />
      <VerticalCardProduct
        category={"perfume gift sets"}
        heading={"Perfume Gift Sets"}
      />
      <VerticalCardProduct
        category={"personalized & custom gifts"}
        heading={"Personalized & Custom Gifts"}
      />
      <VerticalCardProduct
        category={"for him valentines gift"}
        heading={"For Him Valentine gift"}
      />
      <VerticalCardProduct
        category={"For Her Valentine gift"}
        heading={"For Her Valentine gift"}
      />
      <VerticalCardProduct 
        category={"gift boxes"} 
        heading={"Gift boxes"} 
      />
      <VerticalCardProduct
        category={"love notes & gift cards"}
        heading={"Love notes & Giftcards"}
      />
    </div>
  );
};

export default Home;
