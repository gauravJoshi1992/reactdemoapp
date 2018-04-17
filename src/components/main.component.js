import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserSelected} from '../actions/index';
import UserDetails from '../components/user.details.component';
import '../styles/main.css';

class Main extends Component {

	render () {
		var that = this;
		return (
			<div>
				<div class="main_container">
					<div class="header_container" >
						<div class="header_Button">
							<button class="button_container">Mobile
								<span class="arrow right"></span>
							</button>
						</div>
						<div class="header_Button">
							<button class="button_container">Television
								<span class="arrow right"></span>
							</button>
						</div>
						<div class="header_Button">
							<button class="button_container">Laptop
								<span class="arrow right"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

function mapStateToProps (state) {
	return {
		user: state.user
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({UserSelected: UserSelected}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
