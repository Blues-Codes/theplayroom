

const BackgroundImg = ({ children }) => {
    return (
      <div style={{ backgroundImage: "url('../images/Playroombackground.jpg')", height: "100vh", backgroundSize: "cover" }}>
        {children}
      </div>
    );
  };
  
  export default BackgroundImg;