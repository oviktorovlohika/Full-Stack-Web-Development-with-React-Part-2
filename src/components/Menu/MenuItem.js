import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { baseUrl } from '../../mocks/baseUrl';

export default function MenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`} >
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  )
}