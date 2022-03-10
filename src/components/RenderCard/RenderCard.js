import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loader from '../Loader';

function RenderCard({ item, isLoading, errMess }) {

   if(isLoading) {
      return (
         <Loader />
      );
   } else if(errMess) {
      return (
         <h4>{errMess}</h4>
      )
   }
   else
      return (
      <Card>
         <CardImg width="100%" src={item.image} alt={item.name} />
         <CardBody>
            <CardTitle>{item.name}</CardTitle>
               {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
         </CardBody>
      </Card>
   )
}

export default RenderCard;