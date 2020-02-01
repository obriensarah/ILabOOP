import Link from 'next/link';
import Header from '../comps/Header';
import Layout from '../comps/MyLayout';

function OpenNewWindow() {
	window.open('/name');
}

export default function Index() {
  return (
  	<div>
	    <Layout>
	      <p>Hello Next.js</p>
	    </Layout>
	    <button onClick={OpenNewWindow}>Click me to go to form.</button>
    </div>
  );
}

