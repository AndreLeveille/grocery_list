import React from 'react';
import Item from './Item';

const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      { props.items.map ((i) => (
        <Item 
        key={i.id}
        name={i.name}
        id={i.id}
        complete={i.complete}
        itemClick={props.itemClick}
        // deleteItem={deleteItem}
        />
      ))}
    </ul>
  </div>
)

export default List;