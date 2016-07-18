//Higher order component should be in a nested folder inside components.
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {
        //Because context can be so easily abused, React makes you define contextTypes. We can only access context if we define what we want.
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            //this.props.resources => resourceList
            //Context skips levels unlike props where they go down by levels.
            return <ComposedComponent {...this.props} />
        }
    }
    function mapStateToProps(state) {
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication); //Wrapped a higher order component into another HOC.
}

/**
 * Demonstrate how to use the higher order component.
 * In some other location, not in this file we want to use this higher order component (HOC).
 *
 * import Authentication //This is my HOC
 * import Resources //This is the component I want to wrap
 *
 * const ComposedComponent = Authentication(Resources);
 *
 * In some render method
 * <ComposedComponent resources={resourceList}/>
 * **/