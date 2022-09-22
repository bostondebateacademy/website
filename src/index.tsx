import React from 'react';
import { createRoot } from "react-dom/client";
import {Divider, Layout} from 'antd';

import PageFooter from "./components/layout/footer";
import PageHeader from "./components/layout/header";
import Routing from "./components/router/router";

import 'antd/dist/antd.min.css';
import './css/index.css';
import logo_header from './images/logo_bda.webp'
import PageFooterSignUp from "./components/layout/footer_signup";
import PageFooterCopyright from "./components/layout/footer_copyright";

const {Header, Footer, Content} = Layout;
const root = createRoot(document.getElementById("root")!);


root.render(
    <Layout style={{background: "#F2F2F2"}}>
        <Header className='header'>
            <img src={logo_header} className={'header-logo'} alt="Logo"/>
            <PageHeader />
        </Header>
        <Content className="content">
            <Routing/>
        </Content>
        <Divider style={{background: "#F2F2F2", borderColor: "#2B2D42", borderWidth: 3, marginBottom: "50px"}} />
        <Footer className="footer-signup">
            <PageFooterSignUp />
        </Footer>
        <Footer className="footer">
            <PageFooter/>
        </Footer>
        <Footer className="footer">
            <PageFooterCopyright />
        </Footer>
    </Layout>
);
