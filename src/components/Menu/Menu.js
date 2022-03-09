import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import MenuItem from './MenuItem';
import Loading from '../Loading';

const Menu = ({ dishes }) => {

  const menu = dishes.dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <MenuItem  dish={dish} />
    </div>
  ))

  const errrMess = (
    <div className='container'>
       <div className='row'>{ dishes.errMess }</div>
    </div>  
  )

 console.log('isLoading', dishes.isLoading)
 console.log('errMess', dishes.errMess)


  if(dishes.isLoading) {
    return (
       <Loading />
    );
 } else if(dishes.errMess) {
    return (
      errrMess
    )
 }
 else
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
      </div>
   </div>
  )
}

export default Menu;