const layoutStyle = {
  backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    borderRadius: '50%'
};

const Layout = props => (
  <div>
    <button style={layoutStyle}>Next</button>
  </div>
);

export default Layout;