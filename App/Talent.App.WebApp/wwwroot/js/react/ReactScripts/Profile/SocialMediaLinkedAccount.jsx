/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);

        const linkedAccounts = props.linkedAccounts ? 
            Object.assign({},props.linkedAccounts)
            : {
                linkedIn : "",
                github: ""
            }

        this.state={
            showEditSection: false,
            // newLinkedAccounts: linkedAccounts,
            // linkedAccounts: linkedAccounts,
            profileData :{
                linkedAccounts: linkedAccounts,
            }

        }


        this.openEdit=this.openEdit.bind(this)
        this.closeEdit=this.closeEdit.bind(this)
        this.renderEdit=this.renderEdit.bind(this)
        this.renderDisplay=this.renderDisplay.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveLinkedAccount = this.saveLinkedAccount.bind(this)

    }

    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }

    openEdit() {
        const linkedAccounts = Object.assign({}, this.props.linkedAccounts)
        console.log(linkedAccounts)
        this.setState({
            showEditSection: true,
            // newLinkedAccounts: linkedAccounts,
            // linkedAccounts: linkedAccounts,
            profileData:{
                linkedAccounts: linkedAccounts,
            }
        })

        console.log(this.props.linkedAccounts);
        console.log(this.props);
        console.log(this.props.updateProfileData);
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
        // const data = Object.assign({}, this.state.newLinkedAccounts)
        // const data = Object.assign({}, this.state.linkedAccounts);
        const data = Object.assign({}, this.state.profileData.linkedAccounts);
        data[event.target.name] = event.target.value;
        console.log(event.target.name);
        console.log(event.target.value);
        console.log(event);
        console.log(event.target);
        console.log(data);
        this.setState({
            // newLinkedAccounts: data
           // linkedAccounts: data
           profileData:{
            linkedAccounts: data,
        }

        })
        this.props.updateProfileData(this.state.profileData)

        console.log(this.state)
        console.log(this.props)

    }s

    // update(event) {
    //     let data = {};
    //     data[event.target.name] = event.target.value == "true" ? true : false;
    //     this.props.updateStateData(data);
    // }

    saveLinkedAccount() {
        // const data = Object.assign({}, this.state.newLinkedAccounts)
        // const data = Object.assign({}, this.state.linkedAccounts)
        const data = Object.assign({},this.state.profileData)
        // console.log(this.state.newLinkedAccounts)
        console.log(data)
        this.props.saveProfileData(data)
        // this.props.saveProfileData(this.state.profileData)
        this.closeEdit()
    }


    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderDisplay() {

        return(
            <div>
                <button
                    className = "ui left floated blue button">
                    <i className='linkedin icon' /> Linkedin
                </button>

                <button
                    className = "ui left floated black button">
                    <i className='github icon' /> Github
                </button>

                <button
                    className = "ui right floated teal button"
                    onClick={this.openEdit}>
                    Edit
                </button>
            </div>

        )

    }

    renderEdit() {
        return (
            <div className='ui sixteen wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="LinkedIn"
                    name="linkedIn"
                    // value = {this.state.newLinkedAccounts.linkedIn}
                    // value = {this.state.linkedAccounts.linkedIn}
                    value = {this.state.profileData.linkedAccounts.linkedIn}
                    controlFunc={this.handleChange}
                    maxLength={500}
                    placeholder="Enter your LinkedIn Url"
                    errorMessage="Please enter a valid LinkedIn Url"
                />
                <ChildSingleInput
                    inputType="text"
                    label="Github"
                    name="github"
                    // value={this.state.newLinkedAccounts.github}
                    // value={this.state.linkedAccounts.github}
                    value = {this.state.profileData.linkedAccounts.github}
                    controlFunc={this.handleChange}
                    maxLength={500}
                    placeholder="Enter your GitHub Url"
                    errorMessage="Please enter a valid GitHub Url"
                />

                <button type="button" className="ui teal button" onClick={this.saveLinkedAccount}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>
        )
    }   

}