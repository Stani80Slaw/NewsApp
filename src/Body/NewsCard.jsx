import Card from 'react-bootstrap/Card';
function NewsCard() {
    return (
        <Card>
            <Card.Img variant="top" src="https://picsum.photos/100/50" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
}
export default NewsCard;