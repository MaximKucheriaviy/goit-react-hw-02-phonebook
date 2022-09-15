import { Component } from "react"

export class FindContactForm extends Component{
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
            <form>
                <label>
                    Find contacts by name
                    <input 
                        type="text" 
                        name="name"
                        value={this.state.name}
                        onChange={this.chageHendler}
                    />
                </label>
            </form>
        )
    }
}