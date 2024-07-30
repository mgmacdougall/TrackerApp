import {model, Schema} from 'mongoose';

const ticketSchema = new Schema({
  title: String,
  component: String,
  state: String,
  owner: String,
  steps: String
});

const TicketModel = model('Ticket', ticketSchema);
export default TicketModel;
