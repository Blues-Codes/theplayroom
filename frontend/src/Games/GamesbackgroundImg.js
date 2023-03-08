import { Link } from "react-router-dom";
import PlayroomLinked from "../images/playroomlinked.png";
import { useState, useEffect } from "react";

function GamesBackground() {

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <>
      {showBackground &&
        <GamesBackgroundImg>
          <div className="clickable-areas">
            <Link className="leftbookcase" to="/games/storytime" coords=" -413.51,18.90,-306.92,12.10"></Link>
            <Link className="shapebox" to='/games/shapes' coords="-143.63,311.45,84.67,309.94"></Link>
            <Link className="horizontaleasel" to="/games/tracing" coords="-117.17,6.05,16.63, 7.56"></Link>
            <Link className="verticaleasel" to="/games/painting" coords=" -213.18,-65.01,-147.41,-66.52"></Link>
            <Link className="wallalphabet" to="/games/alphabet" coords=" 325.82,-9.83,530.68,-8.32"></Link>
            <Link className="window" to="/games/weather" coords="25.70,130.02,312.21,-127.76"></Link>
          </div>
        </GamesBackgroundImg>
      }
    </>
  );
}
const GamesBackgroundImg = ({ children }) => {
  return (
    <div className="clickable" style={{ backgroundImage:`url(${PlayroomLinked})`, height: "100vh", backgroundSize: "cover" }}>
      {children}
    </div>
  );
};

export default GamesBackground;