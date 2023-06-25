import { useState } from "react";
import "./ItemsContainer.css";
import Item from "./Item/Item";
const ItemsContainer = () => {
   const [items, setItems] = useState([
      {
         name: "Haldi-Chandan Facepack",
         domain: "Facecare",
         rating: 4.3,
         reviews: 10,
         price: 250,
         something: 123,
      },
      {
         name: "Haldi-Chandan Facepack",
         domain: "Facecare",
         rating: 4.3,
         reviews: 10,
         price: 250,
         something: 123,
      },
      {
         name: "Haldi-Chandan Facepack",
         domain: "Facecare",
         rating: 4.3,
         reviews: 10,
         price: 250,
         something: 123,
      },
      {
         name: "Haldi-Chandan Facepack",
         domain: "Facecare",
         rating: 4.3,
         reviews: 10,
         price: 250,
         something: 123,
      },
      {
         name: "Haldi-Chandan Facepack",
         domain: "Facecare",
         rating: 4.3,
         reviews: 10,
         price: 250,
         something: 123,
      },
   ]);
   return <div className="items-container">
    {items && items.map((item, i)=>(
        <Item key={i} item={item}/>
    ))}
   </div>;
};

export default ItemsContainer;
