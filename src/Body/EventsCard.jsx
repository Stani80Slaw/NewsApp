//import { useState } from "react";
import Card from "react-bootstrap/Card";
//import EventsModal from './EventsModal';
import moment from "moment";



function EventsCard({events}) {
//   const [showModal, setshowModal] = useState(false);

//   const handleClose = () => setshowModal(false);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>title
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
         Data: {moment(events.eventDate).format("DD.MM.YYYY")}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
export default EventsCard;
