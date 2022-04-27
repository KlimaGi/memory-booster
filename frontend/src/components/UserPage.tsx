import { NoteSearchResults } from "./NoteSearchResults";
import { notes } from "../services/mock-data";
export const UserPage = () => (
  <>
    <div>User Content</div>
    <NoteSearchResults notes={notes} />
  </>
);
