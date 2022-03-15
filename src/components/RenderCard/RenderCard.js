import { useSelector } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Loader from '../Loader';
import { baseUrl } from '../../mocks/baseUrl';
import { FadeTransform } from 'react-animation-components';


function RenderCard({ item }) {  
   const loading = useSelector(state => state.app.isLoading);
   
  if(loading) {
    return <Loader />
   }
   
   return (
      <FadeTransform
      in
      transformProps={{
         exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
          <CardText>{item.description}</CardText>
          </CardBody>
      </Card>
   </FadeTransform>
   )
}

export default RenderCard;