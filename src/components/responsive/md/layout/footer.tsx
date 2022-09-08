import {Row, Col, Divider} from 'antd';
import {MailOutlined, FacebookOutlined, InstagramOutlined} from '@ant-design/icons';
import logo from "../../../../images/logo_bda.png";
import React from "react";
import '../styles.css'


export default function PageFooterLG() {
    return (
        <div>
            <Row>
                <Col span={24}>
                    <h1 className="h1-footer">
                        Still have any questions? Give us a call when it's most convenient for you: 765-427-3199
                    </h1>
                </Col>
                <Divider style={{borderColor: "white", borderWidth: 3}}/>
            </Row>
            <Row>
                <Col span={24}>
                    <img src={logo} className={'footer-logo-md'} alt="Logo"/>
                </Col>
            </Row>
            <Row>
                <Col
                    md={{span: 9, offset: 4}}
                    sm={{span: 9, offset: 4}}
                >
                    <h4 className="h4-footer">Boston Debate Academy</h4>
                    <p>
                        <a className="a-footer" href="/">Home</a>
                    </p>
                    <p>
                        <a className="a-footer" href="/why-bda">Why BDA?</a>
                    </p>
                    <p>
                        <a className="a-footer" href="/classes">Classes</a>
                    </p>
                    <p>
                        <a className="a-footer" href="/private-coaching">Private Coaching</a>
                    </p>
                </Col>
                <Col
                    md={{span: 9, offset: 0}}
                    sm={{span: 9, offset: 0}}
                >
                    <h4 className="h4-footer">Contact</h4>
                    <p>
                        <FacebookOutlined style={{color: "white", paddingRight: "10px"}}/>
                        <a className="a-footer" href="https://www.facebook.com/BostonDebateAcademy">
                            Facebook
                        </a>
                    </p>
                    <p>
                        <InstagramOutlined style={{color: "white", paddingRight: "10px"}}/>
                        <a className="a-footer" href="https://www.instagram.com/bostondebateacademy/">
                            Instagram
                        </a>
                    </p>
                    <p className="p-footer">
                        <MailOutlined style={{paddingRight: "10px"}}/>info@bostondebateacademy.com
                    </p>
                </Col>
            </Row>
        </div>
    );
}