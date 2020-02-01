import Link from 'next/link';

const layoutStyle = {
  backgroundColor: 'red',
    border: 'none',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '3vh',
    borderRadius: '50%',
    width:'10vw',
    margin: '5vh',
    fontFamily: "Trebuchet MS"
};

const Layout = props => (
  <div style={{display:'inline-block'}}>
    <button id="esc" style={layoutStyle}>Escape</button>
  </div>
);

function Close() {
  window.location.replace('google.com');
  // console.log("closing.");
}

export default Layout;