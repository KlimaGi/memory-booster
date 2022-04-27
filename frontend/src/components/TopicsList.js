export const TopicsList = ({ notes, searchText, isToday }) => {
  const rows = [];
  let lastCategory = null;

  notes.forEach((note) => {
    if (note.title.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
      return;

    if (isToday && !note.isToday) return;

    if (note.category !== lastCategory) {
      rows.push(<NoteCategory category={note.category} key={note.category} />);
    }
    rows.push(<NoteRow note={note} key={note.title} />);
    lastCategory = note.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Note Title</th>
          <th>Learning steps</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
