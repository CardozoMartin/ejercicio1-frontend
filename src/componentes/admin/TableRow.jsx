

export const TableRow = (props) => {
    const { task, index} = props;
  return (
    <tr>
        <td>{index + 1}</td>
        <td>{task.titletask}</td>
        <td>{task.subtitletask}</td>
        <td>{task.descriptiontask}</td>

        
    </tr>
  )
}
