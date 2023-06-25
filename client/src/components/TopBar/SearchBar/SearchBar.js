// import { setCurrentItems } from "../../Features/CurrentItems/CurrentItemSlice";
// import { useEffect, useState } from "react";
import "./SearchBar.css";
// import { useDispatch, useSelector } from "react-redux";
// import { filterCurrentItems } from "../../Features/CurrentItems/CurrentItemSlice";

const SearchBar = () => {
   // const { items } = useSelector((state) => state.items);
   // const dispatch = useDispatch();
   // useEffect(() => {
   //    if (items.length > 0) {
   //       dispatch(setCurrentItems(items));
   //    }
   // }, [dispatch, items]);
   // const [query, setQuery] = useState("");
   
   
   // if(items.length >0){
   //    const newItems = items.filter((i) =>
   //    ( i.productName.toLowerCase().replaceAll(/\s/g, "").includes((query.replaceAll(/\s/g, "")))) || (i.productType.name.toLowerCase().replaceAll(/\s/g, "").includes((query.replaceAll(/\s/g, "")))) || (i.productDomain.name.toLowerCase().replaceAll(/\s/g, "").includes((query.replaceAll(/\s/g, ""))))
   //    );
   //    dispatch(filterCurrentItems(newItems));
   // }

   return (
      <div className="search-bar-div">
         <input
            type="text"
            className="search-bar"
            placeholder="Search product id or name..."
            // value={query}
            // onChange={(e) => setQuery(e.target.value)}
         />
         <button className="search-btn">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
               />
            </svg>
         </button>
      </div>
   );
};

export default SearchBar;
