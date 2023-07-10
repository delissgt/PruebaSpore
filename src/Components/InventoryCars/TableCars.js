import React, {useEffect, useState} from "react";
import {Table, Space, Button, Row,Col} from "antd";
import {EditOutlined, DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import {getApi} from "../../library/helpers/ApiActions";

import AddCar from "./AddCar";

const TableCars = () => {
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: 'Placas',
      dataIndex: 'license_plate',
      key: 'license_plate',
    },
    {
      title: 'Marca',
      dataIndex: 'mark',
      key: 'mark',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Modelo',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Latitud',
      dataIndex: 'location_lat',
      key: 'location_lat',
    },
    {
      title: 'Longitud',
      dataIndex: 'location_lng',
      key: 'location_lng',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          <Space size={"middle"}>
            <Button icon={<EditOutlined />} />
            <Button icon={<DeleteOutlined />} danger />
          </Space>
      )
    }
  ];

  const getAllCars = async () => {
    const url = `/cars`

    try {
      const response = await getApi(url, "")
      console.log("response", response)
      const data = response.data.data
      console.log("DATA ", data)
      setDataSource(data)
    }catch (e) {
      console.log("ERROR NOT GET USERS")
    }finally {
      console.log("OK get cars")
    }


  }

  useEffect(() => {
    getAllCars();

  }, []);


  return(
      <>
        <Row justify="end">
          <Col>
            <AddCar getAllCars={getAllCars}/>
          </Col>

        </Row>
        <Row>
          <Col span={24}>
            <Table dataSource={dataSource} columns={columns} />
          </Col>

        </Row>
      </>

  )
}

export default TableCars;