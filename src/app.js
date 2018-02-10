// Higher order component (HOC): A react component (HOC) 
// that renders another component (regular component)
// Ventajas: reuse code, render hijacking, prop manipulation and abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    // este es el HOC
    return (props) => (
        <div>
            {props.isAdmin && <p>Esto es privado (mensaje del admin)</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    // este es el HOC
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <div>
                    <p>authenticated</p>
                    <WrappedComponent {...props} />
                </div>
            ) : (
                <p>Please login</p>
            )}

        </div>
    );
};

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={false} info="detalle" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="detalle" />, document.getElementById('app'));