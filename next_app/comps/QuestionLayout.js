const layoutStyle = {
  textAlign:'center',
  fontSize: '10vh',
  color:'dimgray',
  fontFamily:"Trebuchet MS",
  margin: '5vh',
  marginTop: '25vh'
};

const Layout = props => (
  <div style={layoutStyle}>
   {props.children}
  </div>
);

export default Layout;