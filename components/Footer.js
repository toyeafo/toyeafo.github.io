import React from 'react';
import Link from 'next/link'

// export const Contact = ({ title, description, buttons }) => {
// 	return (
// 		<div id="contact" className="bg-white py-5 px-5">
// 			<div className="container">
// 				<h1 className="text-primary fw-bold">{title}</h1>
// 				<div className="px-sm-5">
// 					<p>{description}</p>
// 					<div className="">
// 						{buttons.map((value, index) => (
// 							(value.isPrimary) ?
// 								<Link key={index} href={value.link}>
// 									<a className="btn btn-primary my-1 mx-3">
// 										{value.title}
// 									</a>
// 								</Link>
// 								:
// 								<Link key={index} href={value.link}>
// 									<a className="btn btn-outline-primary my-1 mx-3">
// 										{value.title}
// 									</a>
// 								</Link>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

export const Contact = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">Education & Certifications</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			{/* <div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div> */}
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				<small>&copy; 2024 {" "}
					<Link href="https://github.com/toyeafo">
						<a>toyeafo</a>
					</Link>
					. Open sourced with love under {" "}
					<Link href="https://github.com/toyeafo/toyeafo.github.io/LICENSE">
						<a>MIT</a>
					</Link>
					{" "} License
				</small>
			</div>
		</footer>
	);
}