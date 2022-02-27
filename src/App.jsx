import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState, useCallback } from "react";
import { Route, Switch, useLocation } from "react-router-dom"; 
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useTheme from "./hooks/useTheme"; 
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import NavDrawer from "./components/Sidebar/NavDrawer.jsx"; 
import NotFound from "./views/404/NotFound"; 
import { dark as darkTheme } from "./themes/dark.js"; 
import "./style.scss"; 
import Home from "./views/Home/Home";
import Calendar from "./views/Calendar/Calendar";
import Collection from "./views/Collection/Collection";  

const drawerWidth = 280;
const transitionDuration = 969;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: transitionDuration,
    }),
    height: "100%",
    overflow: "auto",
    marginLeft: drawerWidth + 20,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: transitionDuration,
    }),
    marginLeft: 0,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

function App() {
  // useSegmentAnalytics(); 
  const [theme, toggleTheme, mounted] = useTheme();
  const location = useLocation(); 
  const classes = useStyles();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmallerScreen = useMediaQuery("(max-width: 980px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarExpanded(false);
  }; 

  useEffect(() => {
    if (isSidebarExpanded) handleSidebarClose();
  }, [location]);
   
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> 
      <div className={`app ${isSmallerScreen && "tablet"} ${isSmallScreen && "mobile"} ${theme}`}>
        {/* <Messages /> */}
        <TopBar theme={theme} toggleTheme={toggleTheme} handleDrawerToggle={handleDrawerToggle} />
        <nav className={classes.drawer}>
          {isSmallerScreen ? (
            <NavDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
          ) : (
            <Sidebar theme={theme}/>
          )}
        </nav>

        <div className={`${classes.content} ${isSmallerScreen && classes.contentShift}`}>
          <Switch> 
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/calendar">
              <Calendar />
            </Route>
            <Route exact path="/collection">
              <Collection />
            </Route>  
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
