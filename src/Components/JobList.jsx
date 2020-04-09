import React from "react";
import { List } from "antd";

import { fetchJobList } from "../Repository/JobRepository";
import JobListItem from "./JobListItem";
import JobFilterForm from "./JobFilterForm";

export default class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    this.getJobList({ description: " ", location: " " });
  }

  getJobList = (filters = {}) => {
    this.setState({ isLoading: true });
    fetchJobList(filters)
      .then((response) => {
        this.setState({ jobs: response.data });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  onSubmit = (formValues) => {
    console.log("Finish:", formValues);
    const { company, skill, location } = formValues;
    this.getJobList({
      description: `${company || ""} ${skill || ""}`,
      location: location || " ",
    });
  };

  render() {
    const { jobs, isLoading } = this.state;
    return (
      <List
        style={{ margin: "4% 8%" }}
        itemLayout="vertical"
        bordered={true}
        dataSource={jobs}
        renderItem={(job) => <JobListItem job={job} />}
        pagination={{ pageSize: 10 }}
        header={<JobFilterForm onSubmit={this.onSubmit} />}
        loading={isLoading}
      />
    );
  }
}
