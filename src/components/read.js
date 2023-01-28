import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://639a6ba2d5141501973558bd.mockapi.io/mypass`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])

    const setData = (data) => {
        // console.log(data)
        let {ID, type, email, password, note} = data;
        localStorage.setItem('ID', ID);
        localStorage.setItem('type', type);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('note', note);
    }

    return (
        <div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Note</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.type}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.password}</Table.Cell>
                                <Table.Cell>{data.note}</Table.Cell>
                                <Link to='/update'>
                                <Table.Cell><Button onClick={() => setData(data)}> Update</Button></Table.Cell>
                                </Link>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
