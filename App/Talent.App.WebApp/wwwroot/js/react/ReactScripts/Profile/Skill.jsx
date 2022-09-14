/* Skill section */
import React from 'react';
import Cookies from 'js-cookie';
import { Dropdown } from 'semantic-ui-react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

const skillLevelOptions=[
    { key: 'Beginner', value: 'Beginner', text:'Beginner'},
    { key: 'Intermediate', value: 'Intermediate', text:'Intermediate'},
    { key: 'Expert', value: 'Expert', text:'Expert'},
]

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        const skill = props.skill ?
            Object.assign({}, props.skill)
            : {
                skillAdded: "",
                skillLevel: "",
            }

       
            this.state = {
                showAddSection: false,
                showUpdateSection: false,
                newSkill: skill,
            }
    
            this.openAdd=this.openAdd.bind(this),
            this.closeAdd=this.closeAdd.bind(this),
            this.renderAdd=this.renderAdd.bind(this),
            this.renderEdit=this.renderEdit.bind(this),
            this.openUpdate=this.openUpdate.bind(this),
            this.closeUpdate=this.closeUpdate.bind(this)
    

    }

    openAdd() {
        const skill= Object.assign({}, this.props.skill)
        this.setState({
            showAddSection: true,
            newSkill: skill,
        })
    }

    closeAdd() {
        this.setState({
            showAddSection: false
        })
    }

    openUpdate() {
        const skill= Object.assign({}, this.props.language)
        this.setState({
            showUpdateSection: true,
            newSkill: skill,
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
                            <div className='field ui six wide columns'>
                                <label></label>
                                    <ChildSingleInput
                                        inputType="text"
                                        name="skillAdded"
                                        placeholder="Add Skill"
                                        value={this.state.newSkill.skillAdded}
                                        controlFunc={this.handleChange}
                                        maxLength={20}
                                    />
                            </div>

                            <div className='field ui six wide columns'>
                                <label></label>
                                <Dropdown
                                    placeholder="Skill Level"
                                    selection                               
                                    value={this.state.newSkill.skillLevel}
                                    options = {skillLevelOptions}
                                            // onChange={this.props.}                            
                                />
                            
                            </div>

                            <div className='field'>
                                <label></label>
                                <button type="button" className="ui teal button" onClick={this.addSkill}>Add</button>
                                <button type="button" className="ui button" onClick={this.closeAdd}>Cancel</button>
                            </div>
                        </div>
                    </div>

                </div>



        )
    }

    renderEdit(){

        return(

            <div>

                <div className='ui sixteen wide column'>
                    <div className='two fields'>
                        <div className='field ui six wide columns'>
                            <label></label>
                                <ChildSingleInput
                                    inputType="text"
                                    name="skillAdded"
                                    placeholder="Add Skill"
                                    value={this.state.newSkill.skillAdded}
                                    controlFunc={this.handleChange}
                                    maxLength={20}
                                />
                        </div>

                        <div className='field ui six wide columns'>
                            <label></label>
                            <Dropdown
                                placeholder="Skill Level"
                                selection                               
                                value={this.state.newSkill.skillLevel}
                                options = {skillLevelOptions}
                                        // onChange={this.props.}                            
                            />
                        
                        </div>

                        <div className='field'>
                            <label></label>
                            <button type="button" className="ui basic blue button" onClick={this.addSkill}>Update</button>
                            <button type="button" className="ui basic red button" onClick={this.closeUpdate}>Cancel</button>
                        </div>
                    </div>
                </div>

            </div>

        )

    }

    renderDisplay(){
        
        return(

            <div className='ui sixteen wide column'>
                <table className = 'ui table'>
                    <thead>
                        <tr>
                            <th><b>Skill</b></th>
                            <th><b>Level</b></th>
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
                {this.renderDisplay()}
            </div>)
            :this.renderDisplay()
        )
    }
}