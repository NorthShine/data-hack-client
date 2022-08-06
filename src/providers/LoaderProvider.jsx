import React from 'react';
import PropTypes from 'proptypes';
import Loader from '../components/Loader/Loader';

const LoaderProvider = ({ children }) => (
  <>
    {children}
    <Loader />
  </>
);

LoaderProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoaderProvider;
