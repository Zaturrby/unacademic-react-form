import React from 'react';

class Login extends React.Component {
	render(){
		var userData = this.props.state;
	  	return (
	  		<section className="loginView" style={{background: 'pink'}}>
	  			<p>You are logged in as: {userData.name}</p>
	   		</section>
	  	)
  	}
}

export default Login;