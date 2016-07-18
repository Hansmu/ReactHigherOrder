//Higher order component should be in a nested folder inside components.
import React, { Component } from 'react';

export default function(ComposedComponent) {
    class Authentication extends Component {
        render() {
            //this.props.resources => resourceList
            return <ComposedComponent {...this.props} />
        }
    }

    return Authentication;
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