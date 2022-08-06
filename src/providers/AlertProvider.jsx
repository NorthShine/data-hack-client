import React from 'react';
import PropTypes from 'proptypes';
import Alert from '../components/Alert/Alert';

export const AlertProvider = ({ children }) => (
  <>
    {children}
    <Alert />
  </>
);

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired
};
