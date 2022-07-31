import React from "react";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const FormBox = () => {
    return (
        <Container className="py-5">
            <Form className="px-5 rounded-5" id="form-box" >
                <h2 className="py-4">Welcome!</h2>
                <FormGroup>
                    <Label htmlFor="link-field" className="py-2 field-name">Link </Label>
                    <Input id="link-field" placeholder="Enter the link of the item on Amazon or Flipkart" className="field-place" />
                    <Label htmlFor="email" className="py-2 field-name">E-mail ID </Label>
                    <Input id="email" type="email" placeholder="Enter your email-id" className="field-place" />
                    <Button type='submit' color="primary w-50 btn-dark mx-auto my-5 py-2">Submit</Button>
                </FormGroup>
            </Form>
        </Container>
    );
}


export default FormBox;