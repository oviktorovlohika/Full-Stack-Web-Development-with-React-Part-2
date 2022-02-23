import { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import { DISHES } from '../../mocks/dishes';
import { LEADERS } from '../../mocks/leaders';
import { PROMOTIONS } from '../../mocks/promotions';
import { COMMENTS } from '../../mocks/comments';

import Dishdetail from '../Dishdetail';
import Contact from '../Contact';
import Menu from '../Menu';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);

  const filteredDish = dishes.filter((dish) => dish.featured)[0];
  const filteredPromotion = promotions.filter((promo) => promo.featured)[0];
  const filteredLeader = leaders.filter((leader) => leader.featured)[0];

  function ChosenDish() {
    const { id } = useParams();
    const dishId = dishes.filter((dish) => dish.id === parseInt(id))[0];
    const commentId = comments.filter((comment) => comment.id === parseInt(id))[0];

    return (
      <Dishdetail dish={dishId} comments={commentId}/>
    )
  }
  
  return (  
    <>
      <Header />
      <Routes>
        <Route exact path="/" element = {
          <Home dish={filteredDish} promotion={filteredPromotion} leader={filteredLeader} />}/>
        <Route exact path="/menu" element={<Menu dishes={dishes} />}/>
        <Route exact path="/about" element={<About leaders={leaders} />}/>
        <Route exact path="/contact" element={<Contact />} />
        <Route path='/menu/:id' element={<ChosenDish /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;