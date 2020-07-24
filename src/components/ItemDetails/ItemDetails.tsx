import React, { useContext } from 'react';
import ErrorButton from '../ErrorButton';
import { useCharacterDetails } from '../hooks';
import './itemDetails.css';
import MarvelServiceContext from '../marvel-service-context/marvel-service-context';

type Props = {
  itemId: number | null;
  getData: (id: number) => Promise<any>;
  children: any;
  itemType: string;
};

const ItemDetails = ({ itemId, children }: Props) => {
  const { data, loading, error } = useCharacterDetails(itemId);
  
  if (loading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Something went wrong...</span>
  }

  if (!data) {
    return <span>Choose some item from the list</span>
  }

  return <ItemDetailsView item={data} children={children} />
}

const ItemDetailsView = ({ item, children }: any) => {
  const { name, imgSrc } = item;
  return (
    <div className='item-details'>
      <h3 className='item-details-title'>{name}</h3>
      
      <div className='item-details-body'>
        <img src={imgSrc} alt={name} width='350' height='350' />
        <ul className='list-group list-group-flush'> 
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>

      <ErrorButton />
    </div>
  )
};

const Record = ({ item, field, label}: any) => {
  return (
      <li className='list-group-item'>
        <span className='term'>{label}</span>
        <span>{item[field]}</span>
      </li>
  )
};

export { Record, ItemDetails };