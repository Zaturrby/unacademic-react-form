import React from 'react';

class Resource extends React.Component {
	render(){
		var resource = this.props.state,
			setValue = this.props.setValue,
			outsideIndex = this.props.index,
			createOrRemovePoint = this.props.createOrRemovePoint;

	  	return (
	  		<fieldset className="resource">
	  			<p className="cf">title: <input value={resource.title} onChange={ setValue.bind(this, outsideIndex, "title") }></input></p>
	  			<p className="cf">author: <input value={resource.author} onChange={ setValue.bind(this, outsideIndex, "author") }></input></p>
	  			<p className="cf">url: <input value={resource.url} onChange={ setValue.bind(this, outsideIndex, "url") }></input></p>
		  		<button type="button" className="utility minus" onClick={createOrRemovePoint.bind(this, outsideIndex, 'remove', 'resource')}>-</button> 
	   		</fieldset>
	  	)
  	}
}

export default Resource;