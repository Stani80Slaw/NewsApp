import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import { defaultData } from "../services/apiServise";

function SideBar() {
  const [show, setShow] = useState(false);
  const [submitedData, setSubmitedData] = useState(defaultData);
  
  const handleResrore = ()=> setSubmitedData(defaultData);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow} className="my-2">
        Search
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search...</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SearchForm
            closeSideBar={handleClose}
            submitedData={submitedData}
            setSubmitedData={setSubmitedData}
            handleResrore={handleResrore}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
