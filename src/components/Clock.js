import React from 'react'

class Clock extends React.Component {
	
	constructor(props){
		/* console.log('constructor'); */
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount(){
		/* console.log('mounting...'); */
		this.timerID = setInterval(
			() => this.thick(), 1000
		);
	}

	componentWillUnmount(){
		/* console.log('unmounting...'); */
		clearInterval(this.timerID);
	}
	
	thick(){
		this.setState({
			date: new Date()
		});
	}
	
	render(){
		return (
			<div>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}

}


export default Clock;