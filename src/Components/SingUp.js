import React from "react";
import {useState} from "react";
import {Modal, Form, Button, Input, Select} from "antd";

import {PostApi} from "../library/helpers/ApiActions";


const SingUp = () => {
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    form.validateFields()
        .then((values) => {
          createUser(values);
          form.resetFields();

        })
        .catch((info) => {
          console.log("Validate Field", info);
        });
  };

  const createUser = async (values) => {
    try {
      const data = {
        "email": values.email,
        "password": values.password,
        "rol": values.rol
      }
      const response = await PostApi(`users`, data, "")
    }catch (e) {
      console.log("Error not created user")
    } finally {
      console.log("OK created user")
    }

  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return(
      <>

        <Button type="link" onClick={showModal}>
          Create Account
        </Button>

        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
          <Form
              form={form}
              name={"form-signup"}
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
            <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Confirm password"
                  },
                  ({getFieldValue}) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("The password do not match"))
                    },
                  }),
                ]}
            >
              <Input
                  type="password"
                  placeholder="Confirm password"
              />
            </Form.Item>
            <Form.Item
                name={"rol"}
            >
              <Select>
                <Select.Option value={"2"}>Usuario</Select.Option>
                <Select.Option value={"1"}>Admin</Select.Option>
              </Select>
            </Form.Item>

          </Form>

        </Modal>

      </>

  )
}

export default SingUp;