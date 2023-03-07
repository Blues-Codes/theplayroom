import { Link } from "react-router-dom";
import PlayroomLinked from "../images/playroomlinked.png"

function GamesBackground() {


    return (
      <div className="clickable">
        <div className="clickable-areas">
          <Link className="leftbookcase" to="/games/storytime"></Link>
          <Link className="shapebox" to='/games/shapes'></Link>
          <Link className="horizontaleasel" to="/games/tracing"></Link>
          <Link className="verticaleasel" to="/games/painting"></Link>
          <Link className="wallalphabet" to="/games/alphabet"></Link>
          <Link className="window" to="/games/weather"></Link>
        </div>
      </div>
    );
  }
  
  const GamesBackgroundImg = ({ children }) => {
    return (
      <div style={{ backgroundImage: "url'../images/playroomlinked.png')", height: "100vh", backgroundSize: "cover" }}>
        {children}
        <div>
        <div className="clickable">
           <PlayroomLinked />
        </div>
        </div>
      </div>
    );
  };
  
  export default BackgroundImg;