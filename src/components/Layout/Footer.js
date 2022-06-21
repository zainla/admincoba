import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class FooterBar extends React.Component {

	state = {
		date: new Date(),
	}

	render () {
		const { date } = this.state
		return (
			<Footer className="footer">
				<p>Working Paper ©{date.getFullYear()} Created by ProAcc</p>
			</Footer>
		);
	}
}

export default FooterBar;