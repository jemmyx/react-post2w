import React from 'react';
import { render } from 'react-dom';
import Clock from './components/Clock';
import Main from './components/Main';

<div id="root"></div>

class Header extends React.Component {
	render(){
		return (
			<div className="header">
				<h1>Promo - panel admin</h1>
			</div>		
		)
	}
}


class Footer extends React.Component{
	render(){
		return (
			<div className="footer">
				footer
			</div>
		)
	}
}


const App = 
	<div className="wrapper">
		<div className="container">
			<Header />
			<Main />
		</div>
		<Footer />
	</div>

render(App, document.getElementById('root'));