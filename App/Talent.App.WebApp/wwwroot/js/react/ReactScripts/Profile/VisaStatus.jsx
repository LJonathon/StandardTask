import React from 'react'
import { Dropdown } from 'semantic-ui-react';
import { SingleInput } from '../Form/SingleInput.jsx';

const visaTypeOptions=[
    { key: 'CZ', value: 'Citizenc', text:'Citizen'},
    { key: 'PR', value: 'Permanent Resident', text:'Permanent Resident'},
    { key: 'WV', value: 'Work Visa', text:'Work Visa'},
    { key: 'SV', value: 'Student Visa', text:'Student Visa'},
]

export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)       


    }

    render() {

        return(
            <div>
                <div>
                    <label>Visa type</label>
                </div>
                <div className='ui sixteen wide column'>
                    <Dropdown
                        placeholder="Visa"
                        selection                               
                        // value={this.state}
                        options = {visaTypeOptions}
                        // onChange={this.props.}                            
                    />
                </div>

            </div>
        )

      
    }
}