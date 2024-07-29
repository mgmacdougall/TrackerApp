import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function LogInForm({
  emailHandler,
  passwordHandler,
  handleSubmit,
  uName,
  uPass
}) {
  return (
    <div>
      <Form className="centered" onSubmit={e => handleSubmit(e)}>
        <h2>Log In</h2>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={uName}
            type="email"
            placeholder="Enter email"
            onChange={e => emailHandler(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={uPass}
            type="password"
            placeholder="Password"
            onChange={e => passwordHandler(e)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default LogInForm;
