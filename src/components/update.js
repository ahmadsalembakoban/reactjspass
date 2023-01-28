import React, { useState, useEffect } from 'react';
import {  Button, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Update() {
    const [ID, setID] = useState(null);
    const [type, setType1] = useState('');
    const [email, setemail1] = useState('');
    const [password, setPass1] = useState('');
    const [note, setNote1] = useState('');  
    
    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setType1(localStorage.getItem('type'));
        setemail1(localStorage.getItem('email'));
        setPass1(localStorage.getItem('password'));
        setNote1(localStorage.getItem('note'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://639a6ba2d5141501973558bd.mockapi.io/mypass/${ID}`, {
            type,
            email,
            password,
            note
        })
    }

    return (
        <div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Type</label>
                    <input placeholder='type' value={type} onChange={(e) => setType1(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='email' value={email} onChange={(e) => setemail1(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='password' value={password} onChange={(e) => setPass1(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Note</label>
                    <input placeholder='note' value={note} onChange={(e) => setNote1(e.target.value)} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}> Update</Button>
            </Form>
        </div>
    )
    
}

