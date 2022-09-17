import React, { useEffect, useState } from "react"
import { Table } from "@nextui-org/react";

const Products =() =>{

    const [state,setState]=useState("")

    useEffect(() =>{
       return fetch("http://localhost:4000/api/product/ecommerce")
        .then(index => index.json())
        .then(data => setState(data))
    },[])
    console.log(state)
        return  (
            <Table
      
            bordered
            shadow={false}
            aria-label="Example table with dynamic content & infinity pagination"
            css={{ minWidth: "100%", height: "calc($space$14 * 10)" }}
            color="secondary"
    >
      <Table.Header>
        <Table.Column>Code</Table.Column>
        <Table.Column>Nombre</Table.Column>
        <Table.Column>Cantidad</Table.Column>
        <Table.Column>Price</Table.Column>
      </Table.Header>
      <Table.Body>
        {state.product?.map(index => (
                <Table.Row key="2">
                <Table.Cell>{index.code}</Table.Cell>
                <Table.Cell>{index.name}</Table.Cell>
                <Table.Cell>{index.stock}</Table.Cell>
                <Table.Cell>{index.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
        )
}
export default Products