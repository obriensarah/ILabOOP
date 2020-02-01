import NextButtonLayout from './NextButtonLayout'
import PrevButtonLayout from './PrevButtonLayout'

const layoutStyle = {
  textAlign:'center'
};

const Layout = props => (
  <div style={layoutStyle}>
    {props.children}
    <PrevButtonLayout />
    <NextButtonLayout />
  </div>
);

export default Layout;