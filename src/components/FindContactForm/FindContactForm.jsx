import { Component } from "react"
import { nanoid } from "nanoid";
import {VerticalForm} from "./FindContactForm.styled"
import PropTypes from "prop-types";

export class FindContactForm extends Component{
    nameId = nanoid();

    state = {
        name: ""
    }

    chageHendler = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
        this.props.filterChage(value);
    }

    render(){
        return(
            <VerticalForm>
                <label htmlFor={this.nameId}>Find contacts by name</label>
                <input 
                    id={this.nameId}
                    type="text" 
                    name="name"
                    value={this.state.name}
                    onChange={this.chageHendler}
                />
            </VerticalForm>
        )
    }
}


FindContactForm.propTypes = {
    filterChage: PropTypes.func
}