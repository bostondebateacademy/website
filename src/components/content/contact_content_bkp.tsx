import {Col, Row, Button, Form, Input, InputNumber} from "antd";
import React, {useState} from "react";


export default function ContactContent() {

    const [submitted, setSubmitted] = useState(false)

    const onFinish = (values: any) => {
        console.log('Success:', values);
        setSubmitted(true)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const { TextArea } = Input;

    return (
        <div style={{background: "#F2F2F2"}}>
            <Row style={{paddingTop: "100px", paddingBottom: "10px"}}>
                <Col span={24} offset={0}>
                    <h1 className="h1-centered">Ask us anything!</h1>
                    {submitted && <div style={{background: "#FFD151", textAlign: "center", height: "50px", width: "30%", marginLeft: "35%", color: "#2b2d42"}}>
                        <p style={{fontSize: "14pt", textAlign: "center", paddingTop: "10px"}}>
                            Thanks! We'll get back to you right away!
                        </p>
                    </div>}
                </Col>
            </Row>
            <Row>
                <Col span={18} offset={3}>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 18 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Parent's Full Name"
                            name="parentname"
                            rules={[{ required: true, message: "Please enter your parent's first name!" }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Students's Full Name"
                            name="studentname"
                            rules={[{ required: true}]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="E-Mail"
                            name="email"
                            rules={[{ required: true, message: 'Please enter your e-mail address!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[{ required: false}]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Student's Grade"
                            name="grade"
                            rules={[{ required: false}]}
                        >
                            <InputNumber min={1} max={12}/>
                        </Form.Item>

                        <Form.Item
                            label="Your Message"
                            name="message"
                            rules={[{ required: true}]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item wrapperCol={{span: 4, offset: 10}}>
                            <Button
                                className="btn-signup"
                                size="large"
                                htmlType="submit"
                                style={{width: "100%", minWidth: "120px", height: "60px", borderRadius: "10px"}}
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

