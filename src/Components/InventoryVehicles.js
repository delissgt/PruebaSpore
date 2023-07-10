import React from "react";
import TableCars from "./TableCars";
import Maps from "./Map/Map";
import { Layout, Row, Col, Button } from "antd";
import {LogoutOutlined} from "@ant-design/icons";
const {Header, Footer, Content} = Layout;

const InventoryVehicles = () => {
    return (
        <>
        <Layout>
            <Header>
                <Button icon={<LogoutOutlined />}>Logout</Button>
            </Header>
            <Content>
                <Row>
                    <Col span={12}>
                        <TableCars/>
                    </Col>
                    <Col span={12}>
                        <Maps/>
                    </Col>
                </Row>
            </Content>
            <Footer>
                footer
            </Footer>
        </Layout>
        </>
    )

}

export default InventoryVehicles;