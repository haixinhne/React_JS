import React from "react";
import ChildComponent from "./ChildComponent.jsx";
import AddComponent from "./AddComponent.jsx";

class HaiComponent extends React.Component {
  // Nơi viết Function
  state = {
    salaryPeople: [
      {
        id: "1",
        title: "Developers",
        salary: "3000",
      },
      {
        id: "2",
        title: "Testers",
        salary: "2000",
      },
      {
        id: "3",
        title: "Project Managers",
        salary: "4000",
      },
    ],
  };

  addNewJob = (job) => {
    console.log("Check job from parent", job);
    this.setState({
      salaryPeople: [...this.state.salaryPeople, job],
    });
  };

  deleteJob = (job) => {
    // // Cách viết 1
    // let currentJob = this.state.salaryPeople;
    // currentJob = currentJob.filter((item) => item.id !== job.id);
    // this.setState({
    //   salaryPeople: currentJob,
    // });

    // Cách viết gọn
    this.setState({
      salaryPeople: [
        ...this.state.salaryPeople.filter((item) => item.id !== job.id),
      ],
    });
  };

  render() {
    return (
      <>
        {/* Nơi viết html */}
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          salaryPeople={this.state.salaryPeople}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}
export default HaiComponent;
