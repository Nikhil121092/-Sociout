import React from "react"; 
// import fs from "fs";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            name: "",
            email: "",
            contact: "",
            password: "",
            cpassword: "",
          };
    // this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({ [event.target.name]: event.target.value }); }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);


    // fs.writeFile('./myJSON.json', JSON.stringify(this.state), (err) => {
    //   if (err) console.log('Error writing file:', err);
    // })



    
  }

  render() {
    return (
      <div style={{
        display: 'block',
        margin: 'auto',
        marginTop: '3em',
        borderRadius: '2em',
        width: 500,
        padding: 30,
        border: '1px solid grey'
      }}>

      <h4>Sugn up</h4>
      <form onSubmit={this.handleSubmit}>

          <div className="form-group mt-3" >
            <label>User Name</label>
            <input
              name="name"
              type="name"
              className="form-control mt-1"
              placeholder="Enter name"
              value={this.state.value} onChange={this.handleChange}
            />
          </div>

          <div className="form-group mt-3" >
            <label>Email address</label>
            <input
              name="email" 
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={this.state.email} onChange={this.handleChange}
            />
          </div>

          <div className="form-group mt-3" >
            <label>Contact no</label>
            <input
              name="contact"
              type="number"
              className="form-control mt-1"
              placeholder="Enter Contact"
              value={this.state.contact} onChange={this.handleChange}
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={this.state.password} onChange={this.handleChange}
            />
          </div>

          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              className="form-control mt-1"
              placeholder="Enter Confirm password"
              value={this.state.cpassword} onChange={this.handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <input type="submit" value="Submit" />
          </div>
      </form>
      </div>

    );
  }
}


export default Signup;
