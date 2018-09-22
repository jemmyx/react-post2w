import React from 'react';
import List from './List';
import PropTypes from 'prop-types'
import SearchForm from './Search'

SearchForm.propTypes = {
	placeHolder: PropTypes.string
}


class Main extends React.Component {

	constructor(props){
		super(props);
		this.state = {
						refreshing: false 
					};
	}
	
	refresh(){
		this.setState({refreshing:true});
	}

	onComponentRefresh(){
		this.setState({refreshing:false});
	}
	
	methoA2Cents(){
		console.log('une dans ton fion');
		alert('une dans ton fion');
	}
	
	render(){
		
		console.log('Main render');
		const {refreshing} = this.state;
		
		return (
			<div className="main">
				<h2>En cours, exécutés</h2>
				<SearchForm />
				<List
					onComponentRefresh={this.onComponentRefresh.bind(this)}
					requestRefresh={refreshing}
					methoA2Cents={this.methoA2Cents.bind(this)}
				/>
				<button onClick={this.methoA2Cents.bind(this)}>
					Clique un peu
				</button>
			</div>
		)
	}
}

export default Main;