import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from '../components/Navbar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function TicketPage() {
  return (
    <>
    <Navbar/>
    <h1 className="text-centered">Bug details</h1>
    <Form className='align-center max-width-large'>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Bug title" />
      </Form.Group>
 <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Component</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Status</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>

     
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="primary" type="submit">
        Cancel
      </Button>
    </Form>
    </>
  );
}

export default TicketPage;
