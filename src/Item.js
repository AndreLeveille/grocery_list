import React from 'react'

const Item  = ({ id, name, complete, itemClick}) => (
  <>
  <li
    style= { complete ? {...styles.item, ...styles.complete} :styles.item}
    onClick = { () => itemClick(id)}
  >
    { name }
  </li>
  
  {/* <button onClick={() => deleteItem(item.id)}>Delete</button> */}
  </>
);
  
const styles = {
  item: { cursor: "pointer" },
  complete: {
    color: "grey",
    textDecoration: "line-through",
  },
};

export default Item;