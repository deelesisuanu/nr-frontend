import { Grid } from "@material-ui/core";

const CollectionCardV3 = ({ handleClickOpen, cardImage, rankNo, itemNo }) => {

  return (
    <Grid item xs={12} sm={3} md={2} lg={2} onClick={() => handleClickOpen()}>
      <div className="nft-item">
        <img className="nft-img" src={cardImage} alt="" />
        <div className="nft-row-wraps-col">
          <div className="col-text">
            <p className="row-text price-text">RANK </p>
            <p className="row-text nft-price">{rankNo}</p>
          </div>
          <div className="ver-divider"></div>
          <div className="col-text">
            <p className="row-text price-text">ITEM NO</p>
            <p className="row-text nft-price">#{itemNo}</p>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default CollectionCardV3;
