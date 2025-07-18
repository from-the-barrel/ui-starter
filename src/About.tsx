import logo from "/FTB_WHITE.svg";

const About = () => {
  return (
    <div style={{ paddingLeft: "30%", paddingRight: "30%" }}>
      <div>
        From The Barrel is a socialist publishing house dedicated to
        (re)circulating militant texts that can decisively guide the movement to
        establish popular power. Our work is oriented by the necessity to
        creatively apply revolutionary theory to our concrete conditions.
      </div>
      <div
        className="logo-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          style={{
            maxWidth: "30%",
            height: "auto",
            paddingTop: "30px",
          }}
        />
      </div>
      {/* <div>
        <img
          src="/liberacion.png"
          style={{
            display: "block",
            maxWidth: "70%",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "20px",
          }}
        ></img>
      </div> */}
    </div>
  );
};

export default About;
