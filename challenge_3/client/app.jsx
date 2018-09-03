class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZipcode: ''
    };

  this.handleClick = this.handleClick.bind(this); 
  this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick(prevState, props) {
    if (this.state.currentPage === 4) {
      this.setState({
        currentPage: 0
      });
    } else {
      this.setState((prevState, props) => ({
        currentPage: prevState.currentPage + 1
      }));
    }
  }

  handleInputChange(event) {
    const stateProp = event.target.name;
    this.setState({
      [stateProp]: event.target.value
    });
    console.log(this.state[stateProp]);
  }

  render() {
    let renderComponent;

    if (this.state.currentPage === 0) {
      renderComponent = <Home handleClick={this.handleClick} />;
    } else if (this.state.currentPage === 1) {
      renderComponent = <Account handleClick={this.handleClick} handleInputChange={this.handleInputChange}/>;
    } else if (this.state.currentPage === 2) {
      renderComponent = <Shipping handleClick={this.handleClick} handleInputChange={this.handleInputChange}/>;
    } else if (this.state.currentPage === 3) {
      renderComponent = <Billing handleClick={this.handleClick} handleInputChange={this.handleInputChange}/>;
    } else if (this.state.currentPage === 4) {
      renderComponent = <Summary handleClick={this.handleClick} summary={this.state}/>;
    }

    return renderComponent;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

function Home(props) {
  return (
    <div>
        <h1>Shopping Cart Checkout</h1>
        <button onClick={props.handleClick}>
          Checkout
        </button>
    </div>
  );
}

function Account(props) {
  return (
    <div>
      <h1>Create Account</h1>
      <form>
        <label> Name 
          <input 
            type="text" 
            name="name" 
            onChange={props.handleInputChange} />
        </label>
        <br />
        <label> Email 
          <input 
            type="text" 
            name="email" 
            onChange={props.handleInputChange} />
        </label>
        <br />
        <label> Password 
          <input 
            type="text" 
            name="password" 
            onChange={props.handleInputChange} />
        </label>
        <br />
        <input 
          type="button" 
          value="Next" 
          onClick={props.handleClick} />  
      </form>
    </div>
  );
}

function Shipping(props) {
  return (
    <div>
        <h1>Shipping Details</h1>
        <button >
          Next
        </button>
    </div>
  );
}

function Billing(props) {
  return (
    <div>
        <h1>Billing Details</h1>
        <button >
          Next
        </button>
    </div>
  );
}

function Summary(props) {
  return (
    <div>
        <h1>Confirmation</h1>
        <button >
          Purchase
        </button>
    </div>
  );
}






