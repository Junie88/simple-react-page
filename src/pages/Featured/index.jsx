import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Label from '../../components/common/Label';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
const Items = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState('');
  const [featuredLists,setFeaturedLists] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/' + id)
    .then((data) => data.json())
    .then((data) => setItemDetail(data))
  }, []);
  
  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {itemDetail ? (
        <div className='blog-wrap'>
          <header>
            <h1>{itemDetail.title}</h1>
            <div className='blog-subCategory'>
              
                <div>
                  <Label label={itemDetail.category} />
                </div>
              
            </div>
          </header>
          <img src={itemDetail.image} alt='cover' />
          <p className='blog-desc'>{itemDetail.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Items;
