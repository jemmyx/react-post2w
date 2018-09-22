import React from 'react';
import axios from 'axios';
import BtnAction from './BtnAction';
import Notification from './Notification'

class List extends React.Component{

	constructor(props){
		super(props);
		this.state = {
				promotions:[], 
				notif: {
					title:'dans ton cul', 
					classNotif:[]
				}
			}
	}

 	componentWillMount(){
		console.log('Will mounting for List');
	}

 	componentDidMount(){
		console.log('Did mounting for List...');
		axios.get('api/promotions.php')
			.then(res => {
				this.setState({
					promotions:res.data
				})
			});
	}

 	componentWillUnmount(){
		console.log('Unmounting for List...');
	}

	fetchPromotions(){
		console.log('fetch promotions...');
	}

	delete(idx){

		/* https://stackoverflow.com/questions/3396088/how-do-i-remove-an-object-from-an-array-with-javascript */

		console.log('delete item '+idx);
		const params = new URLSearchParams();
		params.append('itemID', idx);
		axios.post('api/process.php', params)
				.then(res => {
					if(res.data.success==1){
						let itemID = res.data.itemID;
						let newArray = this.state.promotions;
						const itemDeleted = this.state.promotions.find( item => item.id == idx );	/* find item in the virtual Dom*/
						let index = this.state.promotions.findIndex( item=> item.id == idx );		/* get index of the items */
						newArray.splice(index,1);											/* remove item by creating another array excuding the item previously deleted */
						this.setState({
								promotions:newArray, 
								notif: {
										title:'Promotion '+itemID+' supprimee.', 
										classNotif:['alert','alert-success', 'notif-info'],
									},
							});
					}else{
						this.setState({
								notif: {
										title:'Erreur lors de la suppresion', 
										classNotif:['alert','alert-danger', 'notif-info'],
									},
							});
					}
				});
	}

	approve(idx){
		console.log('approve item '+idx);
		alert(idx);
		const params = new URLSearchParams();
		params.append('itemID', idx);
		axios.post('api/process.php', params)
				.then(res =>  {
						const itemApproved = this.state.promotions.find( item => item.id == idx );
				});
		
	}

	render(){
		console.log('rendering List component');
		const {promotions} = this.state;
		const {notif} = this.state

		return(
			<div className="content">
				<Notification 
					notif={notif}
				/>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>ID</th>
							<th>Page social</th>
							<th>Album ID</th>
							<th>Date de publication</th>
							<th>Publié le</th>
							<th>Lien</th>
							<th>Texte</th>
							<th>Média</th>
							<th>Créé</th>
							<th>Approuvé</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{promotions.map(promoItem => (
							<tr key={promoItem.id}>
								<td>{promoItem.id}</td>
								<td>{promoItem.pgsocial}</td>
								<td>{promoItem.albumid}</td>
								<td>{promoItem.publicationDate}</td>
								<td>{promoItem.publishedAt}</td>
								<td>{promoItem.link}</td>
								<td className="word-wrap">{promoItem.text}</td>
								<td></td>
								<td>{promoItem.created}</td>
								<td>{(promoItem.approved==1) ? 'oui' : 'non'}</td>
								<td className="action">
									<BtnAction 
										type={1}
										id={promoItem.id}
										requestConfirmation={0}
										btnvalue={'ok'}
										onClick={()=>this.approve(promoItem.id)}
									/>
									<BtnAction 
										type={2}
										id={promoItem.id}
										requestConfirmation={1}
										btnvalue={'x'}
										onClick={()=>this.delete(promoItem.id)}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}	
}

export default List;