import React from 'react';
import { Table } from 'semantic-ui-react';
export default function Update() {
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
                    <Table.Row>
                        <Table.Cell>shopee</Table.Cell>
                        <Table.Cell>shopee@gmail.com</Table.Cell>
                        <Table.Cell>password123</Table.Cell>
                        <Table.Cell>test no kidding</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}