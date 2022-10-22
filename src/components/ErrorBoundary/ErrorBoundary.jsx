import PropTypes from 'prop-types';
import { Component } from 'react';

export default class ErrorBoundary extends Component {
	state = { error: false };

	componentDidCatch(error) {
		this.setState({ error: true });
		console.log('error', error);
	}

	render() {
		const { error } = this.state;
		const { children } = this.props;
		return <> {!error ? children : <h1>Таня тут твой компонент</h1>}</>;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node,
};
