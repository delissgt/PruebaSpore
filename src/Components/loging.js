import React from "react";
import {Button, Form, Input, Col, Row} from 'antd';

import SingUp from "./SingUp";

import {getApi, PostApi} from "../library/helpers/ApiActions";



const Login = (props) => {

    console.log("prosps", props)

    const onFinish = (values) => {

      console.log("values", values)
      initialiceSession(values);

    }

    const initialiceSession = async (values) => {
      try {
        // const response = await getApi(`/recipes`, "")
        const response = await getApi(`user/${values.email}`, "")
        console.log("response recipes", response)
        console.log("response recipes DATA", response.data)
        // save data user login in localStorage
        localStorage.setItem("login-cars-id", response.data.id);
      }catch (e) {
        console.log("ERROR no get recipes")
      }finally {
        console.log("OK")
        // save data user login in localStorage
        // localStorage.setItem("login-cars-id", response.data.data.id);
        props.setStateAuth(true)
      }

    }

    const getUsers = async () => {
      try {
        // const response = await getApi(`/recipes`, "")
        const response = await getApi(`users`, "")
        console.log("users", response)
        console.log("response users DATA", response.data)
      }catch (e) {
        console.log("ERROR no get users")
      }finally {
        console.log("OK")
        props.setStateAuth(true)
      }

    }

    const addCar = async () => {
      try{
        const data = {
          "license_plate": "456",
          "mark": "my mark 2",
          "color": "red",
          "model": "my_model 3",
          "location_lat": "555",
          "location_lng": "777",
        }
        const response = await PostApi(`/cars`, data, "")
        console.log("response", response)
      } catch (e) {
        console.log("ERROR no created car")
      } finally {
        console.log("OK")
        console.log("RESPONSE OK")
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
          <Button onClick={addCar}>aadd car</Button>
          <Button onClick={getUsers}>all users</Button>
        </>
    )

}

export default Login