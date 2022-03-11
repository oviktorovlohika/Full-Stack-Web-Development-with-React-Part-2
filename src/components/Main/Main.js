import { Route, Routes, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComments, fetchPosts } from '../../redux/actions';
import { actions } from 'react-redux-form';

import Header from '../Header';
import Footer from '../Footer';
import Dishdetail from '../Dishdetail';
import Contact from '../Contact/Contact';
import Menu from '../Menu';
import Home from '../Home';
import About from '../About';

function Main(props) {
  const filteredDish = props.dishes.dishes.filter((dish) => dish.featured)[0];
  const filteredPromotion = props.promotions.filter((promo) => promo.featured)[0];
  const filteredLeader = props.leaders.filter((leader) => leader.featured)[0];

  console.log(props.resetFeedbackForm)
  function ChosenDish() {
    const { id } = useParams();
    const dishId = props.dishes.dishes.filter((dish)=> dish.id === parseInt(id))[0];

    return (
      <Dishdetail dish={dishId} />
    )
  };

  return (  
    <>
      <Header />
      <Routes>
        <Route exact path="/" element = {
          <Home dish={filteredDish} promotion={filteredPromotion} leader={props.leaders} /> }/>
        <Route exact path="/menu" element={<Menu dishes={props.dishes} fetch={props.fetchPosts} />}/>
        <Route exact path="/about" element={<About leaders={props.leaders} />}/>
        <Route exact path="/contact" element={ <Contact resetFeedbackForm={props.resetFeedbackForm} />}/>

        {/* <Route exact path="/contact" element={() => <Contact resetFeedbackForm={props.resetFeedbackForm} />}/> */}
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
    comments: state.comments,
    fetchPosts,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComments,
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);