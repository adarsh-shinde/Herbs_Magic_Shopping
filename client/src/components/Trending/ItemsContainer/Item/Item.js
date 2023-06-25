import './Item.css'
const Item = ({ item }) => {
   return <div className="item">
    <div className="item-img">
        <img src="" />
    </div>
    <div className="item-name">{item.name}</div>
    <div className="item-domain">{item.domain}</div>
    <div className="item-rating-and-reviews">
        <div className="item-rating">{item.rating}</div>
        <div className="item-something">({item.something}+)</div>
        <div className="item-reviews">{item.reviews} Reviews</div>
    </div>
    <div className="item-price-and-addToCartbtn">
        <div className="item-price">&#8377; {item.price}</div>
        <button className="add-to-cart-btn">ADD TO CART</button>
    </div>
   </div>;
};

export default Item;
