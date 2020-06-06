import React, { useState } from 'react'
import './AddItems.scss'
import { Upload, message, Form, Input, Button } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload

const AddItems = () => {

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

  const SingleSelect = ({ options }) => {
    let activeClass = ''
    return options.map((optionText, index) => {
      activeClass = ''
      if (category === optionText) {
        activeClass = 'select-form__active'
      }
      return (
        <div
          className={`select-form__multiSelectOptions ${activeClass}`}
          key={index}
          onClick={(e) => setCategory(e.target.innerText)}
        >
          {optionText}
        </div>
      )
    })
  }

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const categoriesOptions = [
    'Food',
    'Medicines',
    'Cloths',
    'Electronic Items',
    'Basic Essentials',
    'Other Items',
  ]

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="add-items__container">
      <h1>Add Items To Share</h1>
      <Dragger {...uploaderProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>

      <div
        className={`add-items__multiSelectContainer $add-items__multiSelectContainer2`}
      >
        <div className={`add-items__multiselectheading`}>
          Select the Item Category
        </div>
        <SingleSelect options={categoriesOptions} />
      </div>
      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
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

      <Form.Item
        label="Description"
        name="description"
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default AddItems
