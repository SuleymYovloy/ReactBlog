import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const [fields, setFields] = React.useState({
        email: '',
        password: ''
    });


    const onSubmit = async (event) => {
        event.preventDefault();

        const resp = await fetch(`https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`);

        if (resp.ok) {
            const {token} = await resp.json();

            window.localStorage.setItem('token', token);
            
            navigate('/profile');
        } else {
            alert('bcbvcbc');
        }
    }

    const handleChangeInput = (event) => {
        setFields({
            ...fields,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Form onSubmit={onSubmit} className='login-form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Адрес электронной почты</Form.Label>
                <Form.Control onChange={handleChangeInput} name="email" type="email" value={fields.email}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control onChange={handleChangeInput} name="password" type="password" value={fields.password} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Войти
            </Button>
        </Form>
    );
};
