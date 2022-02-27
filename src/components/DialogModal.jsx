import { Grid, FormControl, Select, MenuItem, Dialog } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RowSection from "./RowSection";

const DialogModal = ({ handleClose, open, cardImg, cardTitle, cardRank, cardOwner }) => {
  return (
    <Dialog fullWidth={true} maxWidth={"md"} onClose={handleClose} open={open}>
      <div className="diag-wrap" style={{ padding: "16px" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} className="diag-item">
            <img className="diag-img" style={{ width: "100%", borderRadius: "10px" }} src={cardImg} alt="" />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} className="diag-item" style={{ paddingLeft: "3%", paddingRight: "3%" }}>
            <p style={{ color: "#5599BB", fontSize: "20px" }}>{cardTitle}</p>
            <p style={{ color: "#999BA6", fontSize: "14px" }}>
              Rarity Rank: <span style={{ color: "white" }}>{cardRank}</span>
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "solid 0.5px #999ba640" }}>
              <p style={{ color: "#999BA6", fontSize: "14px" }}>
                Owner: <span style={{ color: "white", textDecoration: "underline" }}>{cardOwner}</span>
              </p>
              <p style={{ color: "#28913d", fontSize: "14px", cursor: "pointer" }}>
                VIEW TOKEN
                <ArrowForwardIosIcon style={{ color: "#28913d", fontSize: "0.75rem" }} />
              </p>
            </div>
            <FormControl
              variant="filled"
              className="selector diag-selector"
              style={{ width: "100%", marginTop: "10px" }}
            >
              <Select
                labelId="demo-simple-select-outlined-label"
                label="Age"
                placeholder="Select"
                value={10}
                style={{ borderRadius: "10px", border: "none" }}
              >
                <MenuItem value={10}>Rarity Rank</MenuItem>
                <MenuItem value={20}>Price</MenuItem>
                <MenuItem value={30}>Rarity Rank</MenuItem>
              </Select>
            </FormControl>
            <Grid item xs={12} sm={12} md={12} lg={12} className="table-wrap diag-table">
              <div className="table-row table-header">
                <div className="cell-one cells dark-font">ATTRIBUTE</div>
                <div className="cell-two cells dark-font">CHARACTERISTIC</div>
                <div className="cell-three cells dark-font">RARITY</div>
              </div>
              <RowSection 
                attribute="Unit Type"
                xtics="Vision"
                rarity="1.5 %" />
              <RowSection 
                attribute="Unit Number"
                xtics="46"
                rarity="" />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default DialogModal;
