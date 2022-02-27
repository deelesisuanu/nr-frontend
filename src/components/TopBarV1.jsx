import { Grid, OutlinedInput } from "@material-ui/core";
import SearchComponent from "./SearchComponent";
import SideTopV1 from "./SideTopV1";

const TopBarV1 = modeImg => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Grid container className="nft-header">
        <Grid item xs={12} sm={12} md={5} lg={5} className="header-item">
          <SearchComponent placeholder="Search for collections and NFTs" />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} className="header-item"></Grid>
        <Grid item xs={10} sm={10} md={4} lg={4} className="header-item">
          <div className="nft-info-wrap">
            <SideTopV1 
                itemNum="2" 
                itemText="COLLECTIONS"
                positionClass="info-left" />
            <SideTopV1 
                itemNum="6632" 
                itemText="SALES"
                positionClass="info-center" />
            <SideTopV1 
                itemNum="431.4K" 
                itemText="VOLUME"
                positionClass="info-right" />
          </div>
        </Grid>
        <Grid item xs={2} sm={2} md={1} lg={1} className="header-item mode-icon">
          <img src={modeImg} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopBarV1;
