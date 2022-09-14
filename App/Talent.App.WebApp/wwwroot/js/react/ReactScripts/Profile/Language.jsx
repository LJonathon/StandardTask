/* Language section */
import React from 'react';
import Cookies from 'js-cookie';
import { Dropdown } from 'semantic-ui-react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

const languageLevelOptions=[
    { key: 'Basic', value: 'Basic', text:'Basic'},
    { key: 'Conversational', value: 'Conversational', text:'Conversational'},
    { key: 'Fluent', value: 'Fluent', text:'Fluent'},
    { key: 'Native/Bilingual', value: 'Native/Bilingual', text:'Native/Bilingual'},
]

export default class Language extends React.Component {
    constructor(props) {
        super(props);

        const languageData = props.languageData ?
            Object.assign({}, props.languageData)
            : {
                languageAdded: "",
                languageLevel: "",
            }

       
        this.state = {
            showAddSection: false,
            showUpdateSection: false,
            newLanguage: languageData,
        }

        this.openAdd=this.openAdd.bind(this),
        this.closeAdd=this.closeAdd.bind(this),
        this.renderAdd=this.renderAdd.bind(this),
        this.renderEdit=this.renderEdit.bind(this),
        this.openUpdate=this.openUpdate.bind(this),
        this.closeUpdate=this.closeUpdate.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }


    openAdd() {
        const languageData= Object.assign({}, this.props.language)
        this.setState({
            showAddSection: true,
            newLanguage: languageData,
        })
    }

    closeAdd() {
        this.setState({
            showAddSection: false
        })
    }

    openUpdate() {
        const languageData= Object.assign({}, this.props.language)
        this.setState({
            showUpdateSection: true,
            newLanguage: languageData,
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
                                        name="languageAdded"
                                        placeholder="Add Language"
                                        value={this.state.newLanguage.languageAdded}
                                        controlFunc={this.handleChange}
                                        maxLength={20}
                                    />
                            </div>

                            <div className='field ui six wide columns'>
                                <label></label>
                                <Dropdown
                                    placeholder="Language Level"
                                    selection                               
                                    value={this.state.newLanguage.languageLevel}
                                    options = {languageLevelOptions}
                                            // onChange={this.props.}                            
                                />
                            
                            </div>

                            <div className='field'>
                                <label></label>
                                <button type="button" className="ui teal button" onClick={this.addLanguage}>Add</button>
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
                                    name="languageAdded"
                                    placeholder="Add Language"
                                    value={this.state.newLanguage.languageAdded}
                                    controlFunc={this.handleChange}
                                    maxLength={20}
                                />
                        </div>

                        <div className='field ui six wide columns'>
                            <label></label>
                            <Dropdown
                                placeholder="Language Level"
                                selection                               
                                value={this.state.newLanguage.languageLevel}
                                options = {languageLevelOptions}
                                        // onChange={this.props.}                            
                            />
                        
                        </div>

                        <div className='field'>
                            <label></label>
                            <button type="button" className="ui basic blue button" onClick={this.addLanguage}>Update</button>
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
                            <th><b>Language</b></th>
                            <th><b>Level</b></th>
                            <th>
                                <button
                                    className = "ui right floated teal button"
                                    onClick = {this.openAdd}
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
                                <i className='ui icon pencil' onClick = {this.openUpdate}></i>
                                <i className='ui icon cancel'></i>
                            </td>
                        </tr>
                        )

                    }

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