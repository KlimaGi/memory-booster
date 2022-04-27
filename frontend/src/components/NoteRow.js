export const NoteRow = ({ note }) => {
  const color = note.isToday ? "inherit" : "red";

  return (
    <tr>
      <td>
        <span>{note.title}</span>
      </td>
      <td>{note.learningsteps}</td>
    </tr>
  );
};
