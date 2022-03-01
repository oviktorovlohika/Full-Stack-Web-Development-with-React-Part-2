import { Route, Routes, useParams } from 'react-router-dom';

import Dishdetail from '../Dishdetail';
import Contact from '../Contact/Contact';
import Menu from '../Menu';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';

function Main(props) {
  const store = props.store.getState();

  const filteredDish = store.dishes.filter((dish) => dish.featured)[0];
  const filteredPromotion = store.promotion.filter((promo) => promo.featured)[0];
  const filteredLeader = store.leaders.filter((leader) => leader.featured)[0];

  function ChosenDish() {
    const { id } = useParams();
    const dishId = store.dishes.filter((dish) => dish.id === parseInt(id))[0];
    const commentId = store.comments.filter((comment) => comment.id === parseInt(id))[0];

    return (
      <Dishdetail dish={dishId} comments={commentId}/>
    )
  };
  
  return (  
    <>
      <Header />
      <Routes>
        <Route exact path="/" element = {
          <Home dish={filteredDish} promotion={filteredPromotion} leader={filteredLeader} />}/>
        <Route exact path="/menu" element={<Menu dishes={store.dishes} />}/>
        <Route exact path="/about" element={<About leaders={store.leaders} />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path='/menu/:id' element={<ChosenDish /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;