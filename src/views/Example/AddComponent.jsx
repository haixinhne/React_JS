import React from "react";
import "./Demo.scss";

class AddComponent extends React.Component {
  // Function
  state = {
    title: "",
    salary: "",
  };

  handleChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("missing required params");
      return;
    }
    console.log("Check data input: ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <label className="form_title" htmlFor="job">
          Job's title:
        </label>
        <br></br>
        <input
          className="input_desc"
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitleJob(event)}
        ></input>
        <br></br>
        <label className="form_title" htmlFor="salary">
          Salary:
        </label>
        <br></br>
        <input
          className="input_desc"
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        ></input>
        <br></br>
        <input
          className="submit_btn"
          type="submit"
          value="Submit"
          onClick={(event) => this.handleSubmit(event)}
        ></input>
      </form>
    );
  }
}
export default AddComponent;
