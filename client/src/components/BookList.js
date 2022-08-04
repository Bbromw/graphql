import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const BookList = () => {
  return (
    <Row>
      <Col xs={4}>
        <CardColumns>
          <Card border='info' text='info' >
            <Card.Body>

            </Card.Body>
          </Card>
        </CardColumns>
      </Col>
    </Row>
  )
}

export default BookList
