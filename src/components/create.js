import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
    const [type, setType] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [note, setNote] = useState('');
    

   
    const postData = () => {
        axios.post(`https://639a6ba2d5141501973558bd.mockapi.io/mypass`, {
            type,
            email,
            password,
            note
        })
        alert('Data saved')
    }
    
    function clear() {
        if(window.confirm('Are you sure?')){
            document.getElementById('type1').value = '';
            document.getElementById('email1').value = '';
            document.getElementById('password1').value = '';
            document.getElementById('note1').value = '';
        } 
    }

    return (
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Type</label>
                    <input placeholder='Type' id='type1' onChange={ (e) => setType(e.target.value) } />  
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' id='email1' onChange={ (e) => setEmail(e.target.value) }  />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' id='password1' onChange={ (e) => setPassword(e.target.value) }  />
                </Form.Field>
                <Form.Field>
                    <label>Note</label>
                    <input placeholder='Note' id='note1' onChange={ (e) => setNote(e.target.value) } />
                </Form.Field>
                <Button type='submit' onClick={postData} > Submit</Button>
                <Button onClick={clear}> Clear</Button>
            </Form>
        </div>
    )
} 

    
