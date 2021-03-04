import "./styles.css";
import React from "react";

//<ListOption name="Nathan"/>
//<ListOption name="TJ"/>
//<ListOption name="Ryan"/>

class ListOption extends React.Component {
  render() {
    return (
      <div className="buttonWrapper">
        <button className="nameChoice">{this.props.name}</button>
      </div>
    );
  }
}

class LabeledText extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.name}:</label>
        <input
          type="text"
          name={this.removeSpace(this.props.name)}
          onChange={this.props.onChange}
        />
      </div>
    );
  }

  removeSpace(input){
    return input.split(" ").join("")
  }
}

const Fields = ["First Name", "Last Name", "Title", "Title Of Courtesy", "Address", "City", "Postal Code", "Country", "Home Phone", "Extension", "Notes"];

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    const people = ["Nathan", "TJ", "Ryan", "Kim"];
    //this.state.setState({ID : IDvalue });

    this.state = { people, ID : 0 ,FirstName: "", LastName: "", Title: "", TitleOfCourtesy: "", Address: "", City: "", PostalCode: "", Country: "", HomePhone: "", Extension: "", Notes: ""};

    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }



  render() {
    return (
      <div className="grid-container">
        <div className="header">
          <h1 className="header">Northwind Employees</h1>
          <h2 className="header">
            Feel free to view modify or add a new Employee!
          </h2>
        </div>
        <div className="main">
          <label>ID: </label>
          <label>{this.state.ID}</label>
          {this.props.fields.map((afield) => (
            <LabeledText name={afield} onChange={this.handleUpdate} /> ))}
        </div>
        <div className="mainBottom">
          <button className="mainButton" onClick={this.handleSave}>
            Save
          </button>
          <button className="mainButton" onClick={this.handleCancel}>Cancel</button>
        </div>
        <div className="right">
          {this.state.people.map((aname) => (
            <ListOption name={aname} />
          ))}
        </div>
      </div>
    );
  }

  //this.setState(state => ({
  //  isToggleOn: !state.isToggleOn
  //}));

  handleSave() {
    //var newList = [];
    //this.state.people.map((aname) => newList.push(aname));
    //newList.push("example");
    //this.setState((state) => ({
    //  people: newList
    //}));
    console.log(this.state.ID);
    console.log(this.state.FirstName);
    console.log(this.state.LastName);
    console.log(this.state.Title);
    console.log(this.state.TitleOfCourtesy);
    console.log(this.state.Address);
    console.log(this.state.City);
    console.log(this.state.PostalCode);
    console.log(this.state.Country);
    console.log(this.state.HomePhone);
    console.log(this.state.Extension);
    console.log(this.state.Notes);

  }

  handleCancel() {
    console.log(this.state.ID);
  }

  handleUpdate(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name);

    this.setState({
      [name]: value
    });
  }
}

export default function App() {
  return (
    <div>
      <EmployeeForm fields={Fields}/>
    </div>
  );
}
