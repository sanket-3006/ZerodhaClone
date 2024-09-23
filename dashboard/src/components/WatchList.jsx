import React from "react";

import { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { watchlist } from "../data/data"


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} /> 
        })}
      </ul>
    </div>
  );
};

export default WatchList;



// This is created for to show each stock name,arrow,value,profit&loss percent in watchlist
const WatchListItem =({ stock }) => {
  const [showWatchlistAction, setshowWatchlistAction] = useState(false);

  let handleMouseEnter = (e) => {
    setshowWatchlistAction(true)
  }

  let handleMouserLeave = (e) => {
    setshowWatchlistAction(false)
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouserLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDownIcon className="down" />) : (<KeyboardArrowUpIcon className="up" />)}
          <span className="price">{stock.price}</span>
        </div>
      </div>

{/* this is checkin condition and showing hover effect */}
  {showWatchlistAction && <WatchListAction uid={stock.name}/>}

    </li>
  )
}


// this is indicate the hover effect and differnt buttons afert hover on indivisual watchlist item.
const WatchListAction = ({uid}) =>{
  return(
    <span className="actions">
      <span>
        <Tooltip
        title = "Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip
        title = "Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
        title = "Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
        >
          <button className="action"><BarChartIcon className="icon"/></button>
        </Tooltip>

        <Tooltip
        title = "More"
        placement="top"
        arrow
        TransitionComponent={Grow}
        >
         <button className="action"><MoreHorizIcon className="icon"/></button>
        </Tooltip>
      </span>
    </span>
  )
}