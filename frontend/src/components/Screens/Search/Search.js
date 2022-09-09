import React, {useState} from 'react';
import SearchMarkup from './SearchMarkup';

const Search = props => {
  const [keyword, setKeyword] = useState('');

  const searchOnPressHandler = () => {
    props.navigation.navigate('Products', {keyword: keyword});
    setKeyword('');
  };

  return (
    <SearchMarkup
      {...props}
      keyword={keyword}
      setKeyword={setKeyword}
      searchOnPressHandler={searchOnPressHandler}
    />
  );
};

export default Search;
