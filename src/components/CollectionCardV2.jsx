import EventIcon from '@material-ui/icons/Event';
import {Grid} from "@material-ui/core";

const CollectionCardV2 = ({ cardImg, pathD, pathFill, itemTitle, itemDate, hotImg, hotNum, nearImg, nftPrice }) => {
  return (
    <Grid item xs={12} sm={3} md={3} lg={3}>
      <div className="nft-item">
        <div className="img-wrap">
          <img className="nft-img" src={cardImg} alt="" />
          <div className="star-icon">
            <svg focusable="false" data-icon="star" viewBox="0 0 576 512" width="18" height="18">
              <path d={pathD} fill={pathFill} ></path>
            </svg>
          </div>
        </div>
        <div className="info-wrap">
          <p className="item-title">{itemTitle}</p>
          <div className="nft-row-wraps">
            <div className="nft-row-wrap">
              <EventIcon className="custom-icon icon-text" />
              <p className="row-text margins-left icon-text">{itemDate}</p>
            </div>
            <div className="hot-img">
              <img src={hotImg} alt="" />
              <span className="hot-num">{hotNum}</span>
            </div>
          </div>
        </div>
        <div className="nft-row-wrap bottom-wrap info-wrap">
          <p className="row-text price-text">FLOOR PRICE: </p>
          <img className="near-img" src={nearImg} alt="" />
          <p className="row-text nft-price">{nftPrice}</p>
        </div>
      </div>
    </Grid>
  );
};

export default CollectionCardV2;
