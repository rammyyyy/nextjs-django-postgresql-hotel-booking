import { Cinzel } from 'next/font/google'

const cinzel400 = Cinzel({ subsets: ['latin'], weight: '400'})

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg shadow p-3 bg-body-tertiary sticky-top">
			<div className="container-fluid">
				<a className={`navbar-brand ${cinzel400.className} fs-2`} href="#">H M S</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto p-2">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">HOME</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/gallery">GALLERY</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/services">SERVICES</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/about">ABOUT</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact">CONTACT</a>
						</li>
						<li className="nav-item">
							<a className="btn bg ms-4" href="/user/signin">BOOK NOW</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
