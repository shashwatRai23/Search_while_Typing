import React from "react";
import "./Input.css";
import { useState } from "react";
import a1 from "./assets/a1.png";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.png";
import a4 from "./assets/a4.png";
import a5 from "./assets/a5.png";
import a6 from "./assets/a6.png";
import a7 from "./assets/a7.png";
import a8 from "./assets/a8.png";
import a9 from "./assets/a9.png";

// Initial data for items
const initialItems = [
  { name: "Shashwat", avatar: a1 },
  { name: "Shivam", avatar: a2 },
  { name: "Shivang", avatar: a3 },
  { name: "Pranjal", avatar: a4 },
  { name: "Prandt", avatar: a5 },
  { name: "Mishra", avatar: a6 },
  { name: "Mishri", avatar: a7 },
  { name: "Mishta", avatar: a8 },
  { name: "Aayush", avatar: a9 },
  { name: "Aarav", avatar: a1 },
  { name: "Aman", avatar: a2 },
  { name: "Umang", avatar: a3 },
];

const Input = () => {
  // State variables for managing items, selected chips, search term, and focus state
  const [items, setItems] = useState(initialItems);
  const [chips, setChips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [focus, setFocus] = useState(false);

  // Function to handle the selection of an item
  const handleItemClick = (item) => {
    setChips((prevChips) => [...prevChips, item]);
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  // Function to handle the removal of a selected chip
  const handleChipDelete = (chip) => {
    setChips((prevChips) => prevChips.filter((c) => c !== chip));
    setItems((prevItems) => [...prevItems, chip]);
  };

  return (
    <div className="main">
      {/* Container for displaying selected chips */}
      <div className="chip_container">
        {chips.map((chip) => (
          <div className="chip" key={chip.name}>
            <div className="avatar">
              {/* Display avatar image */}
              <img src={chip.avatar} alt="avatar" />
            </div>
            {/* Display chip name */}
            <div>{chip.name}</div>
            {/* Button to delete the chip */}
            <button onClick={() => handleChipDelete(chip)}>×</button>
          </div>
        ))}
      </div>

      {/* Input field for searching items */}
      <input
        type="text"
        onFocus={() => setFocus(true)}
        value={searchTerm}
        className="inp"
        placeholder="Type to search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Container for displaying filtered items */}
      <div className="filter_card">
        {/* Display filtered items when the input field is in focus */}
        {focus &&
          items
            .filter((item) => item.name.includes(searchTerm))
            .map((item) => (
              <div key={item.name} className="filter_item" onClick={() => handleItemClick(item)}>
                <div className="avatar">
                  {/* Display avatar image */}
                  <img src={item.avatar} alt="avatar" />
                </div>
                {/* Display item name */}
                <div>{item.name}</div>
              </div>
            ))}
        
        {/* Display a message when the input field is not in focus */}
        {!focus && (
          <div>
            .....
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
