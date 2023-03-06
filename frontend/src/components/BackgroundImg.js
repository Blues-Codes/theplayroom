import { Link } from "react-router-dom";


function Background() {


  return (
    <div className="clickable">
      <div className="clickable-areas">
        <Link className="leftbookcase" to=""></Link>
        <Link className="shapebox" to=''></Link>
        <Link className="horizontaleasel" to="/tracing"></Link>
        <Link className="verticaleasel" to="/painting"></Link>
        <Link className="wallalphabet" to=""></Link>
        <Link className="window" to=""></Link>
      </div>
    </div>
  );
}

const BackgroundImg = ({ children }) => {
    return (
      <div style={{ backgroundImage: "url('../images/Playroombackground.jpg')", height: "100vh", backgroundSize: "cover" }}>
        {children}
        <div>
        <div className="clickable">
            <Background />
        </div>
        </div>
      </div>
    );
  };
  
  export default BackgroundImg;