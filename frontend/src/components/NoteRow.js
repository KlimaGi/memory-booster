export const NoteRow = ({ note }) => {
  const color = note.isToday ? "inherit" : "red";

  return (
    <tr>
      <td>
        <span style="">{note.title}</span>
      </td>
      <td>{note.learningsteps}</td>
    </tr>
  );
};
