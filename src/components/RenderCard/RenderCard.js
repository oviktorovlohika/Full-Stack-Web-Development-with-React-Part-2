import { useSelector } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loader from '../Loader';
import { baseUrl } from '../../mocks/baseUrl';


function RenderCard({ item }) {  
   const loading = useSelector(state => state.app.isLoading);
   
  if(loading) {
    return <Loader />
   }
   
   return (
      <Card>
         <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
         <CardBody>
            <CardTitle>{item.name}</CardTitle>
               {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
         </CardBody>
      </Card>
   )
}

export default RenderCard;