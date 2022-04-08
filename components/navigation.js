import Link from "next/link";

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container-fluid">
				<Link href="/">
					<a className="navbar-brand" href="#">
						Exoplanets Gallery
					</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link href="/gallery">
								<a
									className="nav-link"
									aria-current="page"
									href="#"
								>
									Gallery
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/about">
								<a className="nav-link" href="#">
									About me
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/journal">
								<a className="nav-link" href="#">
									Journal
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
