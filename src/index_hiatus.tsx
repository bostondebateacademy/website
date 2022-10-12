import React from 'react';
import { createRoot } from "react-dom/client";
import {Layout, Row, Col} from 'antd';

import 'antd/dist/antd.min.css';
import './css/index.css';
import shh from "./images/shh.png"

const {Content} = Layout;
const root = createRoot(document.getElementById("root")!);

root.render(
    <Layout style={{background: "#F2F2F2"}}>
        <Content className="content">
            <Hiatus />
        </Content>
    </Layout>
);

function Hiatus() {
    return (
        <div>
            <Row align="middle">
                <Col
                    xxl={{span: 12, offset: 6}}
                    xl={{span: 12, offset: 6}}
                    lg={{span: 12, offset: 6}}
                    md={{span: 12, offset: 6}}
                    sm={{span: 12, offset: 6}}
                    xs={{span: 12, offset: 6}}
                >
                    <Row justify="space-around">
                        <img src={shh} style={{width: "20%", objectFit: "cover"}} alt=""/>
                    </Row>
                    <Row justify="space-around">
                        <h1 style={{color: "#FFD151", fontSize: "32pt", marginLeft: "-30px"}}>Shh! We're taking a nap.</h1>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}