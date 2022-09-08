import {Row, Col, Divider, Menu, Button, Drawer} from 'antd';
import React, {useState} from "react";
import {FacebookOutlined, InstagramOutlined, MenuOutlined} from "@ant-design/icons";
import {useMediaQuery} from "react-responsive";

const handleClick = (e: any) => {
    console.log('click ', e);
};

export default function PageHeader() {
    const size_xxs = useMediaQuery({query: "(max-device-width: 479px)"});
    const size_xs = useMediaQuery({query: "(min-device-width: 480px) and (max-device-width: 575px)"});
    const size_sm = useMediaQuery({query: "(min-device-width: 576px) and (max-device-width: 767px)"});
    const size_md = useMediaQuery({query: "(min-device-width: 768px) and (max-device-width: 991px)" });
    const size_lg = useMediaQuery({query: "(min-device-width: 992px) and (max-device-width: 1199px)"});
    const size_xl = useMediaQuery({query: "(min-device-width: 1200px) and (max-device-width: 1599px)"});
    const size_xxl = useMediaQuery({query: "(min-device-width: 1600px)"});

    return (
        <div>
            {size_xxs && <PageHeaderDrawer />}
            {size_xs && <PageHeaderDrawer />}
            {size_sm && <PageHeaderDrawer />}
            {size_md && <PageHeaderDrawer />}
            {size_lg && <PageHeaderDrawer />}
            {size_xl && <PageHeaderNormal />}
            {size_xxl && <PageHeaderNormal />}
        </div>
    );
}


function PageHeaderNormal() {
    return (
        <div style={{paddingTop: "25px", background: "#2b2d42"}}>
            <Row>
                <Menu onClick={handleClick} mode="horizontal" style={{minWidth: 0, flex: "auto"}}>
                    <Menu.Item>
                        <a href="/">Home</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/why-bda">Why BDA?</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/classes">Classes</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/private-coaching">Private Coaching</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/contact">Contact</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="https://www.facebook.com/BostonDebateAcademy" target="_blank" rel="noopener noreferrer">
                            <FacebookOutlined style={{fontSize: "20pt"}}/>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="https://www.instagram.com/bostondebateacademy/" target="_blank" rel="noopener noreferrer">
                            <InstagramOutlined style={{fontSize: "20pt"}}/>
                        </a>
                    </Menu.Item>
                </Menu>
            </Row>
            <Divider style={{borderColor: "#F2F2F2", borderWidth: 3}}/>
        </div>
    );
}


function PageHeaderDrawer() {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    return (
        <div style={{paddingTop: "40px", background: "#2b2d42"}}>
            <Row>
                <Col flex={3}/>
                <Col flex={1}>
                    <Button className="barsMenu" type="primary" onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                        headerStyle={{background: "#2b2d42", color: "white"}}
                        bodyStyle={{background: "#2b2d42"}}
                        drawerStyle={{background: "#2b2d42"}}
                    >
                        <Menu onClick={handleClick} mode="vertical" style={{minWidth: 0, flex: "auto"}}>
                            <Menu.Item>
                                <a href="/">Home</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/why-bda">Why BDA?</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/classes">Classes</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/private-coaching">Private Coaching</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="/contact">Contact</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="https://www.facebook.com/BostonDebateAcademy" target="_blank" rel="noopener noreferrer">
                                    <FacebookOutlined style={{fontSize: "20pt"}}/> Facebook
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href="https://www.instagram.com/bostondebateacademy/" target="_blank" rel="noopener noreferrer">
                                    <InstagramOutlined style={{fontSize: "20pt"}}/> Instragram
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Drawer>
                </Col>
            </Row>
            <Divider style={{borderColor: "#F2F2F2", borderWidth: 3}}/>
        </div>
    );
}
