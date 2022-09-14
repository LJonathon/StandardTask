/* Experience section */
import React from 'react';
import Cookies from 'js-cookie';
import { Dropdown } from 'semantic-ui-react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

const experienceLevelOptions=[
    { key: 'Beginner', value: 'Beginner', text:'Beginner'},
    { key: 'Intermediate', value: 'Intermediate', text:'Intermediate'},
    { key: 'Expert', value: 'Expert', text:'Expert'},
]

export default class Experience extends React.Component {
    constructor(props) {
        super(props);

        const experience = props.experience ?
            Object.assign({}, props.experience)
            : {
                company: "",
                position: "",
                responsibilities:"",
                start:"",
                end:"",
            }

       
            this.state = {
                showAddSection: false,
                showUpdateSection: false,
                newExperience: experience,
            }
    
            this.openAdd=this.openAdd.bind(this),
            this.closeAdd=this.closeAdd.bind(this),
            this.renderAdd=this.renderAdd.bind(this),
            this.renderEdit=this.renderEdit.bind(this),
            this.openUpdate=this.openUpdate.bind(this),
            this.closeUpdate=this.closeUpdate.bind(this)
    

    }

    openAdd() {
        const experience= Object.assign({}, this.props.experience)
        this.setState({
            showAddSection: true,
            newExperience: experience,
        })
    }

    closeAdd() {
        this.setState({
            showAddSection: false
        })
    }

    openUpdate() {
        const experience= Object.assign({}, this.props.language)
        this.setState({
            showUpdateSection: true,
            newExperience: experience,
        })
    }

    closeUpdate() {
        this.setState({
            showUpdateSection: false
        })
    }




    renderAdd() {


        return(

                <div>
                    <div className='ui sixteen wide column'>
                        <div className='two fields'>
                            <div className='field ui eight wide columns'>
                                <label>Company:</label>
                                    <ChildSingleInput
                                        inputType="text"
                                        name="company"
                                        placeholder="Company"
                                        value={this.state.newExperience.company}
                                        controlFunc={this.handleChange}
                                        maxLength={50}
                                    />
                            </div>

                            <div className='field ui eight wide columns'>
                                <label>Position:</label>
                                    <ChildSingleInput
                                            inputType="text"
                                            name="position"
                                            placeholder="Position"
                                            value={this.state.newExperience.position}
                                            controlFunc={this.handleChange}
                                            maxLength={50}
                                        />
                            </div>
                        </div>
                    </div>
                                       
                    <div className='ui sixteen wide column'>
                        <div className='two fields'>
                            <div className='field ui eight wide columns'>
                                <label>Start Date:</label>
                                    <ChildSingleInput
                                        inputType="date"
                                        name="startDate"
                                        placeholder="Select Start Date"
                                        value={this.state.newExperience.startDate}
                                        controlFunc={this.handleChange}
                                        maxLength={50}
                                    />
                            </div>

                            <div className='field ui eight wide columns'>
                                <label>End Date:</label>
                                    <ChildSingleInput
                                        inputType="date"
                                        name="endDate"
                                        placeholder="Select End Date"
                                        value={this.state.newExperience.endDate}
                                        controlFunc={this.handleChange}
                                        maxLength={50}
                                    />
                            </div>
                        </div>
                    </div>

                    <div className='field ui sixteen wide columns'>
                        <label>Responsibilities:</label>
                            <ChildSingleInput
                                inputType="text"
                                name="responsibilities"
                                placeholder="Responsibilites"
                                value={this.state.newExperience.responsibilities}
                                controlFunc={this.handleChange}
                                maxLength={500}
                            />
                    </div>

                    <button type="button" className="ui teal button" onClick={this.addExperience}>Add</button>
                    <button type="button" className="ui button" onClick={this.closeAdd}>Cancel</button>
                </div>



        )
    }

    renderEdit(){

        return(

            <div>
                <div className='ui sixteen wide column'>
                    <div className='two fields'>
                        <div className='field ui eight wide columns'>
                            <label>Company:</label>
                                <ChildSingleInput
                                    inputType="text"
                                    name="company"
                                    placeholder="Company"
                                    value={this.state.newExperience.company}
                                    controlFunc={this.handleChange}
                                    maxLength={50}
                                />
                        </div>

                        <div className='field ui eight wide columns'>
                            <label>Position:</label>
                                <ChildSingleInput
                                        inputType="text"
                                        name="position"
                                        placeholder="Position"
                                        value={this.state.newExperience.position}
                                        controlFunc={this.handleChange}
                                        maxLength={50}
                                    />
                        </div>
                    </div>
                </div>
                                
                <div className='ui sixteen wide column'>
                    <div className='two fields'>
                        <div className='field ui eight wide columns'>
                            <label>Start Date:</label>
                                <ChildSingleInput
                                    inputType="date"
                                    name="startDate"
                                    placeholder="Select Start Date"
                                    value={this.state.newExperience.startDate}
                                    controlFunc={this.handleChange}
                                    maxLength={50}
                                />
                        </div>

                        <div className='field ui eight wide columns'>
                            <label>End Date:</label>
                                <ChildSingleInput
                                    inputType="date"
                                    name="endDate"
                                    placeholder="Select End Date"
                                    value={this.state.newExperience.endDate}
                                    controlFunc={this.handleChange}
                                    maxLength={50}
                                />
                        </div>
                    </div>
                </div>

                <div className='field ui sixteen wide columns'>
                    <label>Responsibilities:</label>
                        <ChildSingleInput
                            inputType="text"
                            name="responsibilities"
                            placeholder="Responsibilites"
                            value={this.state.newExperience.responsibilities}
                            controlFunc={this.handleChange}
                            maxLength={500}
                        />
                </div>

                <button type="button" className="ui basic blue button" onClick={this.addExperience}>Update</button>
                <button type="button" className="ui basic red button" onClick={this.closeUpdate}>Cancel</button>
            </div>


    
        )

    }

    renderDisplay(){
        
        return(

            <div className='ui sixteen wide column'>
                <table className = 'ui table'>
                    <thead>
                        <tr>
                            <th><b>Company</b></th>
                            <th><b>Position</b></th>
                            <th><b>Responsibilities</b></th>
                            <th><b>Start</b></th>
                            <th><b>End</b></th>
                            <th>
                                <button
                                    className = "ui right floated teal button"
                                    onClick={this.openAdd}
                                    >
                                    <i className='ui icon plus'/>
                                    Add New
                                </button>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.showUpdateSection?(<tr>{this.renderEdit()}</tr>):
                        ( 
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='right aligned'>
                                <i className='ui icon pencil' onClick={this.openUpdate}></i>
                                <i className='ui icon cancel'></i>
                            </td>
                        </tr>
                        )}

                    </tbody>

                </table>
            </div> 
        )   
    }

    render(){

        return(
            this.state.showAddSection?
            (<div className='ui sixteen wide column'>
                {this.renderAdd()}
                <br></br>
                {this.renderDisplay()}
            </div>)
            :this.renderDisplay()
        )
    }
}