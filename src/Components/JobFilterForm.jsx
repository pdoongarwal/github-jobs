import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";

export default function JobFilterForm({ onSubmit }) {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onSubmit}
      style={{
        "justify-content": "center",
      }}
    >
      <Form.Item name="company">
        <Input placeholder="Company" />
      </Form.Item>
      <Form.Item name="skill">
        <Input placeholder="Skill" />
      </Form.Item>
      <Form.Item name="location">
        <Input placeholder="Location" />
      </Form.Item>
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        )}
      </Form.Item>
    </Form>
  );
}
