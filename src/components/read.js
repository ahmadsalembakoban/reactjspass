import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://639a6ba2d5141501973558bd.mockapi.io/mypass`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])

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
                        </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
