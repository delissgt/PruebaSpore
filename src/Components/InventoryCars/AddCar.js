import React from "react";
import {useState} from "react";
import {Modal, Form, Button, Input} from "antd";
import {CarOutlined} from "@ant-design/icons";

import {PostApi} from "../../library/helpers/ApiActions";

const AddCar = ({getAllCars}) => {
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    form.validateFields()
        .then((values) => {
          console.log("VALUES FORM CREATE CAR", values)
          createCar(values);
          form.resetFields();

        })
        .catch((info) => {
          console.log("Validate Field", info);
        });
  };

  const createCar = async (values) => {
    try {
      const data = values
      data['owner'] = localStorage.getItem("login-cars-id")
      console.log("data create car", data)
      const response = await PostApi(`cars`, data, "")
      console.log("RESPONSE CREATE CAR", response)
    }catch (e) {
      console.log("Error not created CAR")
    } finally {
      console.log("OK created CAR")
      getAllCars()
    }

  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return(
      <>
        <Button icon={<CarOutlined/>} type="primary"  onClick={showModal}>
          Add Car
        </Button>
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
          <Form
              form={form}
              name="form-create-car"
          >
            <Form.Item
                name="license_plate"
            >
              <Input placeholder="No. placas"/>
            </Form.Item>
            <Form.Item
                name="mark"
            >
              <Input placeholder="marca"/>
            </Form.Item>
            <Form.Item name="color">
              <Input placeholder="color"/>
            </Form.Item>
            <Form.Item name="model">
              <Input placeholder="modelo"/>
            </Form.Item>
            <Form.Item name="location_lat">
              <Input placeholder="latitud" />
            </Form.Item>
            <Form.Item name="location_lng">
              <Input name="longitud" />
            </Form.Item>

          </Form>
        </Modal>
      </>
  )

}

export default AddCar;