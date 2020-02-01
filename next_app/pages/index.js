import Link from 'next/link';
import Header from '../comps/Header';
import Layout from '../comps/MyLayout';
const { Button, ButtonGroup, DropDownButton, DropDownButtonItem,
  SplitButton, SplitButtonItem, Toolbar, ToolbarItem } = require('@progress/kendo-react-buttons');


export default function Index() {
  return (
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
  );
}