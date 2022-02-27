import { useState } from "react";
import nftImg1 from "../../assets/nftimages/nft1.jpg";
import nftImg2 from "../../assets/nftimages/nft2.jpg";
import nftImg3 from "../../assets/nftimages/nft3.jpg";
import nearImg from "../../assets/nftimages/near-protocol-logo.svg";
import hotImg from "../../assets/nftimages/images-hot.svg";
import arrowRight from "../../assets/nftimages/arrow-right.png";
import arrowLeft from "../../assets/nftimages/arrow-left.png";
import arrowUp from "../../assets/nftimages/arrow-up.png";
import arrowDown from "../../assets/nftimages/arrow-down.png";
import EventIcon from "@material-ui/icons/Event";
import { Grid } from "@material-ui/core";
import "./calendar.scss";
import CollectionCard from "../../components/CollectionCard";
import CollectionCardV2 from "../../components/CollectionCardV2";

function Calendar() {
  const [viewMore, setViewMore] = useState(true);

  const callViewMore = () => {
    setViewMore(!viewMore);
  };
  return (
    <div id="home-view">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container className="nft-header">
            <Grid item xs={12} sm={12} md={8} lg={8} className="header-item">
              <div className="page-title">
                <h1 className="title">Upcoming Releases</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} className="header-item"></Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} className="header-item">
              <div className="nft-info-wrap">
                <div className="info-item info-left">
                  <p className="info-num">Day</p>
                </div>
                <div className="info-item info-right">
                  <p className="info-num">Week</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="sub-header">
          <div className="arrow-button">
            <img src={arrowLeft} alt="" />
          </div>
          <div className="arrow-button">
            <img src={arrowRight} alt="" />
          </div>
          <div className="day-item">Today</div>
          <p className="date-item">23 Feb - 1 Mar</p>
          <EventIcon className="custom-icon-red icon-text" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="sub-header">
          <div className="divider-title">TODAY</div>
          <div className="divider-line"></div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container className="nft-header" spacing={4}>
            <CollectionCard
              title="Antisocial Ape Club"
              text_date="5 Feb - 19:00"
              cardImg={nftImg1}
              nearImg={nearImg}
              nft_price="4.2"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="sub-header">
          <div className="divider-title">24 FEB</div>
          <div className="divider-line"></div>
          <div className="arrow-button gap-button" onClick={() => callViewMore()}>
            <img src={viewMore ? arrowUp : arrowDown} alt="" />
          </div>
        </Grid>
        {viewMore ? (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container className="nft-header" spacing={4}>
              <CollectionCardV2
                cardImg={nftImg2}
                pathD="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                pathFill="#ffffff"
                itemTitle="Antisocial Ape Club"
                itemDate="5 Feb - 19:00"
                hotImg={hotImg}
                hotNum="0"
                nearImg={nearImg}
                nftPrice="4.2"
              />

              <CollectionCardV2
                cardImg={nftImg3}
                pathD="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                pathFill="#ffffff"
                itemTitle="Antisocial Ape Club"
                itemDate="5 Feb - 19:00"
                hotImg={hotImg}
                hotNum="0"
                nearImg={nearImg}
                nftPrice="4.2"
              />

              <CollectionCardV2
                cardImg={nftImg1}
                pathD="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                pathFill="#ffffff"
                itemTitle="Antisocial Ape Club"
                itemDate="5 Feb - 19:00"
                hotImg={hotImg}
                hotNum="0"
                nearImg={nearImg}
                nftPrice="4.2"
              />

              <CollectionCardV2
                cardImg={nftImg1}
                pathD="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                pathFill="#ffffff"
                itemTitle="Antisocial Ape Club"
                itemDate="5 Feb - 19:00"
                hotImg={hotImg}
                hotNum="0"
                nearImg={nearImg}
                nftPrice="4.2"
              />
              
            </Grid>
          </Grid>
        ) : (
          <div className="space-block"> </div>
        )}

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="footer">
            <p>Copyright © 2021 NFTsniper. All rights reserved.</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Calendar;
