import React from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | 감정 일기 :)</title>
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: propTypes.string.isRequired,
};

export default PageTitle;
