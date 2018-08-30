class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      account: false,
      shipping: false,
      billing: false,
      summary: false
    };

    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleCreateAccountClick = this.handleCreateAccountClick.bind(this);
    this.handleShippingClick = this.handleShippingClick.bind(this);
    this.handleBillingClick = this.handleBillingClick.bind(this);
    this.handlePurchaseClick = this.handlePurchaseClick.bind(this);
  }

  handleCheckoutClick() {
    this.setState({
      home: false,
      account: true
    });
  }

  handleCreateAccountClick() {
    this.setState({
      account: false,
      shipping: true
    });
  }

  handleShippingClick() {
    this.setState({
      shipping: false,
      billing: true
    });
  }

  handleBillingClick() {
    this.setState({
      billing: false,
      summary: true
    });
  }

  handlePurchaseClick() {
    this.setState({
      summary: false,
      home: true
    });
  }

  render() {
    let renderComponent;

    if (this.state.home) {
      renderComponent = <Home handleCheckoutClick={this.handleCheckoutClick} />;
    } else if (this.state.account) {
      renderComponent = <Account handleCreateAccountClick={this.handleCreateAccountClick} />;
    } else if (this.state.shipping) {
      renderComponent = <Shipping handleShippingClick={this.handleShippingClick} />;
    } else if (this.state.billing) {
      renderComponent = <Billing handleBillingClick={this.handleBillingClick} />;
    } else if (this.state.summary) {
      renderComponent = <Summary handlePurchaseClick={this.handlePurchaseClick} />;
    }

    return renderComponent;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

function Home(props) {
  return (
    <div>
        <h1>Shopping Cart Checkout</h1>
        <button onClick={props.handleCheckoutClick}>
          Checkout
        </button>
    </div>
  );
}

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      email: '',
      password: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleCreateAccount(event) {
    event.preventDefault();

    let accountDetails = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    $.ajax({
      url: 'http://localhost:3000/account',
      method: 'POST',
      contentType: 'application/JSON',
      data: JSON.stringify(accountDetails),
      error: function() {
        console.log('ERROR: Account was NOT created...');
      },
      success: function(data, results) {
        console.log('Account successfully created!');
        console.log('Data:', data);
      }
    });
    this.props.handleCreateAccountClick();
  }

  render() {
    return (
      <div>
        <h1>Create Account</h1>
        <form onSubmit={this.handleCreateAccount}>
          <label> Name </label>
            <input type="text" onChange={this.handleNameChange} />
          <label> Email </label>
            <input type="text" onChange={this.handleEmailChange} />
          <label> Password </label>
            <input type="text" onChange={this.handlePasswordChange} /> 
          <input type="submit" value="Next" />  
        </form>
      </div>
    );
  }
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






