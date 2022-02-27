const RowHeader = ({ cell1, cell2, cell3, cell4, cell5_1, cell5_2, cell6_1, cell6_2, cell7 }) => {
  return (
    <div className="table-row table-header">
      <div className="cell-one cells">{cell1}</div>
      <div className="cell-two cells">{cell2}</div>
      <div className="cell-three cells">{cell3}</div>
      <div className="cell-four cells">{cell4}</div>
      <div className="cell-five cells">
        {cell5_1}<span className="hour-wrap">{cell5_2}</span>
      </div>
      <div className="cell-six cells">
        {cell6_1}<span className="hour-wrap">{cell6_2}</span>
      </div>
      <div className="cell-seven cells">{cell7}</div>
    </div>
  );
};

export default RowHeader;
