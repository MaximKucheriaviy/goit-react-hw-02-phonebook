import { Component } from "react";
import { ContactList } from "./ContactsList.styled"

export class ContactsList extends Component{
    render(){
        return(
            <ContactList>
            {this.props.contacts.map(item => {
              return(
                <li key={item.id}>
                  <span>{item.name}:</span> 
                  <span>{item.number}</span> 
                  <button 
                    onClick={() => {this.props.deleteContact(item.id)}}
                  >delete</button>
                </li>
              )
            })}
            </ContactList>
        )
    }
}