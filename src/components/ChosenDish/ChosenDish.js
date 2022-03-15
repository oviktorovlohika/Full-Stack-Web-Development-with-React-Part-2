import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions';
import Dishdetail from '../Dishdetail';


function ChosenDish(props) {
   const dispatch = useDispatch();
  const dishes = useSelector(state => state.posts.fetchedPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  },[dispatch]);
  
   const { id } = useParams();
   const dishId = dishes.filter((dish) => dish.id === parseInt(id))[0];

   return (
      <Dishdetail dish={dishId} comments={props.comments} />
   )
}

export default ChosenDish;