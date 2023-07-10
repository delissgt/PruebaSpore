import React from "react";
import {Table, Space, Button, Row,Col} from "antd";
import {EditOutlined, DeleteOutlined, PlusOutlined} from "@ant-design/icons";

const TableCars = () => {

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

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
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          <Space size={"middle"}>
            <a href={"#"}>Invite {record.name}</a>
            <Button icon={<EditOutlined />} />
            <Button icon={<DeleteOutlined />} danger />
          </Space>
      )
    }
  ];


  return(
      <>
        <Row justify="end">
          <Col>
            <Button icon={<PlusOutlined />} type={"primary"}>Add Car</Button>
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