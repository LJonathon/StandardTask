import React from 'react'
import { Form, Checkbox, Radio } from 'semantic-ui-react';
import { SingleInput } from '../Form/SingleInput.jsx';

export default class TalentStatus extends React.Component {
    constructor(props) {
        super(props);

       
    }
    
    render() {

        return(
            <div>
                <Form>
                    <Form.Field>
                        <b>Current Status</b>
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label = 'Actively looking for a job' 
                            name = 'jobStatus'
                            value = 'Actively looking for a job'
                            // checked = {this.state.value === 'Actively looking for a job'}    
                            onChange = {this.handleChange}                    
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label = 'Not looking for a job at the moment' 
                            name = 'jobStatus'
                            value = 'Not looking for a job at the moment'
                            // checked = {this.state.value === 'Not looking for a job at the moment'}    
                            onChange = {this.handleChange}                    
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label = 'Currently employed but open to offers' 
                            name = 'jobStatus'
                            value = 'Currently employed but open to offers'
                            // checked = {this.state.value === 'Currently employed but open to offers'}    
                            onChange = {this.handleChange}                    
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label = 'Will be available on later date' 
                            name = 'jobStatus'
                            value = 'Will be available on later date'
                            // checked = {this.state.value === 'Will be available on later date'}    
                            onChange = {this.handleChange}                    
                        />
                    </Form.Field>

                </Form>
                {/* <p><b>Current Status</b></p>
                <div className='grouped fields'>
                    <div className='field'>
                        <div className='ui radio checkbox'>
                            <input type = 'radio' name = 'jobStatus' tabindex='0' className='hidden'/>
                                <label>Actively looking for a job</label>

                        </div>
                    </div>
                    <div className='field'>
                        <div className='ui radio checkbox'>
                            <input type = 'radio' name = 'jobStatus' tabindex='0' className='hidden'/>
                                <label>Not looking for a job at the moment</label>

                        </div>
                    </div>
                    <div className='field'>
                        <div className='ui radio checkbox'>
                            <input type = 'radio' name = 'jobStatus' tabindex='0' className='hidden'/>
                                <label>Currently employed but open to offers</label>

                        </div>
                    </div>
                    <div className='field'>
                        <div className='ui radio checkbox'>
                            <input type = 'radio' name = 'jobStatus' tabindex='0' className='hidden'/>
                                <label>Will be available on later date</label>

                        </div>
                    </div>


                </div> */}
            </div>
        )
        
    }
}