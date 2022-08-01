import { useState, useEffect } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardsSearched, setCardsSearched] = useState([]);
  const [errored, setErrored] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(true);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setDisplaySearch(false);
      setHoverState(false);
    }
  }, [searchTerm]);

  return (
    <div
      id={`search-area${focused ? '-focused' : ''}`}
      className={`${displaySearch || errored ? 'show-results' : 'hide-results'}`}
      onFocus={() => setFocused(true)}
      onBlur={(e) => { e.preventDefault(); setFocused(false) }} >
      <span id='input-prepend' ><i className="fas fa-search"></i></span>
      <SearchBar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        setDisplaySearch={setDisplaySearch}
        setSearchTerm={setSearchTerm}
        setErrored={setErrored} />
      {
        errored
          ? <div id='search-error' >{`No cards found for the term ${searchTerm}`}</div>
          : displaySearch && <SearchList cardsSearched={cardsSearched} />
      }
    </div >
  );

};

export default Search;