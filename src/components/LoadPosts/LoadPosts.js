import { Card, CardImgOverlay, CardTitle } from 'reactstrap';

export default function LoadPosts({ post }) {
  return (
    <Card>
        <CardImgOverlay>
          <CardTitle>{post.title}</CardTitle>
        </CardImgOverlay>
    </Card>
  )
}