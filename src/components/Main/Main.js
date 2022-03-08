import { Route, Routes, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Dishdetail from '../Dishdetail';
import Contact from '../Contact/Contact';
import Menu from '../Menu';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';
import { addComments } from '../../redux/actions';

function Main(props) {
 
  const filteredDish = props.dishes.filter((dish) => dish.featured)[0];
  const filteredPromotion = props.promotions.filter((promo) => promo.featured)[0];
  const filteredLeader = props.leaders.filter((leader) => leader.featured)[0];

  function ChosenDish() {
    const { id } = useParams();
    const dishId = props.dishes.filter((dish) => dish.id === parseInt(id))[0];
    const commentId = props.comments.filter((comment) => comment.dishId === parseInt(id));

    return (
      <Dishdetail dish={dishId} comments={commentId} />
    )
  };
  
  return (  
    <>
      <Header />
      <Routes>
        <Route exact path="/" element = {
          <Home dish={filteredDish} promotion={filteredPromotion} leader={filteredLeader} />}/>
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
    dishes: state.dishes.dishes,
    leaders: state.leaders.leaders,
    promotions: state.promotions.promotions,
    comments: state.comments
  }
}

export default connect(mapStateToProps, {addComments})(Main);