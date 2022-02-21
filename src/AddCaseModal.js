import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


export class AddCaseModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:18598/api/Case/Add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: 0,
                Guid: ' ',
                Parametergroup: 'All',
                Parametername: event.target.parametername.value,
                Createduser: 'sys',
                Deletetime: null,
                Modifiedtime: null,
                Isactive: true,
                Modifieduser: null,
                Vieworder: 1
            })
        })
            .then(res => res.json())
            .then((result) => {
                this.props.refresh();
            },
                (error) => {
                    alert(error);
                })
    }

    render() {
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="parametername">
                                        <Form.Label>Case Name</Form.Label>
                                        <Form.Control type="text" name="parametername" required
                                            placeholder="parametername" />
                                    </Form.Group>


                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer >
                        <Button variant="primary" type="submit">  Add Case </Button>

                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}