import React from 'react';
import { Input, Label, Button, Form, FormGroup } from 'reactstrap';


class FormBlog extends React.Component{
    render(){
        console.log("ngecek props", this.props)
        return(
            <React.Fragment>
                <br></br>
                <br></br>
                <Form>
                    <FormGroup>
                        <Label>Judul: </Label>
                        <Input name="title" onChange={(event) => this.props.handleChangeForm(event)} type="text" value={this.props.form.title}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Isi: </Label>
                        <Input name="body" onChange={(event) => this.props.handleChangeForm(event)} type="textarea" value={this.props.form.body}/>
                    </FormGroup>

                    <Button onClick={() => this.props.handleButtonCreate()} color={this.props.isEdit ? "info" : "success"}>{this.props.isEdit ? "Edit" : "Submit"}</Button>
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