import { Component } from 'react';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const contact = { name: this.state.name, number: this.state.number };
    const isAlready = this.state.contacts.some(
      contact => contact.name === this.state.name
    );

    isAlready && this.state.contacts.length > 0
      ? alert('Contact already')
      : this.addContact(contact);

    e.target.reset();
  };

  addContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChangeFilter = e => {
    console.log(e.target.value);
    this.setState({ filter: e.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onInputChange={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
        />
        <h2>Contacts</h2>
        <Filter handleChangeFilter={this.handleChangeFilter} />
        <Contacts contacts={filteredContacts} />
      </Container>
    );
  }
}

export default App;
