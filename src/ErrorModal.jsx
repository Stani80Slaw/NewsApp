import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { setErrorMessage } from "./services/stateServise";
import {  useSelector } from "react-redux";

function ErrorModal() {
  const errorMessage = useSelector((state)=> state.errorMessage);
  const handleClose = () => setErrorMessage(null);
  return (
    <Modal show={!!errorMessage} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{errorMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
