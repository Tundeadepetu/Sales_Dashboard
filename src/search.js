import Icon from './Resources/searchIcon.png'

const Search = () => {
  return (
    <form>
      <img src={Icon} alt="Icon" className="searchIcon"/>
      <input type="search" placeholder="Search here..." className="searchbox"/>
    </form>
  );
};

export default Search;