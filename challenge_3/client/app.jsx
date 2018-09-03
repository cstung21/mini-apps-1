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
      renderComponent = <Summary handleClick={this.handleClick} user={this.state}/>;
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
      <form>
        <label> Address line 1
          <input
            type="text"
            name="address1"
            onChange={props.handleInputChange} />
        </label>
        <br />
        <label> Address line 2
          <input
            type="text"
            name="address2"
            onChange={props.handleInputChange} />
        </label>
        <br />
        <label> City
          <input
            type="text"
            name="city"
            onChange={props.handleInputChange} />
        </label>
        <label> State
          <input
            type="text"
            name="state"
            onChange={props.handleInputChange} 
            placeholder="XX" />
        </label>
        <label> Zip Code
          <input
            type="text"
            name="zipcode"
            onChange={props.handleInputChange} 
            placeholder="XXXXX" />
        </label>    
        <br />
        <label> Phone Number
          <input
            type="text"
            name="phone"
            onChange={props.handleInputChange} 
            placeholder="(xxx) xxx-xxxx" />
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

function Billing(props) {
  return (
    <div>
      <h1>Billing Details</h1>
      <form>
        <label> Credit Card
          <input
            type="text"
            name="creditCard"
            onChange={props.handleInputChange} />
        </label>
        <br />
        <label> CVV 
          <input
            type="text"
            name="cvv"
            onChange={props.handleInputChange} />
        </label>
        <br />
        <label> Expiry Date
          <input
            type="text"
            name="expiration"
            onChange={props.handleInputChange}
            placeholder="MM/CCYY" />
        </label>
        <br />
        <label> Billing Zip Code
          <input
            type="text"
            name="billingZipcode"
            onChange={props.handleInputChange} 
            placeholder="XXXXX" />
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

function Summary(props) {
  function handleClick() {
    const user = props.user;
    const userDetails = [
      user.name,
      user.email,
      user.password,
      user.address1,
      user.address2,
      user.city,
      user.state,
      user.zipcode,
      user.phone,
      user.creditCard,
      user.expiration,
      user.cvv,
      user.billingZipcode
    ];

    $.ajax({
      url: 'http://localhost:3000/customer',
      method: 'POST',
      data: JSON.stringify({userDetails}),
      contentType: 'application/json',
      error: (jqXHR, textStatus, errorThrown) => {
        console.log('ERROR: POST request from client to server was unsuccessful:', textStatus, errorThrown);
      },
      success: (data, status) => {
        console.log('POST request from client to server was successful!', status);
      }
    });

    props.handleClick();
  }

  return (
    <div>
      <h1>Confirmation</h1>
      <h3>Please review your user details and click Purchase once verified</h3>
      <table>
        <thead><tr><th colSpan="2">Account Details</th></tr></thead>
        <tbody>
          <tr><td>Name</td><td>{props.user.name}</td></tr>
          <tr><td>Email</td><td>{props.user.email}</td></tr>
          <tr><td>Password</td><td>{props.user.password}</td></tr>
        </tbody>  

        <thead><tr><th colSpan="2">Shipping Details</th></tr></thead>
        <tbody>
          <tr><td>Address Line 1</td><td>{props.user.address1}</td></tr>
          <tr><td>Address Line 2</td><td>{props.user.address2}</td></tr>
          <tr><td>City</td><td>{props.user.city}</td></tr>
          <tr><td>State</td><td>{props.user.state}</td></tr>
          <tr><td>Zip Code</td><td>{props.user.zipcode}</td></tr>
          <tr><td>Phone Number</td><td>{props.user.phone}</td></tr>
        </tbody>

        <thead><tr><th colSpan="2">Billing Details</th></tr></thead>
        <tbody>
          <tr><td>Credit Card</td><td>{props.user.creditCard}</td></tr>
          <tr><td>Expiry Date</td><td>{props.user.expiration}</td></tr>
          <tr><td>CVV</td><td>{props.user.cvv}</td></tr>
          <tr><td>Billing Zip Code</td><td>{props.user.billingZipcode}</td></tr>
        </tbody>
      </table>
      <input 
        type="button"
        value="Purchase"
        onClick={handleClick} />
    </div>
  );
}






