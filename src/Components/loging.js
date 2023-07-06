import React from "react";
import {Button, Form, Input, Col, Row} from 'antd';


const Login = (props) => {

    console.log("prosps", props)

    const onFinish = (values) => {
        console.log("values", values)
        props.setStateAuth(true)
    }

    return(
        <>
            <Row justify="space-around" align={"middle"} style={{ paddingTop:"10%" }}>
                <Col span={12} offset={6}>
                <Form
                    onFinish={onFinish}
                >
                <Form.Item
                    name="user-email"
                    rules={[
                        {
                            required: true,
                            message: 'Input your email'
                        },
                        {
                            type: 'email',
                            message: 'Please enter a validate email!'
                          }
                    ]}
                >
                    <Input placeholder="email" />
                </Form.Item>
                <Form.Item
                    name={"user-password"}
                    rules={[
                        {
                            required: true,
                            message: 'Input your password'
                        }
                    ]}
                >
                    <Input
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                    <br/>
                    <a href="">create account now</a>
                </Form.Item>
            </Form>
                </Col>
            
            </Row>
        </>
    )

}

export default Login