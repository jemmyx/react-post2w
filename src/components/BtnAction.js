import React from 'react';
import axios from 'axios';

class BtnAction extends React.Component {
	 
	constructor(props){
		super(props);
		this.state = {
						requestConfirmation:this.props.requestConfirmation, 
						type:this.props.type,									/* type 1=approval, type 2=delete */
						isConfirmed:0
					};
	}
	
	componentWillMount(){}
	
	componentDidMount(){}
	
	componentWillUnmount(){}
	
	handleClick(){
		
		if(	this.state.requestConfirmation==1	&&	this.state.isConfirmed==0	){
			
			this.setState({
					isConfirmed:1
				});
		}else{
			this.props.onClick();
		}
		
	}

	render(){

		const {id} = this.props;

		let {btnvalue} = this.props;
		
		let btnClasses = ['btn'];
		
		if(	this.state.requestConfirmation==1	){
			btnClasses.push('btn-danger');
		}
		
		if( this.state.isConfirmed==1 ){
			btnvalue = 'Confirmer';
		}

		return(
			<button 
				className={btnClasses.join(' ')}
				onClick={()=>this.handleClick()} key={id}>{btnvalue}
			</button>
		)

	}
	
}

export default BtnAction;