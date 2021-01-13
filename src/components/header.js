import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { MenuItem, StyledHeader } from '../styles/components';

const Header = ({ siteTitle }) => (
	<StyledHeader>
		<Link to="/">
			<img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="Logo" />
		</Link>

		<nav>
			<ul>
				<MenuItem margin>
					<Link to="/">Products</Link>
				</MenuItem>

				<MenuItem margin>
					<a href="https://github.com/Irungaray" target="blank">
            About
					</a>
				</MenuItem>

				<MenuItem>
					<Link to="/cart">
						<span>
							<img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="Cart" />
						</span>
					</Link>
				</MenuItem>
			</ul>
		</nav>
	</StyledHeader>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: '',
};

export default Header;
