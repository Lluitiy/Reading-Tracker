import NotFoundComponent from 'components/NotFound/NotFoundComponent';
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
		return <> {!error ? children : <NotFoundComponent />}</>;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node,
};
