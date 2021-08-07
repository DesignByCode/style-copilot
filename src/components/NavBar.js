import React, { useEffect, useState } from 'react'

const NavBar = () => {
	const [open, setOpen] = useState(false)

	const handleToggle = () => setOpen((prevOpen) => !open)

	useEffect(() => {
		// let resizeListener = window.addEventListener('resize', () => {
		// 	setOpen(false)
		// })
		//
		// return () => {
		// 	window.removeEventListener(resizeListener)
		// }
	}, [])

	return (
		<nav className="nav nav--fixed">
			<div className="nav__wrapper">
				<div className="nav__brand">
					<a href="#">Style-Copilot</a>
				</div>
				<button className="nav__toggle" onClick={handleToggle}>
					<svg xmlns="http://www.w3.org/2000/svg" className="txt--gray-100" viewBox="0 0 20 20" fill="currentColor">
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				{/*<div className="flex--end"></div>*/}
				<div className={`nav__responsive justify--end  ${open ? 'open' : ''}`}>
					<ul className="nav__links">
						<li className="nav__link">
							<a href="#@">HOME</a>
						</li>
						<li className="nav__link">
							<a href="#@">ABOUT</a>
						</li>
						<li className="nav__link">
							<a href="#@">SERVICES</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
