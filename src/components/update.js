import React, { useState } from 'react';
import {  Button, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Update() {
    const [type, setType1] = useState('');
    const [email, setemail1] = useState('');
    const [password, setPass1] = useState('');
    const [note, setNote1] = useState('');
    

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
                <Button type='submit'> Update</Button>
            </Form>
        </div>
    )
    
}

