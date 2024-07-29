import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from '../components/Navbar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function TicketPage({handlers,vals}) {
const[handleTicketSubmit,handleIssueTitle,handleIssueDescription,handleComponentSelection,handleIssueState,handleIssueSteps,handleIssueAssignee]=handlers;
const[issueTitle,issueDescription,component,issueState,issueAssignee,issueSteps]=vals;
  return (
    <>
    <Navbar/>
    <h1 className="text-centered">Bug details</h1>
    <Form className='align-center max-width-large'  onSubmit={(e)=>handleTicketSubmit(e)}>
      <Form.Group className="mb-3" controlId="issueTitle">
        <Form.Label>Bug title</Form.Label>
        <Form.Control val={issueTitle}  placeholder="Bug title" onChange={e=> handleIssueTitle(e)}/>
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="issueComponent">
          <Form.Label>Component</Form.Label>
          <Form.Select onChange={(e)=> handleComponentSelection(e)} defaultValue="Choose...">
            <option value={""}>Choose...</option>
            <option value={"loginPage"}>Login Page</option>
            <option value={"homePage"}>Home Page</option>
            <option value={"adminPage"}>Admin Page</option>
            <option value={"ticketPage"}>Ticket Page</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="issueState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(e=> handleIssueState(e))}>
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
           <Form.Select defaultValue="Choose..." onChange={(e=> handleIssueAssignee(e))}>
            <option>Choose...</option>
            <option value={"mmike"}>Mike</option>
            <option value={"ted"}>Ted</option>
            <option value={"jen"}>Jen</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <FloatingLabel controlId="issueSteps" label="Steps">
        <Form.Control
          as="textarea"
          placeholder="Steps"
          style={{ height: '100px' }}
          onChange={e=> handleIssueDescription(e)}
          value={issueDescription}
        />
      </FloatingLabel>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
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
