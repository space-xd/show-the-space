import Head from 'next/head'
import Nav from '../components/nav'
import "../public/css/components/AppLayout.css";

export default (props) => (
	<>
		<Head>
			<title>{props.title}</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<Nav />

		<div className='main'>
			{props.children}
		</div>
	</>
);

