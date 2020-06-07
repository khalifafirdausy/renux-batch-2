import React from 'react';
import { Input, Label, Button, Form, FormGroup } from 'reactstrap';


class FormBlog extends React.Component{
    render(){
        return(
            <React.Fragment>
                <br></br>
                <br></br>
                <Form>
                    <FormGroup>
                        <Label>Nama: </Label>
                        <Input type="text" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Isi: </Label>
                        <Input type="textarea"/>
                    </FormGroup>

                    <Button color="danger">Submit</Button>
                </Form>
            </React.Fragment>
        )
    }
}

export default FormBlog



// input
// textarea
// label
// button