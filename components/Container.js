import Navigation from "./navigation";
import Head from "next/head";

const Container = (props) => {
	return (
		<div>
			<Head>
				<title> My Exoplanets Blog </title>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
				/>
			</Head>
			<Navigation />
			<div className="container py-4">{props.children}</div>
		</div>
	);
};

export default Container;
