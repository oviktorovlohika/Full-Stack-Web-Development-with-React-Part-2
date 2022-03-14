import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  addComments, 
  fetchPosts, 
  fetchComments, 
  fetchDishes, 
  fetchLeaders, 
  fetchPromos,
} from '../../redux/actions';
import { actions } from 'react-redux-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';
import Contact from '../Contact/Contact';
import Menu from '../Menu';
import HomePage from '../HomePage';
import About from '../About';
import ChosenDish from '../ChosenDish';

function Main(props) {
  const dispatch = useDispatch();
  const leaders = useSelector(state => state.leaders.fetchedLeaders);
  const dishes = useSelector(state => state.posts.fetchedPosts);
  const promotions = useSelector(state => state.promotions.fetchedPromos);

  useEffect(() => {
    dispatch(fetchLeaders());
    dispatch(fetchPosts());
    dispatch(fetchPromos());
 },[dispatch]);

 const filteredDish = dishes.filter((dish) => dish.featured)[0];
 const filteredLeader = leaders.filter((leader) => leader.featured)[0];
 const filteredPromotion = promotions.filter((promo) => promo.featured)[0];
 
  return (  
    <>
      <Header />
      <Routes>
        <Route exact path="/" element = {
          <HomePage 
                dishes={filteredDish} 
                leaders={filteredLeader}
                promotions={filteredPromotion}
                fetchLeaders={props.fetchLeaders}
            /> }/>
        <Route exact path="/menu" element={
          <Menu 
            dishes={props.dishes} 
            fetch={props.fetchPosts} 
            fetchDishes={props.fetchDishes}  
            />} />
        <Route exact path="/about" element={
          <About 
            leaders={props.leaders} 
            fetchLeaders={props.fetchLeaders}
          />}/>
        <Route exact path="/contact" element={ <Contact resetFeedbackForm={props.resetFeedbackForm} />}/>
        <Route path='/menu/:id' element={<ChosenDish fetchDishes={props.fetchDishes} /> } />
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
    fetchDishes,
    fetchComments,
    fetchLeaders,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComments,
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);