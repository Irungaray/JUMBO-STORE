import React from 'react';
import { Link } from 'gatsby';

import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';

export default function thanks() {
	return (
		<div>
			<SEO title="Great purchase!" />

			<Purchase>
				<h2>Succesful Purchase!</h2>
				<p>Thanks for buying.</p>
				<p>Hope to see you again!</p>
				<span rol="img" aria-label="emoji">
          🙌
				</span>

				<Link to="/">
					<Button>Volver al catálogo</Button>
				</Link>
			</Purchase>
		</div>
	);
}