import React from "react";
import { Navbar, Container } from "react-bootstrap";

export const Footer = () => {
    return (
        <>
            <Navbar className="footer">
                <Container>
                    <Navbar.Brand href="#home" className="footer__title">
                        <b>React - Блог 2022</b>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="footer__text">
                            <a href="https://github.com/SuleymYovloy" >Suleym Evloev / Frontend Developer</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
