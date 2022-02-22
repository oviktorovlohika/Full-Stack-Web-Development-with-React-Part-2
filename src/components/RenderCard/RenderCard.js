import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({ item }) {
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