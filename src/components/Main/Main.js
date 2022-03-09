import { Route, Routes, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Dishdetail from '../Dishdetail';
import Contact from '../Contact/Contact';
import Menu from '../Menu';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';
import { addComments, fetchDishes } from '../../redux/actions';
import { useEffect } from 'react';

function Main(props) {
  const filteredDish = props.dishes.dishes.filter((dish) => dish.featured)[0];
  const filteredPromotion = props.promotions.filter((promo) => promo.featured)[0];
  const filteredLeader = props.leaders.filter((leader) => leader.featured)[0];

  function ChosenDish() {
    const { id } = useParams();
    const dishId = props.dishes.dishes.filter((dish) => dish.id === parseInt(id))[0];

    return (
      <Dishdetail dish={dishId} isLoading={props.dishes.isLoading} isErrMess={props.dishes.errMess} />
    )
  };

  useEffect(() => {
    props.fetchDishes()
  })

  return (  
    <>
      <Header />
      <Routes>
        <Route exact path="/" element = {
          <Home 
            dish={filteredDish} 
            promotion={filteredPromotion} 
            leader={filteredLeader} 
            dishesLoading={props.dishes.isLoading}
            dishesErrMess={props.dishes.errMess} 
          /> }/>
        <Route exact path="/menu" element={<Menu dishes={props.dishes} />}/>
        <Route exact path="/about" element={<About leaders={props.leaders} />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path='/menu/:id' element={<ChosenDish /> } />
      </Routes>
      <Footer />
    </>
  );
}

function mapStateToProps(state) {
  return {
    dishes: state.dishes,
    leaders: state.leaders.leaders,
    promotions: state.promotions.promotions,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComments,
  fetchDishes: () => {dispatch(fetchDishes)}
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);