export const SearchBar = ({
  searchText,
  isToday,
  setSearchText,
  setIsToday,
}) => (
  <form>
    <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />

    <p>
      <label>
        <input
          type="checkbox"
          checked={isToday}
          onChange={(e) => setIsToday(e.target.value)}
        />{" "}
        Only show today notes
      </label>
    </p>
  </form>
);
