import React from 'react';
import axios from 'axios';

class SearchForm extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {placeHolder:'enter keyword'};
	}

	search(e){

		alert("Recherche activée");
		
		e.preventDefault();

		axios.get('/promotions.json', {params:{}})
			  .then(function(result){
				  console.log(result);
			  })
			  .catch(function(error){
				  console.log(error);
				  alert(error);
			  })
		

		return false;
	}

	render(){

		const {placeHolder} = this.state;
		
		let searchInputClasses = ["searchInput"];
		
		if(this.state.placeHolder=='enter keyword'){
			searchInputClasses.push("active");
		}
		
		return (
			<form>
				<input 
					type="text" 
					placeholder={placeHolder}
					className={searchInputClasses.join(' ')}
					/>
				<button onClick={this.search.bind(this)}>Rechercher</button>
			</form>
		)
		
	}
	
}

export default SearchForm;