import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import SniperIcon from "../../assets/nftimages/logo.png";
import DiscordIcon from "../../assets/nftimages/images-discord-button.svg";
import { Paper, Link, Box, Typography, SvgIcon } from "@material-ui/core";
import "./sidebar.scss";
import HomeIcon from '@material-ui/icons/Home';
import OpacityIcon from '@material-ui/icons/Opacity';

function NavContent({ theme: theme }) {
  const [isActive] = useState();


  const checkPage = useCallback((match, location, page) => {
    const currentPath = location.pathname.replace("/", "");
    if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") {
      return true;
    }
    if (currentPath.indexOf("stake") >= 0 && page === "stake") {
      return true;
    }
    if ((currentPath.indexOf("bonds") >= 0 || currentPath.indexOf("choose_bond") >= 0) && page === "bonds") {
      return true;
    }
    return false;
  }, []);

  console.log('debug theme', theme)
  return (
    <Paper className="dapp-sidebar">
      <Box className="dapp-sidebar-inner" display="flex" justifyContent="space-between" flexDirection="column">
        <div className="dapp-menu-top">
          <Box className="branding-header" style={{ height: "250px" }}>
            <Link href="/" target="_blank">
              {
                theme === "dark" ?
                  <>
                    <img src={SniperIcon} width={200} alt="logo" />
                  </>
                  :
                  <>
                    <img src={SniperIcon} width={200} alt="logo" />
                  </>
              }
            </Link>

          </Box>

          <div className="dapp-menu-links">
            <div className="dapp-nav" id="navbarNav">
              <Link
                component={NavLink}
                id="dash-nav"
                to="/"
                isActive={(match, location) => {
                  return checkPage(match, location, "presale");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <HomeIcon />
                  HOME
                </Typography>
              </Link>

              <Link
                component={NavLink}
                id="dash-nav"
                to="/collection"
                isActive={(match, location) => {
                  return checkPage(match, location, "claim");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <OpacityIcon />
                  UPCOMING DROPS
                </Typography>
              </Link>

              <Link
                component={NavLink}
                id="dash-nav"
                to="/calendar"
                isActive={(match, location) => {
                  return checkPage(match, location, "dashboard");
                }}
                className={`button-dapp-menu ${isActive ? "active" : ""}`}
              >
                <Typography variant="h6">
                  <SvgIcon color="primary" component={DashboardIcon} />
                  SERVICES & ADS
                </Typography>
              </Link>
              <Link
                component={NavLink}
                id="dash-nav"
                to="/"
                isActive={(match, location) => {
                  return checkPage(match, location, "dashboard");
                }}
              >
                <Typography variant="h6" className="red-button">
                  SUBMIT COLLECTION
                </Typography>
              </Link>
              <Link
                component={NavLink}
                id="dash-nav"
                to="/"
                isActive={(match, location) => {
                  return checkPage(match, location, "dashboard");
                }}
              >
                <Typography className="blue-button">
                  <img src={DiscordIcon} className="discord-img" alt="" />
                </Typography>
              </Link>

            </div>
          </div>
        </div>

      </Box>
    </Paper>
  );
}

export default NavContent;
