import React from 'react';
import { Navbar, Form, FormControl, } from 'react-bootstrap';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css'
import axios from 'axios';

class homepage extends React.Component {

constructor(props) {
    super(props)
    this.state = {
      print:[],
      filtered: "",
      selectValue: "",
      filteredData: "",
    }
  }
 
  componentDidMount(){

  axios.get('https://eggheadmyapp-myapp.s3.us-east-2.amazonaws.com/data.json') 
    .then(res => {
        this.setState({ print: res.data });  
   });
  }
  handleInputChange = (event) => {
    this.setState({ filtered: event.target.value });
    console.log(this.state.filtered)
  }
  handleChange = (e) => {
    this.setState({ selectValue: e.target.value });
  }
  render() {
    const filteredData = this.state.print.filter(val => {
      if (this.state.selectValue === "Franchisce") {
        if (this.state.filtered.length) {
          const lowerCaseValue = val["Franchisce"].toLowerCase()
          return lowerCaseValue.includes(this.state.filtered.toLowerCase())
        }
      }
      else if (this.state.selectValue === "Brand") {
        if (this.state.filtered.length) {
          const lowerCaseValue = val["Brand"].toLowerCase()
          return lowerCaseValue.includes(this.state.filtered.toLowerCase())
        }
      }
      else if (this.state.selectValue === "division") {
        if (this.state.filtered.length) {
          const lowerCaseValue = val["division"].toLowerCase()
          return lowerCaseValue.includes(this.state.filtered.toLowerCase())
        }
      }
     else if (this.state.selectValue === "Forecastdata") {
        if (this.state.filtered.length) {
          const lowerCaseValue = val["Forecastdata"].toLowerCase()
          return lowerCaseValue.includes(this.state.filtered.toLowerCase())
        }                 
      }
      return true
    });
    return (
      <div className="App">
          <div>
          <Navbar bg="dark" variant="dark">
            <Form inline>
              <div className="search">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleInputChange} />
              </div>
              <select
                value={this.state.selectValue}
                onChange={this.handleChange}
              >
                <option value="Select">Select</option>
                <option value="Franchisce">Franchisce</option>
                <option value="Brand">Brand</option>
                <option value="division">Division</option>
                <option value="Forecastdata">Forecastdata</option>

              </select>
             </Form>
          </Navbar>
        </div>
        <Table responsive hover>
          <thead>
            <tr>
              <th scope="col">Franchise</th>
              <th scope="col">Brand</th>
              <th scope="col">Division</th>
              <th scope="col">Forecast</th>
              <th scope="col">P10</th>
              <th scope="col">P50</th>
              <th scope="col">P90</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user) =>
              <tr>
                <td>{user.Franchisce}</td>
                <td>{user.Brand}</td>
                <td>{user.division}</td>
                <td>{user.Forecastdata}</td>
                <td>{user.p10}</td>
                <td>{user.p50}</td>
                <td>{user.p90}</td>
              </tr>
            )}
          </tbody>
        </Table> 
        
            
      </div>
    )

  }
}

export default homepage;





