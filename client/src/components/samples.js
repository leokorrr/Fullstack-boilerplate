import React, { Component } from 'react';
import './samples.css';

class Samples extends Component {
  constructor() {
    super();
    this.state = {
      samples: []
    };
  }

  componentDidMount() {
    fetch('/api/samples')
      .then(res => res.json())
      .then(samples => this.setState({samples}, () => console.log('Customers fetched...', samples)));
  }

  render() {
    return (
      <div>
        <h2>Samples</h2>
        <ul>
        {this.state.samples.map(sample => 
          <div key={sample.id}>
          <li><strong>Name: </strong>{sample.name}</li>
          <li><strong>Surname: </strong>{sample.surname}</li>
          <li><strong>Email: </strong>{sample.email}</li>
          <li><strong>Age: </strong>{sample.age}</li>
          </div>
        )}
        </ul>
      </div>
    );
  }
}

export default Samples;
