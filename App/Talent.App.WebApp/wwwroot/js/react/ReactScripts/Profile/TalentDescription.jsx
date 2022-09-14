import React from 'react';
import Cookies from 'js-cookie';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export default class TalentDescription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: 0
        };
        this.update = this.update.bind(this);
    };

    update(event) {
        let data = {};
        data[event.target.name] = event.target.value;
        this.props.updateStateData(data);
        let description = event.target.value;
        this.setState({
            characters: description.length
        })
    }

    render() {
        const characterLimit = 600;
        let characters = this.props.description ? this.props.description.length : 0;
        
        return (
            <React.Fragment>
                <div className='ui sixteen wide column'>
                    <ChildSingleInput 
                        inputType = 'text'
                        name = "summary"
                        placeholder = "Please provide a short summary about yourself"
                        value={this.props.description} 
                        controlFunc = {this.handleChange}
                        maxLength = {150}
                    />
                    <p>Summary must be no more than 150 characters.</p>
                </div>

                <div className="sixteen wide column">
                    <div className="field" >
                        <textarea 
                        maxLength={characterLimit} 
                        name="Description" 
                        placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add." 
                        value={this.props.description} 
                        onChange={this.update} ></textarea>
                    </div>
                    <p>Description must be between 150-600 characters.</p>
                    <p>Characters remaining : {characters} / {characterLimit}</p>
                </div>
            </React.Fragment>
        )
    }
}
