import React, { useState } from "react";
import { Button, Container, Input, Label, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import add from "./Backend";


const FormBox = () => {

    const navigate = useNavigate();
    const [err, setErr] = useState("");
    const handleSubmit = () => {
        try {
            setErr('');
            const link = document.getElementById("link-field").value; 
            const email = document.getElementById("email").value;
            const trigger = document.getElementById("trigger").value;
            
            if(
                (link.startsWith("https://www.amazon.in/") 
                || link.startsWith("amazon.in/") 
                || link.startsWith("www.amazon.in/") 
                || link.startsWith("http://www.amazon.in/"))
            )
                setErr('');
            else 
                setErr("Enter a valid link");

            add(link, email, trigger);
            navigate('/')
        } catch(error) {
            setErr(error)
        }
    }

    return (
        <Container className="py-5">
            <div className="px-5 rounded-5" id="form-box">
                <h2 className="py-2">Welcome!</h2>
                {err && <Alert color="danger">{err}</Alert>}
                <Label htmlFor="link-field" className="py-2 field-name">Link </Label>
                <Input required id="link-field" placeholder="Enter the link of the item on Amazon or Flipkart" className="field-place" autoFocus />
                <Label htmlFor="email" className="py-2 field-name">E-mail ID </Label>
                <Input required id="email" type="email" placeholder="Enter your email-id" className="field-place" />
                <Label htmlFor="trigger" className="py-2 field-name">Trigger limit </Label>
                <Input required id="trigger" type="number" placeholder="Enter the number of times you need the email trigger" className="field-place" min={"1"} />
                <Button type='submit' color="primary w-50 btn-dark mx-auto my-5 py-2" onClick={handleSubmit}>Submit</Button>
            </div>
        </Container>
    );
}


export default FormBox;