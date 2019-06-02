import React from 'react';
import { Route } from 'react-router-dom';
import SearchResult from '../SearchResult';
import CITY_IMAGE from '../../images/bengaluru.jpeg';
import './SearchWrapper.scss';
import Button from '../FormComponents/Button';
import Select from '../FormComponents/Select';
import CustomRow from '../CustomRow';
import NestedRoute from '../NestedRoute';

const SearchWrapper = props => {
  const [city, setCity] = React.useState('Bengaluru');

  const [searchedResult, setSearchedResult] = React.useState(null);

  console.log(props);
  const cities = [
    {
      name: 'Chennai',
      img: CITY_IMAGE,
    },
    {
      name: 'Bengaluru',
      img: CITY_IMAGE,
    },
    {
      name: 'Hyderabad',
      img: CITY_IMAGE,
    },
  ];
  // const onCityChange = e => {
  //   setCity(e.target.value);
  // };

  const onCitySearch = city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=fc79192ee5cc2c316c7ec2fddf469a3e`)
      .then(response => response.json())
      .then(searchedResult => {
        setSearchedResult(searchedResult);
      });
  };

  // // Mimic component did mount
  // React.useEffect(() => {
  //   onCitySearch();
  // }, []);

  const onClearResult = () => {
    setCity('');
    setSearchedResult(null);
  };

  return (
    <div className="search-wrapper">
      <div className="action-wrapper">
        <Select data={cities} displayName="name" onSearch={onCitySearch} rowComponent={CustomRow} />
        {/* <Input value={city} onChange={onCityChange} onSearch={onCitySearch} /> */}
        <Button label="Clear Result" onClick={onClearResult} />
      </div>

      {searchedResult && <SearchResult searchedResult={searchedResult} />}

      <Route path="/home/nested-route" component={NestedRoute} />
    </div>
  );
};

export default SearchWrapper;
