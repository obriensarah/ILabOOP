import NextButtonLayout from './NextButtonLayout'
import PrevButtonLayout from './PrevButtonLayout'
import EscButtonLayout from './EscButtonLayout'

const layoutStyle = {
  textAlign:'center'
};

const Layout = props => (
  <div style={layoutStyle}>
    {props.children}
    <PrevButtonLayout />
    <NextButtonLayout />
    <EscButtonLayout />
  </div>
);

export default Layout;