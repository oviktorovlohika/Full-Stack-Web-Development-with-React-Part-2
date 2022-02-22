import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

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

function Main() {
  // const [dishes, setDishes] = useState(initialDishes);
  const [selectDish, setSelectDish] = useState(null);
  const [comments, setComments] = useState(COMMENTS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);
  const [dishes, setDishes] = useState(DISHES);

  const onDishSelect = (dishId) => {
    setSelectDish(dishId)
  }

  const selectedDish = dishes.filter((dish) => dish.id === selectDish)[0];
  const filteredDish = dishes.filter((dish) => dish.featured)[0];
  const filteredPromotion = promotions.filter((promo) => promo.featured)[0];
  const filteredLeader = leaders.filter((leader) => leader.featured)[0];

  return (  
    <>
      <Header />
      <Routes>
        <Route exact path="/" element = {
          <Home dish={filteredDish} promotion={filteredPromotion} leader={filteredLeader} />}/>
        <Route exact path="/menu" element={<Menu dishes={dishes} onDishSelect={onDishSelect} />}/>
        <Route exact path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;

// <Dishdetail selectedDish={selectedDish}/>
