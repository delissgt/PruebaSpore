import React from "react";
import TableCars from "./InventoryCars/TableCars";
import Maps from "./Map/Map";
import { Layout, Row, Col, Button } from "antd";
import {LogoutOutlined} from "@ant-design/icons";
const {Header, Footer, Content} = Layout;

const InventoryVehicles = ({setStateAuth}) => {

    const logOut = () => {
        localStorage.removeItem("login-cars-id")
        setStateAuth(false)
    }


    return (
        <>
        <Layout>
            <Header>
                <Button icon={<LogoutOutlined />} onClick={logOut}>Logout</Button>
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