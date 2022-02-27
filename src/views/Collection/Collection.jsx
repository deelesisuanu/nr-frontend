import { useState } from "react";
import nftImg1 from "../../assets/nftimages/nft1.jpg";
import nftImg2 from "../../assets/nftimages/nft2.jpg";
import nftImg3 from "../../assets/nftimages/nft3.jpg";
import nftImg4 from "../../assets/nftimages/nft4.png";
import filterIcon from "../../assets/nftimages/filter.png";
import nearImg from "../../assets/nftimages/near-protocol-logo.svg";
import discordIcon from "../../assets/nftimages/images-discord.svg";
import teleIcon from "../../assets/nftimages/images-telegram.svg";
import twitIcon from "../../assets/nftimages/images-twitter.svg";
import webIcon from "../../assets/nftimages/website.svg";
import listIcon from "../../assets/nftimages/listed.svg";
import markIcon from "../../assets/nftimages/mark.png";
import EventIcon from "@material-ui/icons/Event";
import SearchIcon from "@material-ui/icons/Search";
import arrowIcon from "../../assets/nftimages/arrow-right.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  Grid,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Select,
  IconButton,
  MenuItem,
  Dialog,
} from "@material-ui/core";
import "./collection.scss";
import CollectionCardV3 from "../../components/CollectionCardV3";
import DialogModal from "../../components/DialogModal";

