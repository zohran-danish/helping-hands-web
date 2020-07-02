import React, { useState } from 'react'
import './AddItems.scss'
import { Upload, message, Form, Input, Button, Select, Row, Col } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import SelectForm from '../../common-components/SelectForm/SelectForm'
import { DatePicker, TimePicker } from 'antd'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const { Dragger } = Upload
const { Option } = Select

const API_KEY = 'AIzaSyAMQ5JKsPU21EqmYljJb0xKm37kJ-0rVB4'

const AddItems = (props) => {
  const [category, setCategory] = useState()

  const uploaderProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  const mapStyles = {
    width: '100%',
    height: '100%',
  }

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  }
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
        defaultValue="+91"
      >
        <Option value="+91">+91</Option>
      </Select>
    </Form.Item>
  )

  const categoriesOptions = [
    'Food',
    'Medicines',
    'Cloths',
    'Electronic Items',
    'Basic Essentials',
    'Other Items',
  ]

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="add-items__container">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1 className="add-items__heading">Add Items To Share</h1>
        <Dragger {...uploaderProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload Images of the Item
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
        <SelectForm
          options={categoriesOptions}
          value={category}
          setValue={setCategory}
          label="Select Item Category"
        />
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input item name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '35%',
            }}
          />
        </Form.Item>

        <Form.Item label="Available Date " name="availableDateRange">
          <DatePicker.RangePicker
            style={{
              width: '35%',
            }}
          />
        </Form.Item>

        <Form.Item label="Pick Up Time" name="pickUpTime">
          <TimePicker.RangePicker
            format={'HH:mm'}
            style={{
              width: '35%',
            }}
          />
        </Form.Item>

        <Form.Item label="Address" name="address">
          <Input.TextArea />
        </Form.Item>

        {/* <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        /> */}

        <Form.Item {...tailLayout}>
          <Row>
            <Col offset={6}>
              <Button type="primary" htmlType="submit">
                Add Item
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  )
}

export default GoogleApiWrapper({ apiKey: API_KEY })(AddItems)
