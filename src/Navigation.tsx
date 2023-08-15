import styles from "./Navigation.module.css";

type NavigationProps = {
	url: string;
	text: string;
};

const Navigation = () => {
	const links = [
		{
			url: "/",
			text: "Home",
		},
		{
			url: "/about-us",
			text: "About us",
		},
		{
			url: "/pricing",
			text: "Pricing",
		},
		{
			url: "/contact",
			text: "Contact",
		},
	];
	return (
		<nav aria-label="main">
			<ul className={styles.list} role="list">
				{links.map((link) => {
					const ariaCurrent = window.location.pathname === link.url ? "page" : undefined;
					return (
						<li>
							<a className={styles.link} href={link.url} aria-current={ariaCurrent}>
								{link.text}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
export default Navigation;
