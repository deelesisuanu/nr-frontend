
const RowCollectionCard = ({ sn, cardImage, colTitle, colSupply, nearImg, nftPrice, numOwners, numSales, salesReduced, volumePrice, volIncrease, marketCap }) => {

    return (
        <div className="table-row table-body">
            <div className="cell-one cells normal-font">{sn}</div>
            <div className="cell-two cells">
              <img src={cardImage} className="cell-img" alt="" />
              <div className="collection-text-wrap">
                <p className="collection-title">{colTitle}</p>
                <p className="collection-supply">SUPPLY: {colSupply}</p>
              </div>
            </div>
            <div className="cell-three cells">
              <div className="nft-row-wrap">
                <img className="near-img cell-near-img" src={nearImg} alt="" />
                <p className="row-text nft-price normal-font">{nftPrice}</p>
              </div>
            </div>
            <div className="cell-four cells normal-font">{numOwners}</div>
            <div className="cell-five cells normal-font">
              {numSales} <span className="mini-font mini-red"> ({salesReduced}) </span>
            </div>
            <div className="cell-six cells normal-font">
              {volumePrice} <span className="mini-font mini-green"> ({volIncrease}) </span>
            </div>
            <div className="cell-seven cells normal-font">{marketCap}</div>
          </div>
    );

}

export default RowCollectionCard;