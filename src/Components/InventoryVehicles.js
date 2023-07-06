import React from "react";
import TableCars from "./TableCars";
import Maps from "./Map/Map";
import { Layout, Space, Row, Col } from "antd";
const {Header, Footer, Content} = Layout;

const InventoryVehicles = () => {
    return (
        <>
        <Layout>
            <Header>
                header
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