

const BackgroundImage = ({ children }) => {
    return (
      <div style={{ backgroundImage: "url('../components/Playroombackground')", height: "100vh", backgroundSize: "cover" }}>
        {children}
      </div>
    );
  };
  
  export default BackgroundImage;