import useMediaQuery from "@material-ui/core/useMediaQuery";

const drawerWidth = 280;
const transitionDuration = 969;
const isVerySmallScreen = useMediaQuery("(max-width: 400px)"); 

export {
    drawerWidth,
    isVerySmallScreen,
    transitionDuration
};