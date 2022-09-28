import React from 'react';
import { Link } from 'react-router-dom';
import Label from '../../../common/Label';
import './styles.css';
import { BsStarFill } from "react-icons/bs";

const ItemList = ({
  blog: {
    description,
    title,
    category,
    id,
    image,
    price,
    rating
  },
}) => {
  return (
    <div className='item-wrap'>
      <img className='item-cover' src={image} alt='cover' />
      <Label label={category} />
      <h3>{title}</h3>
      <p className='item-desc'>{description}</p>
      <footer>
        <div className='item-detail'>
          <div>
            <h6>${price}</h6>
            <p> <BsStarFill/>{rating.rate}</p>
          </div>
        </div>
        <Link className='item-link' to={`/item/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default ItemList;
