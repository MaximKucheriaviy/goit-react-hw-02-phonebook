import { Component } from "react";
import Section from "./Section/Section";
import { nanoid } from "nanoid";
import { AddNumberForm } from "./AddNumberForm/AddNumberForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { FindContactForm } from "./FindContactForm/FindContactForm";
export class App extends Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: ''
  }

  chageHendler = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value})
  }

  onSubmit = (formState) => {
    if(this.state.contacts.some(({name}) => name.toLowerCase() === formState.name.toLowerCase())){
      alert(`${formState.name} is already in contacts`);
      return;
    }
    const newContacts = [...this.state.contacts];
    const contact = {
      name: formState.name,
      number: formState.number,
      id: nanoid()
    }
    newContacts.push(contact);
    this.setState({contacts: newContacts})
  }

  chageFilter = (value) => {
    value = value.toLowerCase();
    this.setState({filter: value});
  }

  filterContacts = () => {
    if(!this.state.filter){
      return(this.state.contacts)
    }
    return this.state.contacts.filter(({name}) => {
      return(name.toLowerCase().includes(this.state.filter));
    })
  }

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(item => item.id !== id);
    this.setState({
      contacts: newContacts
    })
  }
 
  render(){
    return (
      <div>
        <Section title="Phonebook">
          <AddNumberForm onSubmit={this.onSubmit}/>
        </Section>
        <Section title="Contacts">
          <FindContactForm filterChage={this.chageFilter}/>
          <ContactsList contacts={this.filterContacts()} deleteContact={this.deleteContact}/>
        </Section>
      </div>
    );
  }
};
