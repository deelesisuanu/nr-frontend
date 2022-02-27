const SideTopV1 = ({itemNum, itemText, positionClass}) => {
  return (
    <div className={`info-item ${positionClass}`}>
      <p className="info-num">{itemNum}</p>
      <p className="info-text">{itemText}</p>
    </div>
  );
};

export default SideTopV1;
