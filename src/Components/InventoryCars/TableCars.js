import React, {useEffect, useState} from "react";
import {Table, Space, Button, Row,Col, Popconfirm, message} from "antd";
import {EditOutlined, DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import {getApi, DeleteApi} from "../../library/helpers/ApiActions";

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
            <Popconfirm
                title={"Borrar"}
                description={"Esta seguro de borrar este registro?"}
                onConfirm={()=> confirm(record)}
                onCancel={cancel}
                okText={"Yes"}
                cancelText={"No"}
            >
              <Button icon={<DeleteOutlined/>} danger />
            </Popconfirm>

          </Space>
      )
    }
  ];

  const confirm = async (record) => {
    try {
      const response = await DeleteApi(`cars/${record.id}/delete`)
    }catch (e) {
      message.error("Error no se puede eliminar el registro")
    } finally {
      message.success("Registro borrado");
      getAllCars();
    }

  }

  const cancel = (e) => {
    console.log(" cancel e", e)
    message.error("NO");
  }

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