const RowSection = ({attribute, xtics, rarity}) => {
  return (
    <div className="table-row ">
      <div className="cell-one cells normal-font">{attribute}</div>
      <div className="cell-two cells">{xtics}</div>
      <div className="cell-three cells">{rarity}</div>
    </div>
  );
};

export default RowSection;
