import lightIcon from "../../assets/nftimages/lightning.svg";
import nftImg1 from "../../assets/nftimages/nft1.jpg";
import nftImg2 from "../../assets/nftimages/nft2.jpg";
import nftImg3 from "../../assets/nftimages/nft3.jpg";
import nftImg4 from "../../assets/nftimages/nft4.png";
import nearImg from "../../assets/nftimages/near-protocol-logo.svg";
import modeImg from "../../assets/nftimages/light_mode.svg";
// import EventIcon from "@material-ui/icons/Event";
import { Grid, OutlinedInput } from "@material-ui/core";
import "./home.scss";
import CollectionCard from "../../components/CollectionCard";
import RowCollectionCard from "../../components/RowCollectionCard";
import RowHeader from "../../components/RowHeader";
import TopBarV1 from "../../components/TopBarV1";

function Home() {
  return (
    <div id="home-view">
      <Grid container spacing={3}>
        
        <TopBarV1 modeImg={modeImg} />

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="page-title">
            <img src={lightIcon} alt="" />
            <h1 className="title">Featured</h1>
          </div>
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

            <CollectionCard
              title="Antisocial Ape Club"
              text_date="5 Feb - 19:00"
              cardImg={nftImg2}
              nearImg={nearImg}
              nft_price="4.2"
            />

            <CollectionCard
              title="Antisocial Ape Club"
              text_date="5 Feb - 19:00"
              cardImg={nftImg3}
              nearImg={nearImg}
              nft_price="4.2"
            />

            <CollectionCard
              title="Antisocial Ape Club"
              text_date="5 Feb - 19:00"
              cardImg={nftImg4}
              nearImg={nearImg}
              nft_price="4.2"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="page-title">
            <h1 className="title collection-header no-padding">All Collections</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="table-wrap">
          
          <RowHeader
            cell1="#"
            cell2="COLLECTION"
            cell3="FLOOR PRICE"
            cell4="OWNERS"
            cell5_1="SALES"
            cell5_2="24h"
            cell6_1="VOLUME"
            cell6_2="24h"
            cell7="MARKET CAP" />

          <RowCollectionCard
            sn="1"
            cardImage={nftImg1}
            colTitle="Antisocial Ape Club"
            colSupply="3333"
            nearImg={nearImg}
            nftPrice="4.2"
            numOwners="1222"
            numSales="55"
            salesReduced="-12"
            volumePrice="$243,345"
            volIncrease="+36%"
            marketCap="$243,345"
          />

          <RowCollectionCard
            sn="2"
            cardImage={nftImg3}
            colTitle="Antisocial Ape Club"
            colSupply="3333"
            nearImg={nearImg}
            nftPrice="5.5"
            numOwners="5534"
            numSales="421"
            salesReduced="-12"
            volumePrice="$12,321"
            volIncrease="+36%"
            marketCap="$243,345"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="footer">
            <p>Copyright © 2021 NFTsniper. All rights reserved.</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
