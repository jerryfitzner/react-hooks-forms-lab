import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    id: '',
    name: "",
    category: "Produce"
  });

  const submitFunc = (e) => {
    e.preventDefault();
    console.log(newItem);
    onItemFormSubmit(newItem);
  }

  const submitFun = (e) => {
    setNewItem({
      ...newItem,
      id: uuid(),
      [e.target.name]: e.target.value
    })
  }

  
  return (
    <form className="NewItem" onSubmit={ submitFunc }>
      <label>
        Name:
        <input type="text" name="name" onChange={submitFun} />
      </label>

      <label>
        Category:
        <select name="category" onChange={submitFun}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
