import React from 'react';

class Notification extends React.Component{
	
	constructor(props){
		super(props);
	}

	render(){

		const {notif} = this.props;
		let classNotif = notif.classNotif;

		return(
			<div className={classNotif.join(' ')}>{notif.title}</div>
		)
		
	}
	
}

export default Notification;