import {model, Schema} from 'mongoose';

const ticketSchema = new Schema({
  title: String
});

const TicketModel = model('Ticket', ticketSchema);
export default TicketModel;
