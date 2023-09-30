import React, { Component } from 'react';

class PageNotFound extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    };

    const headingStyle = {
      fontSize: '48px',
      color: 'red',
    };

    const messageStyle = {
      fontSize: '24px',
      marginTop: '16px',
    };

    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>404 Error</h1>
        <p style={messageStyle}>Page not found</p>
      </div>
    );
  }
}

export default PageNotFound;
