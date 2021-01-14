import { Alert, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./components.css";
const pointer = {
  cursor: "pointer",
};

const Item = ({ id, work, deleteActivity }) => {
  const deleteWork = (e) => {
    const { id } = e.target;
    deleteActivity(id);
  };
  return (
    <Alert key={id} variant={"secondary"}>
      <Row className="justify-content-between">
        <Col md={10} >
          <input type="checkbox"  className="items-chkbox"/> {work}
        </Col>
        <Col md={2}>
          <p style={pointer} id={id} onClick={deleteWork}><FontAwesomeIcon icon={faTrash} size="2x" pull="right" className="items-p"/>
          </p>
        </Col>
      </Row>
    </Alert>
  );
};

export default Item;