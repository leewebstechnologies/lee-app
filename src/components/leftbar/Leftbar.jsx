import { HomeOutlined } from "@mui/icons-material";
import Menulink from "../menulink/Menulink";
import "./leftbar.css";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
       <Menulink icon={<HomeOutlined />} text="Homepage" />
      </div>
    </div>
  );
};

export default Leftbar;
