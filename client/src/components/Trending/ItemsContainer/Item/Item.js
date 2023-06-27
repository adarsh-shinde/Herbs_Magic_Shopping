import "./Item.css";
const Item = ({ item }) => {
   return (
      <div className="item">
         <div className="item-img">
            <img src="" />
         </div>
         <div className="item-name">{item.name}</div>
         <div className="item-domain">{item.domain}</div>
         <div className="item-rating-and-reviews">
            
            <div className="item-rating"><img src="starIcon.png" alt="" />{item.rating}</div>
            <div className="item-something">({item.something}+)  ·</div>
            <div className="item-reviews">{item.reviews} Reviews</div>
         </div>
         <div className="item-price-and-addToCartbtn">
            <div className="item-price">&#8377; {item.price}</div>
            <button className="add-to-cart-btn">ADD TO CART</button>
         </div>
         <button className="add-to-wishlist-btn">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={2}
               stroke="currentColor"
               className="w-6 h-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
               />
            </svg>
         </button>
         <div className="bestseller">Bestseller</div>
      </div>
   );
};

export default Item;
