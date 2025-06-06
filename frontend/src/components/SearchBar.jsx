import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
      setSearch("");
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center ">
      <div className=" w-5/12 inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-4 rounded-full">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search_icon} alt="search_icon" className="w-4" />
      </div>
      <img
        onClick={() => setShowSearch(false) & setSearch("")}
        src={assets.cross_icon}
        alt="cross_icon"
        className="inline w-3 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
