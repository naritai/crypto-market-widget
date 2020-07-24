import React from 'react';
import './itemList.css';

type Props = {
  data: any[];
  onItemClick: (id: number) => void;
  children: any;
};

const ItemList = ({ children, data, onItemClick }: Props) => {
  const handleClick = (id: number) => {
    onItemClick(id);
  };

  const renderItems = (arr: any) => {
    return arr.map((item: any) => {
      return (
        <div 
          className='show-list-item' 
          key={item.id} 
          onClick={() => handleClick(item.id)}
        >
          <h3>{children(item)}</h3>
        </div>
      )
    })
  }

  return (
    <div className='show-list-container'>
      {renderItems(data)}
    </div>
  )
};

export default ItemList;