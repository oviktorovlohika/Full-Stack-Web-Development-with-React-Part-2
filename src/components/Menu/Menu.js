import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import MenuItem from './MenuItem';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions';
import LoadPosts from '../LoadPosts';

const Menu = (props) => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.app.isLoading)
  const posts = useSelector(state => state.posts.fetchedPosts)

  const menu = props.dishes.dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <MenuItem dish={dish} />
    </div>
  ))


  const loadedPosts = posts.map((post) => (
    <div key={post.id} className="col-12 col-md-5 m-1">
      <LoadPosts post={post}/>
    </div>
  ))


  if(loading) {
    return <Loader />
  }
 
  return (
   <div className="container">
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active><Link to='/menu'>Menu</Link></BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>Menu</h3>
        </div>
      </div>
      <div className="row">
        {menu}
          <button onClick={() => dispatch(fetchPosts())} className='btn btn-primary'>download</button>
          {loadedPosts}
      </div>
   </div>
  )
}

export default Menu;