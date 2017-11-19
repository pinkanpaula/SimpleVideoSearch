
import React, {Component} from 'react';

class SearchBar extends Component{

	

	constructor(props) {
		super(props);

		this.state = {term: '', errorMsg:''};
	}

	render() {
		return (
			<div className="search-bar">
				<div className="error-message"> {this.state.errorMsg} </div>
				<input  onChange={ (event) =>  this.onInputChange( event.target.value )}/>
				
			</div>

		);
		
	}

	onInputChange(term) {		
		if(term.indexOf("porn") >= 0) {
			this.setState({errorMsg : 'Invalid Term!'});
		}
		else {
			this.setState({errorMsg : ''});
			this.setState({term});
			this.props.onSearchTermChange(term);
		}
	}


}

export default SearchBar;