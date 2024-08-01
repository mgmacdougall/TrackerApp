import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from '../components/Navbar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function TicketPage({data, handlers}) {
const[handleEditFormChange,handleEditFormSubmit]=handlers;

  return (
    <>
    <Navbar/>
    <h1 className="text-centered">Bug details</h1>

        <Form className='align-center max-width-large' name={data._id} onSubmit={(e)=>handleEditFormSubmit(e)}>
      <Form.Group className="mb-3" controlId="issueTitle">
        <Form.Label>Edit Bug</Form.Label>
        <Form.Control val={data.title} name="title" placeholder={data.title} onChange={e=> handleEditFormChange(e)}/>
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="issueComponent">
          <Form.Label>Component</Form.Label>
          <Form.Select name="component" onChange={(e)=> handleEditFormChange(e)}  defaultValue="Choose...">
            <option value={""}>Choose...</option>
            <option value={"loginPage"}>Login Page</option>
            <option value={"homePage"}>Home Page</option>
            <option value={"adminPage"}>Admin Page</option>
            <option value={"ticketPage"}>Ticket Page</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="issueState">
          <Form.Label>State</Form.Label>
          <Form.Select name="state" defaultValue="Choose..." onChange={(e=> handleEditFormChange(e))} >
            <option>Choose...</option>
            <option value={"new"}>New</option>
            <option value={"active"}>Active</option>
            <option value={"fixed"}>Fixed</option>
            <option value={"tested"}>Tested</option>
            <option value={"closed"}>Closed</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="issueAssignee">
          <Form.Label>Owner</Form.Label>
           <Form.Select name="owner" defaultValue="Choose..." onChange={(e=> handleEditFormChange(e))} >
            <option value="">Choose...</option>
            <option value={"mmike"}>Mike</option>
            <option value={"ted"}>Ted</option>
            <option value={"jen"}>Jen</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <FloatingLabel controlId="issueSteps" label="Steps">
        <Form.Control
          as="textarea"
          placeholder={data.steps}
          style={{ height: '100px' }}
          onChange={e=> handleEditFormChange(e)}
          value={data.steps}
          name="steps"
        />
      </FloatingLabel>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
      {/* <Button variant="primary" type="submit">
        Cancel
      </Button> */}
    </Form>
    </>
  );
}

export default TicketPage;
