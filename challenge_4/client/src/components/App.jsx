import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }



  render() {
    return (
      <table>
        <tbody>
          {
            this.props.rows.map((row) => {
              <tr>
                <Piece />
              </tr>
            })
          };
        </tbody>
      </table>
    );
  }
}


class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <td></td>
    );
  }
}



export default App;