function Collection() {

  const [open, setOpen] = useState(false);

  const [nCardImg, setNCardImg] = useState("");
  const [nCardTitle, setNCardTitle] = useState("");
  const [nCardRank, setNCardRank] = useState("");
  const [nCardOwner, setNCardOwner] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="collection-view">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} className="no-gap">
          <Grid container className="no-gap">
            <Grid item xs={12} sm={4} md={3} lg={3} className="one-img-wrap vertial-align no-gap">
              <img className="nft-img no-gap" src={nftImg1} alt="" />
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={9} className="one-img-wrap-2p">
              <h1>Antisocial Ape Club</h1>
              <p className="one-text">
                The Geobots are the first cross-chain NFT, AMM project on Solana, that aim to provide the highest level
                of utility and holder benefits. he Geobots are the first cross-chain NFT, AMM project on Solana, that
                aim to provide the highest level of utility and holder benefits
              </p>
              <div className="nft-row-wrap">
                <div className="row-item-one">
                  <p className="one-g-text">RELEASE DATE (UTC)</p>
                  <div className="nft-row-wrap">
                    <EventIcon className="custom-icon icon-text white-text" />
                    <p className="row-text margins-left icon-text white-text">5 Feb - 10:00 PM</p>
                  </div>
                </div>
                <div className="row-item-one">
                  <p className="one-g-text">MINT PRICE</p>
                  <div className="nft-row-wrap row-center">
                    <img className="near-img" src={nearImg} alt="" />
                    <p className="row-text nft-price"> - </p>
                  </div>
                </div>
                <div className="row-item-one">
                  <p className="one-g-text">SUPPLY</p>
                  <div className="nft-row-wrap row-center">
                    <p className="row-text nft-price"> - </p>
                  </div>
                </div>
              </div>
              <div className="divider-line divider-top"></div>
              <div className="nft-row-wrap-c">
                <div className="arrow-button">
                  <img className="icon-imgs" src={discordIcon} alt="" />
                </div>
                <div className="arrow-button">
                  <img className="icon-imgs" src={teleIcon} alt="" />
                </div>
                <div className="arrow-button">
                  <img className="icon-imgs" src={twitIcon} alt="" />
                </div>
                <div className="arrow-button wide-button">
                  <img className="icon-imgs" src={webIcon} alt="" />
                  <span className="icon-titles">WEBSITE</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="no-gap">
          <p className="one-g-text">MARKETPLACES</p>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="border-wrap">
          <div className="nft-row-wrap-between">
            <div className="cells">
              <img className="icon-img-medium" src={markIcon} alt="" />
            </div>
            <div className="cells">
              <img src={listIcon} alt="" />
              <span className="icon-titles">Listed</span>
            </div>
            <div className="cells">
              <div className="table-wraps">
                <p className="one-g-text no-margin">FLOOR PRICE</p>
                <div className="nft-row-wrap row-center">
                  <img className="near-img mini-img" src={nearImg} alt="" />
                  <p className="nft-price-floor"> 8 </p>
                </div>
              </div>
            </div>
            <div className="cells">
              <div className="table-wraps">
                <p className="one-g-text no-margin">
                  VOLUME<span className="hour-wrap">24h</span>
                </p>
                <div className="nft-row-wrap row-center">
                  <img className="near-img mini-img" src={nearImg} alt="" />
                  <p className="nft-price-floor"> 0 </p>
                </div>
              </div>
            </div>
            <div className="cells">
              <p className="red-button">VISIT</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="top-gap"></Grid>
        <Grid item xs={12} sm={6} md={8} lg={8} className="no-gap">
          <div className="page-title ">
            <h1 className="title">NFTs in collection</h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className="no-gap">
          <OutlinedInput
            className="nft-search"
            placeholder="Search"
            className="stake-input"
            width="70%"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <SearchIcon className="search-icon" />
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="nft-row-wraps no-gap">
          <div className="row-item">
            <img src={filterIcon} alt="" />
            <p className="filter-by"> Filter by</p>
            <div className="attributes">Attributes</div>
          </div>
          <div className="row-item">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
              <path
                d="M13.0331 2.83037C13.3495 2.83037 13.611 3.0655 13.6524 3.37056L13.6581 3.45537L13.658 13.2887L15.9882 10.9492C16.2317 10.7045 16.6274 10.7036 16.8721 10.9471C17.0945 11.1685 17.1154 11.5157 16.9345 11.7608L16.8741 11.831L13.476 15.2449C13.4555 15.265 13.4346 15.2833 13.4126 15.3001L13.476 15.2449C13.4453 15.2757 13.4122 15.3026 13.3774 15.3257C13.3652 15.3333 13.3525 15.341 13.3396 15.3483C13.3276 15.3556 13.3154 15.3619 13.303 15.3678C13.2908 15.3732 13.2784 15.3787 13.2659 15.3837C13.2499 15.3906 13.2335 15.3964 13.2169 15.4014C13.2071 15.4041 13.1971 15.4069 13.187 15.4094C13.169 15.4144 13.151 15.4181 13.1328 15.421C13.1242 15.422 13.1153 15.4232 13.1063 15.4243C13.0858 15.4271 13.0654 15.4285 13.0451 15.4289C13.0411 15.4285 13.0371 15.4285 13.0331 15.4285L13.0209 15.4289C13.0005 15.4285 12.9802 15.4271 12.9599 15.4247L13.0331 15.4285C12.999 15.4285 12.9656 15.4258 12.9331 15.4206C12.915 15.4181 12.8969 15.4144 12.879 15.4098C12.8695 15.407 12.86 15.4043 12.8506 15.4015C12.8327 15.3965 12.8149 15.3902 12.7974 15.383C12.7878 15.3786 12.7785 15.3746 12.7694 15.3703C12.755 15.3642 12.7405 15.3568 12.7264 15.3488C12.7136 15.341 12.701 15.3333 12.6886 15.3251C12.679 15.3194 12.6695 15.3127 12.6602 15.3058L12.6535 15.3001C12.6316 15.2833 12.6107 15.265 12.5911 15.2455L12.59 15.2449L9.19188 11.831C8.94837 11.5864 8.94929 11.1906 9.19393 10.9471C9.41633 10.7258 9.76359 10.7064 10.0078 10.8885L10.0778 10.9492L12.408 13.2904L12.4081 3.45537C12.4081 3.11019 12.6879 2.83037 13.0331 2.83037ZM4.75938 0.569072L4.77156 0.568726C4.79192 0.569117 4.81228 0.570498 4.83253 0.572868L4.75938 0.569072C4.79343 0.569072 4.82684 0.571795 4.85941 0.577034C4.87723 0.579469 4.89511 0.583149 4.91284 0.587617C4.92326 0.590674 4.93388 0.593656 4.94439 0.596907C4.9608 0.601534 4.97668 0.607158 4.99236 0.613442C5.0037 0.618489 5.01517 0.623506 5.02647 0.628851C5.03989 0.634654 5.0531 0.641483 5.06611 0.648814C5.07725 0.655673 5.08828 0.662355 5.09908 0.669361C5.11019 0.675968 5.12132 0.683701 5.13224 0.691837L5.20244 0.75269L8.60059 4.16658C8.8441 4.41122 8.84318 4.80695 8.59854 5.05046C8.37614 5.27184 8.02888 5.29121 7.78462 5.1091L7.71466 5.04842L5.38383 2.70623L5.38438 12.5422C5.38438 12.8874 5.10456 13.1672 4.75938 13.1672C4.44297 13.1672 4.18147 12.9321 4.14009 12.627L4.13438 12.5422L4.13383 2.70706L1.80429 5.04842C1.58291 5.27082 1.23574 5.29179 0.990647 5.11081L0.920409 5.05046C0.698008 4.82908 0.677034 4.48191 0.858013 4.23682L0.918366 4.16658L4.31651 0.75269L4.35332 0.718943C4.36196 0.711549 4.3708 0.704388 4.37985 0.697468L4.31651 0.75269C4.34717 0.721889 4.38024 0.694953 4.41512 0.671882C4.42728 0.664302 4.43993 0.656563 4.45286 0.649271C4.46487 0.642034 4.47708 0.635684 4.48944 0.629764C4.50164 0.624363 4.51402 0.618912 4.52661 0.61386C4.54259 0.607024 4.55899 0.601236 4.57555 0.596152C4.58563 0.593445 4.59595 0.59056 4.60638 0.587936C4.62317 0.583325 4.64014 0.579799 4.65721 0.576984C4.66747 0.5757 4.67753 0.5743 4.68767 0.573142C4.70696 0.570492 4.72675 0.569149 4.74656 0.568742C4.75093 0.569115 4.75515 0.569072 4.75938 0.569072Z"
                fill="#d77e7e"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_376_9357"
                  x1="16.3761"
                  y1="13.6691"
                  x2="0.747688"
                  y2="12.712"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#04AD79"></stop>
                  <stop offset="1" stop-color="#00AE76"></stop>
                </linearGradient>
              </defs>
            </svg>
            <p className="filter-by">Sort by</p>
            <FormControl variant="filled" className="selector">
              <Select labelId="demo-simple-select-outlined-label" label="Age" placeholder="Select" value={10}>
                <MenuItem value={10}>Rarity Rank</MenuItem>
                <MenuItem value={20}>Price</MenuItem>
                <MenuItem value={30}>Rarity Rank</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="no-gap">
          <Grid container className="nft-header" spacing={4}>
            <CollectionCardV3 
              handleClickOpen={handleClickOpen} 
              cardImage={nftImg1} 
              rankNo="4" 
              itemNo="252" />
            <CollectionCardV3 
              handleClickOpen={handleClickOpen} 
              cardImage={nftImg4} 
              rankNo="4" 
              itemNo="252" />
            <CollectionCardV3 
              handleClickOpen={handleClickOpen} 
              cardImage={nftImg2} 
              rankNo="4" 
              itemNo="252" />
            <CollectionCardV3 
              handleClickOpen={handleClickOpen} 
              cardImage={nftImg3} 
              rankNo="4" 
              itemNo="252" />
            <CollectionCardV3 
              handleClickOpen={handleClickOpen} 
              cardImage={nftImg3} 
              rankNo="4" 
              itemNo="252" />
            <CollectionCardV3 
              handleClickOpen={handleClickOpen} 
              cardImage={nftImg3} 
              rankNo="4" 
              itemNo="252" />
          </Grid>
        </Grid>
        <Grid item sx={12} md={12} lg={12} className="no-gap">
          <div className="nft-pagenation no-gap">
            <div className="arrow-button red-buttons">1</div>
            <div className="arrow-button">299</div>
            <div className="arrow-button">
              <img className="icon-imgs" src={arrowIcon} alt="" />
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="footer">
            <p>Copyright © 2021 NFTsniper. All rights reserved.</p>
          </div>
        </Grid>
      </Grid>
      
      {/* <DialogModal 
        handleClose={handleClose}
        open={open}
        cardImg={nCardImg}
        cardTitle={nCardTitle}
        cardRank={nCardRank}
        cardOwner={nCardOwner} /> */}

      {/* <Dialog fullWidth={true} maxWidth={"md"} onClose={handleClose} open={open}>
        <div className="diag-wrap" style={{ padding: "16px" }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4} className="diag-item">
              <img className="diag-img" style={{ width: "100%", borderRadius: "10px" }} src={nftImg1} alt="" />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              className="diag-item"
              style={{ paddingLeft: "3%", paddingRight: "3%" }}
            >
              <p style={{ color: "#5599BB", fontSize: "20px" }}>Portals | Vision #46</p>
              <p style={{ color: "#999BA6", fontSize: "14px" }}>
                Rarity Rank: <span style={{ color: "white" }}> #1</span>
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "solid 0.5px #999ba640" }}>
                <p style={{ color: "#999BA6", fontSize: "14px" }}>
                  Owner: <span style={{ color: "white", textDecoration: "underline" }}> 3D49W23Bh4r</span>
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
                <div className="table-row ">
                  <div className="cell-one cells normal-font">Unit Type</div>
                  <div className="cell-two cells"> Vision </div>
                  <div className="cell-three cells"> 1.5 % </div>
                </div>
                <div className="table-row ">
                  <div className="cell-one cells normal-font">Unit Number</div>
                  <div className="cell-two cells"> 46 </div>
                  <div className="cell-three cells"></div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Dialog> */}

    </div>
  );
}

export default Collection;
