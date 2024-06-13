import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
  // Nơi viết Function
  state = {
    showJob: false,
  };

  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleOnClickDelete = (job) => {
    console.log("handleOnClickDelete", job);
    this.props.deleteJob(job);
  };

  render() {
    let { salaryPeople } = this.props;
    let { showJob } = this.state;
    return (
      <>
        {showJob === false ? (
          <button className="action_btn" onClick={() => this.handleShowHide()}>
            Show
          </button>
        ) : (
          <>
            <div className="job-list">
              {salaryPeople.map((newValue) => {
                if (newValue.salary >= 200) {
                  return (
                    <div className="desc" key={newValue.id}>
                      {newValue.title}-{newValue.salary}$ &nbsp;{" "}
                      <span
                        className="close"
                        onClick={() => this.handleOnClickDelete(newValue)}
                      >
                        x
                      </span>
                    </div>
                  );
                }
              })}
            </div>
            <button
              className="action_btn"
              onClick={() => this.handleShowHide()}
            >
              Hide
            </button>
          </>
        )}
      </>
    );
  }
}
export default ChildComponent;
