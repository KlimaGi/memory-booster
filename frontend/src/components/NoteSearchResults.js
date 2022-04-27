import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { TopicsList } from "./TopicsList";

export const NoteSearchResults = ({ notes }) => {
  const [searchText, setSearchText] = useState("");
  const [isToday, setIsToday] = useState(false);
  return (
    <div>
      <SearchBar
        searchText={searchText}
        isToday={isToday}
        setSearchText={setSearchText}
        setIsToday={setIsToday}
      />
      <TopicsList notes={notes} searchText={searchText} isToday={isToday} />
    </div>
  );
};
