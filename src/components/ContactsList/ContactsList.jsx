import { Component } from "react";

export class ContactsList extends Component{
    render(){
        return(
            <ul>
            {this.props.contacts.map(item => {
              return(
                <li key={item.id}>
                  {item.name}:  {item.number}
                </li>
              )
            })}
            </ul>
        )
    }
}