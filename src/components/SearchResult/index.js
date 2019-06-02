import React from 'react';
import PropTypes from 'prop-types';
import './SearchResult.scss';

const SearchResult = (props) => {
  const {searchedResult} = props;

  React.useEffect(() => {
    console.log('search result changes');
  }, [searchedResult]);

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
};

SearchResult.defaultProps = {
  searchedResult: null,
};

SearchResult.propTypes = {
  searchedResult: PropTypes.object,
};

export default SearchResult;
