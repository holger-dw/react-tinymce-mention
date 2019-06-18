import React from 'react';
import PropTypes from 'prop-types';

export default class CustomRTEMention extends React.Component {

  static propTypes = {
    displayLabel: PropTypes.string.isRequired,
    delimiter: PropTypes.string.isRequired,
    tinymceId: PropTypes.string.isRequired,
    id: PropTypes.number
  }

  render() {
    const { tinymceId, delimiter, displayLabel } = this.props;
    return (
      <span>
        <a href='#' id={tinymceId} className='tinymce-mention'>
          {delimiter}{displayLabel}
        </a>
        &nbsp;
      </span>
    );
  }
}
