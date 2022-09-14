import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Dropdown } from 'semantic-ui-react';
import { countryOptions } from '../Employer/common';
import { countries } from '../Employer/common';



export class Address extends React.Component {
    constructor(props) {
        super(props)


        const address = props.address ?
            Object.assign({}, props.address)
            : {
                number: "",
                street: "",
                suburb: "",
                country: "",
                city:"",
                postCode:"",
            }

        this.state = {
            showEditSection: true,
            newAddress: address
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }

    openEdit() {
        const address = Object.assign({}, this.props.address)
        this.setState({
            showEditSection: true,
            newAddress: address
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newAddress)
        data[event.target.name] = event.target.value
        this.setState({
            newAddress: data
        })
    }

    saveContact() {
        console.log(this.props.componentId)
        console.log(this.state.newAddress)
        const data = Object.assign({}, this.state.newAddress)
        this.props.controlFunc(this.props.componentId, data)
        this.closeEdit()
    }

    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit() {
        return (
            <div className = "ui sixteen wide column">
                <div className='three fields'>
                    <div className='field ui four wide column'>

                        <ChildSingleInput
                            inputType="text"
                            label="Number"
                            name="number"
                            value={this.state.newAddress.number}
                            controlFunc={this.handleChange}
                            maxLength={10}
                        />
                    </div>
                    <div className='field ui eight wide column'>
                        <ChildSingleInput
                            inputType="text"
                            label="Street"
                            name="street"
                            value={this.state.newAddress.street}
                            controlFunc={this.handleChange}
                            maxLength={80}
                        />

                    </div>
                    <div className='field ui four wide column'>
                        <ChildSingleInput
                            inputType="text"
                            label="Suburb"
                            name="suburb"
                            value={this.state.newAddress.suburb}
                            controlFunc={this.handleChange}
                            maxLength={80}
                        />
                    </div>
                </div>
                <div className='three fields'>
                    <div className='field ui six wide column'>
                        <label>Country</label>
                        <Dropdown 
                            placeholder='Select Country'
                            search
                            selection
                            options = {countryOptions}
                            value={this.state.newAddress.country}
                            onChange = {this.props.saveProfileData}
                            // value = {this.props.nationalityData==''?'':this.props.nationalityData}                        
                        />
                    </div>

                    <div className='field ui six wide column'>

                        <label>City</label>
                        <Dropdown 
                            placeholder='Select City'
                            search
                            selection
                            // options = {countries[this.state.newAddress.country]}
                            value={this.state.newAddress.city}
                            onChange = {this.props.saveProfileData}
                            // value = {this.props.nationalityData==''?'':this.props.nationalityData}                        
                        />


                    </div>
                    <div className='field ui four wide column'>
                        <ChildSingleInput
                            inputType="text"
                            label="Post Code"
                            name="postCode"
                            value={this.state.newAddress.postCode}
                            controlFunc={this.handleChange}
                            maxLength={12}
                />
                    </div>
                </div>



                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>
        )
    }

    renderDisplay() {

        let fullName = this.props.address ? `${this.props.address.firstName} ${this.props.address.lastName}` : ""
        let email = this.props.address ? this.props.address.email : ""
        let phone = this.props.address ? this.props.address.phone : ""

        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <p>Address: {this.state.newAddress.number}, {this.state.newAddress.street}, {this.state.newAddress.suburb},{this.state.newAddress.postCode}</p>
                        <p>City: {this.state.newAddress.city}</p>
                        <p>Country: {this.state.newAddress.country}</p>
                    </React.Fragment>
                    <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
                </div>
            </div>
        )
    }

}

export class Nationality extends React.Component {
    constructor(props) {
        super(props)

        const nationality = props.nationalityData

        this.state={
            newNationality: nationality
        }
        // console.log(this.state)
        // console.log(this.props)
   }

    



    
    render() {

        return(
            <div>
                <Dropdown 
                    placeholder='Select Your Nationality'
                    search
                    selection
                    options = {countryOptions}
                    
                    onChange = {this.props.saveProfileData}
                    // value = {this.props.nationalityData==''?'':this.props.nationalityData}
                    
                    
                
                />
            </div>



        )

        
    }
}