import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";


const schema = yup.object().shape({
	username: yup.string().required("Most enter valid username"),
	password: yup
        .string()
		.required()
		.min(8, "Password most be longer than 8")
});

 export default function LoginForm(props){
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit() {

    }
    return(
        <Form onsubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" placeholder="Enter your username" ref={register}/>
                {errors.username && <p>please enter a valid username</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" placeholder="Enter your password" ref={register}/>
                {errors.password && <p>please enter a valid password</p>}
            </Form.Group>
            <Button type="submit">Login</Button>
        </Form>
        )
}
