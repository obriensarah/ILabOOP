import Link from 'next/link';

const layoutStyle = {
  backgroundColor: 'gray',
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
    <Link href = "/nextq">
      <button style={layoutStyle}>Next</button>
    </Link>
  </div>
);

export default Layout;