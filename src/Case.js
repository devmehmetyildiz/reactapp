import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddCaseModal } from './AddCaseModal';
export class Case extends Component {
    constructor(props) {
        super(props);
        this.state = { datas: [], addModalShow: false, editModalShow: false }        
    }
    refreshlist() {
        console.log("geldim");
        fetch(`${process.env.REACT_APP_API}Case/GetAll`,
            {
                method: "GET",  
                mode:'cors',          
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            })
            .then(Response => Response.json())
            .then(data => {
                this.setState({ datas: data });
                localStorage.setItem('kullanici',JSON.stringify(data));
                let itemname = localStorage.getItem('kullanıcı');
                console.log('itemname: ', itemname);
            })
            .catch(e => {
                console.log(e)
            })
        let data = this.state;
    }
    componentDidMount() {
        this.refreshlist();
        console.log("did mount oldum");
    }
    deleteDep(caseid) {
        if (window.confirm('Are you sure?')) {
            console.log(caseid);
            fetch('http://localhost:18598/api/Case/Delete?Id=' + caseid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { datas, caseid, casename } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className='container'>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Guid</th>
                            <th>Group Name</th>
                            <th>Name</th>
                            <th>Created User</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map(data =>
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.guid}</td>
                                <td>{data.parametergroup}</td>
                                <td>{data.parametername}</td>
                                <td>{data.createduser}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                caseid: data.id, casename: data.parametername
                                            })}>
                                            Edit
                                        </Button>
                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteDep(data.id)}>
                                            Delete
                                        </Button>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Case</Button>
                    <AddCaseModal refresh={this.refreshlist} show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
            </div>
        )
    }
}