import React from "react";
import {Row, Col} from 'antd';


export default function PageFooterCopyright() {
    return (
        <div>
            <Row justify="center">
                <Col>
                    <p style={{color: "white"}}>
                        &copy; {new Date().getFullYear()} Copyright: {"Boston Debate Academy"}
                    </p>
                </Col>
            </Row>
        </div>
    );
}