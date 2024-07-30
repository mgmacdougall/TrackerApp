import NavBar from '../components/Navbar.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { v4 as uuidv4 } from 'uuid';
function BugAdminPage({formData, handlers, results}) {
  const {title} = formData;
  console.log(results)
  const[handleTicketSearch, handleSearchFormChange]=handlers;
  return (
  <>
      <NavBar/>
       <Container fluid>
        <Row>
      <h1 className='text-centered'>User Bug Admin Page</h1>  
        <Col><p>Welcometo your bug admin dashboard.  Here you can Manage all your current bugs in one place</p></Col>
      </Row>

      <Row>
        <Col>
          <Container fluid>
          <h3>Search Bug database</h3>
              <Form className='align-center max-width-large' onSubmit={(e)=>handleTicketSearch(e)}>
                  <Form.Group className="mb-3" controlId="issueTitle">
                    <Form.Label>Bug title</Form.Label>
                    <Form.Control val={title} name="title" placeholder="Bug title" onChange={e=> handleSearchFormChange(e)}/>
                  </Form.Group>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="issueComponent">
                      <Form.Label>Component</Form.Label>
                      <Form.Select name="component" onChange={(e)=> handleSearchFormChange(e)}  defaultValue="Choose...">
                        <option value={""}>Choose...</option>
                        <option value={"loginPage"}>Login Page</option>
                        <option value={"homePage"}>Home Page</option>
                        <option value={"adminPage"}>Admin Page</option>
                        <option value={"ticketPage"}>Ticket Page</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="issueState">
                      <Form.Label>State</Form.Label>
                      <Form.Select name="state" defaultValue="Choose..." onChange={(e=>handleSearchFormChange(e))} >
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
                      <Form.Select name="owner" defaultValue="Choose..." onChange={(e=> handleSearchFormChange(e))} >
                        <option value="">Choose...</option>
                        <option value={"mmike"}>Mike</option>
                        <option value={"ted"}>Ted</option>
                        <option value={"jen"}>Jen</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </Form>
            </Container>
        </Col>
      </Row>

     
      <Row>
         {
        results.length>0 && results.map(ticket=>{
          console.log(ticket)
          return(
          <Card key={uuidv4()}>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Title</strong> {ticket.title}</ListGroup.Item>
                <ListGroup.Item><strong>Component</strong> {ticket.component}</ListGroup.Item>
                <ListGroup.Item><strong>State</strong> {ticket.state}</ListGroup.Item>
                <ListGroup.Item><strong>Owner</strong> {ticket.owner}</ListGroup.Item>
                <ListGroup.Item>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">More...</Button>
                    <Button variant="secondary">Take</Button>
                    <Button variant="secondary">Edit..</Button>
                  </ButtonGroup>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
         )

        })
      }
          
      </Row>

      
      </Container>
      </>
  )
}

export default BugAdminPage;
