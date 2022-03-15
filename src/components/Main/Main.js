import { Route, Routes, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  addComments, 
  fetchPosts, 
  fetchComments, 
  fetchDishes, 
  fetchLeaders, 
  fetchPromos,
  postFeedback
} from '../../redux/actions';
import { actions } from 'react-redux-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CSSTransition, SwitchTransition} from "react-transition-group";

import Header from '../Header';
import Footer from '../Footer';
import Contact from '../Contact/Contact';
import Menu from '../Menu';
import HomePage from '../HomePage';
import About from '../About';
import ChosenDish from '../ChosenDish';

function Main(props) {
  const location = useLocation()
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
        <SwitchTransition>
        <CSSTransition classNames="page" timeout={300} key={location.key}>
          <Routes location={location}>
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
            <About leaders={props.leaders} fetchLeaders={props.fetchLeaders}/>}/>
            <Route exact path="/contact" element={ <Contact resetFeedbackForm={props.resetFeedbackForm} postFeedback={props.postFeedback}/>}/>
            <Route path='/menu/:id' element={<ChosenDish fetchDishes={props.fetchDishes} /> } />
          </Routes>
        </CSSTransition>
        </SwitchTransition>
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
    feedback: state.feedback,
    fetchPosts,
    fetchDishes,
    fetchComments,
    fetchLeaders,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComments,
  postFeedback,
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);