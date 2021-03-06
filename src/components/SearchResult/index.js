import React from 'react';
import PropTypes from 'prop-types';
import './SearchResult.scss';

class SearchResult extends React.Component {
  componentWillReceiveProps(prevProps, nextProps) {
    console.log(prevProps, nextProps, 'component recieved new props');
  }

  componentWillUnmount() {
    console.log('component unmounted');
  }

  render() {
    const { props } = this;
    const { searchedResult } = props;
    if (!searchedResult) {
      return <div className="no-content">Data is not available</div>;
    }
    return (
      <div className="search-result">
        <h3>{searchedResult.name}</h3>

        <div className="location">
          <div className="latitude">
            <span className="label">Latitude</span>
            <span>{searchedResult.coord && searchedResult.coord.lat}</span>
          </div>
          <div className="longitude">
            <span className="label">Longitude</span>
            <span>{searchedResult.coord && searchedResult.coord.lon}</span>
          </div>
        </div>
      </div>
    );
  }
}

SearchResult.defaultProps = {
  searchedResult: null,
};

SearchResult.propTypes = {
  searchedResult: PropTypes.object,
};

export default SearchResult;
