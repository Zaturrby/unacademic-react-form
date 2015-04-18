import React from 'react';

import CheckPointsView from './check-points-view.jsx';
import WayPointsView from './way-points-view.jsx';
import LoginView from './login.jsx';
import data from './data.jsx';

import css from './styles/main.css';

class Site extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userData: {
				id: 1,
				name: 'Mr. Snotneus',
				email: 'somethingelse@example.com',
				waypoints: data
			},
			activeWaypoint: 0,
		}
	}
	setValue(index, fieldType, event){
		console.log(index);
		console.log(fieldType);
		console.log(event.target.value);
		var newValue = event.target.value,
			fieldType = fieldType;
		if (index.length == 1){
			this.setState(function(state){
				state.userData.waypoints[index[0]][fieldType] = newValue;
				console.log(state);
			});
		} else if (index.length == 2){
			this.setState(function(state){
				state.userData.waypoints[index[0]].checkpoints[index[1]][fieldType] = newValue;
				console.log(state);
			});
		} else if (index.length == 3){
			this.setState(function(state){
				state.userData.waypoints[index[0]].checkpoints[index[1]].resources[index[2]][fieldType] = newValue;
				console.log(state);
			});
		}

	}
	render(){
		var userData = this.state.userData,
			activeWaypoint = this.state.activeWaypoint,
			setValue = this.setValue;
			this.hi = 10;
	  	return (
	  		<main className="siteContainer">
	  			
	  			<h1>Unacademic Temporary Curating Interface</h1>

	  			<LoginView state={userData}/>
	  			<WayPointsView state={userData} />
	  			<CheckPointsView state={userData.waypoints[activeWaypoint]} index={[activeWaypoint]} setValue={setValue.bind(this)}/>
	   		
	   		</main>
	  	)
  	}
}

React.render(<Site />, document.body);
