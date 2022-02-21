import { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import DishdetailComponent from './DishdetailComponent';

const MenuComponent = ({initialDishes}) => {
   const [dishes, setDishes] = useState(initialDishes);
   const [selectDish, setSelectDish] = useState(null);

   const menu = dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => setSelectDish(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
  });

  return (
   <div className="container">
      <div className="row">
         {menu}
      </div>
      {<DishdetailComponent selectDish={selectDish} />}
   </div>
  )
}

export default MenuComponent;