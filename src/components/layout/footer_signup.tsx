import React from "react";
import {Row, Col, Button} from 'antd';


export default function PageFooterSignUp() {
    return (
        <div style={{background: "#F2F2F2"}}>
            <Row style={{paddingBottom: "50px"}}>
                <Col
                    xxl={{span: 12, offset: 6}}
                    xl={{span: 14, offset: 5}}
                    lg={{span: 16, offset: 4}}
                    md={{span: 18, offset: 3}}
                    sm={{span: 20, offset: 2}}
                    xs={{span: 22, offset: 1}}
                >
                    <h1 className="h1-centered">
                        Be all you can be.
                        <br />
                        Join Boston Debate Academy.
                    </h1>
                    <Button
                        className="btn-signup"
                        size="large"
                        onClick={event =>  window.location.href='/classes'}
                        style={{width: "150px", height: "60px", fontSize: "16pt", borderRadius: "10px", marginBottom: "50px"}}
                    >
                        Sign up!
                    </Button>
                </Col>
            </Row>
        </div>
    );
}