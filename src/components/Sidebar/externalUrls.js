 
import { ReactComponent as DocsIcon } from "../../assets/icons/docs.svg"; 
import { SvgIcon } from "@material-ui/core"; 

const externalUrls = [
  {
    title: "Docs",
    label: "",
    icon: <SvgIcon color="primary" component={DocsIcon} />,
    url: "/",
  },
];

export default externalUrls;
