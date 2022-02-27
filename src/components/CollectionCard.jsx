import EventIcon from '@material-ui/icons/Event';
import {Grid} from "@material-ui/core";

const CollectionCard = ({ title, text_date, cardImg, nearImg, nft_price }) => {

  return (
    <Grid item xs={12} sm={3} md={3} lg={3}>
      <div className="nft-item">
        <img className="nft-img" src={cardImg} alt="" />
        <div className="info-wrap">
          <p className="item-title">{title}</p>
          <div className="nft-row-wrap">
            <EventIcon className="custom-icon icon-text" />
            <p className="row-text margins-left icon-text"> { text_date } </p>
          </div>
        </div>
        <div className="nft-row-wrap bottom-wrap info-wrap">
          <p className="row-text price-text">FLOOR PRICE: </p>
          <img className="near-img" src={nearImg} alt="" />
          <p className="row-text nft-price">{ nft_price }</p>
        </div>
      </div>
    </Grid>
  );
};

export default CollectionCard;
