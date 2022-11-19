import React from "react";
import {Link} from 'react-router-dom';
import {  Row, Col, Card } from "react-bootstrap";


export const posts = [
    {
        id: 1,
        imageUrl:
            "https://pclegko.ru/wp-content/uploads/2020/11/5753173610332160-1024x576.png",
        title: "React - Хуки",
        text: "Хуки — нововведение в React 16.8, которое позволяет использовать состояние и другие возможности React без написания классов. Хуки решают множество, казалось бы, несвязанных между собой, проблем в React, с которыми мы сталкивались в течение пяти лет написания и поддержки десятков тысяч компонентов.",
    },
    {
        id: 2,
        imageUrl:
            "https://cdn.educba.com/academy/wp-content/uploads/2019/12/React-JS-component-1.png",
        title: "Components",
        text: "Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности. Их можно складывать вместе и использовать несколько раз.Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране.",
    },
    {
        id: 3,
        imageUrl:
            "https://cdn.hashnode.com/res/hashnode/image/upload/v1649654338675/ne8M7eNqO.png",
        title: "VirtualDOM",
        text: "Виртуальный DOM (VDOM) — это концепция программирования, в которой идеальное или «виртуальное» представление пользовательского интерфейса хранится в памяти и синхронизируется с «настоящим» DOM при помощи библиотеки, такой как ReactDOM. Этот процесс называется согласованием.",
    },
    {
        id: 4,
        imageUrl:
            "https://i.ytimg.com/vi/RfHw3oQRbgg/mqdefault.jpg",
        title: "Условный рендеринг",
        text: "React позволяет разделить логику на независимые компоненты. Эти компоненты можно показывать или прятать в зависимости от текущего состояния. Условный рендеринг в React работает так же, как условные выражения работают в JavaScript.",
    },
];

export const Home = () => {
    return (
        <Row xs={1} md={2} className="g-4">
            {posts.map((obj) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={obj.imageUrl} />
                        <Card.Body>
                            <Card.Title><Link to={`/post/${obj.id}`}>{obj.title}</Link></Card.Title>
                            <Card.Text>{obj.text.substring(0, 100)}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};
