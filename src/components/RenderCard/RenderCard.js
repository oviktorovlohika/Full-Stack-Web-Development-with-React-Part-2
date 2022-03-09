import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loading from '../Loading';

function RenderCard({ item, isLoading, errMess }) {

   if(isLoading) {
      return (
         <Loading />
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