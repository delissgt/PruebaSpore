import React from "react";
import {Button, Form, Input, Col, Row} from 'antd';

import SingUp from "./SingUp";

import {getApi, PostApi} from "../library/helpers/ApiActions";



const Login = (props) => {

    const onFinish = (values) => {
      initialiceSession(values);
    }

    const initialiceSession = async (values) => {
      try {
        const response = await getApi(`user/${values.email}`, "")
        localStorage.setItem("login-cars-id", response.data.id);
      }catch (e) {
        console.log("ERROR no get recipes")
      }finally {
        props.setStateAuth(true)
      }

    }


    return(
        <>
            <Row justify="center">
                <Col xs={24} sm={24} md={20} lg={20}>
                <Form
                    onFinish={onFinish}
                >
                <Form.Item
                    name="email"
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
                    name={"password"}
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


                </Form.Item>
                  <SingUp/>
            </Form>
                </Col>
            
            </Row>
        </>
    )

}

export default Login