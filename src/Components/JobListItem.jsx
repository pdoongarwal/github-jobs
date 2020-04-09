import React from "react";
import { Descriptions, List, Avatar } from "antd";

export default function JobListItem({ job }) {
  return (
    <List.Item>
      <List.Item.Meta avatar={<Avatar src={job.company_logo} size="large" />} />
      <Descriptions title={job.title}>
        <Descriptions.Item label="Type">{job.type}</Descriptions.Item>
        <Descriptions.Item label="Company">{job.company}</Descriptions.Item>
        <Descriptions.Item label="Location">{job.location}</Descriptions.Item>
        <Descriptions.Item span={2}>
          <a href={job.url} target="_blank" rel="noopener noreferrer">
            Check Description
          </a>
        </Descriptions.Item>
        <Descriptions.Item label="Posted On">
          {job.created_at}
        </Descriptions.Item>
      </Descriptions>
    </List.Item>
  );
}
