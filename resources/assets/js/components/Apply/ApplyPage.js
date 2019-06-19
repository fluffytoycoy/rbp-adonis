import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Apply from './Apply';


export default class ApplyPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scheduleStatus: 'takingApplications',
		};
	};

	scheduleStatusChange = (event) => {
			this.setState({
				scheduleStatus: event.target.value
			});
	};

	render() {
		return (

      <Apply scheduleStatus={this.state.scheduleStatus} />
		);
	}
}

ReactDOM.render(<ApplyPage />, document.getElementById('app'));