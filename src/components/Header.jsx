import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Button } from "react-bootstrap";
import {useLocation} from 'react-router-dom';

export const Header = () => {
    const [isAuth, setIsAuth] = React.useState(false);
    const {pathname} = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (window.localStorage.getItem('token')) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [pathname])

    const handleClickAuth = () => {
        if (isAuth && window.confirm('Вы действительно хотите выйти?')) {
            window.localStorage.removeItem('token');
            navigate('/home');
            setIsAuth(false)
        } else {
            navigate('/login');
        }
    }

    return (
        <div className="header">
            <Link to='/home'><h2>React - Блог</h2></Link>
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link active={pathname === '/home'} to="/home" as={Link}>Главная</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={pathname === '/about'} to="/about" as={Link}>Обо мне</Nav.Link>
                </Nav.Item>
                <Button onClick={handleClickAuth} variant={isAuth ? "danger" : 'dark'}>
                    {isAuth ? 'Выйти' : 'Войти'}
                </Button>
            </Nav>
        </div>
    );
};
