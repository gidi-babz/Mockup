import Link from 'next/link';

export default function HeadingButtons() {
	return (
		<div className="heading--btn">
			<Link href="/">
				<div className="payment">Make a payment</div>
			</Link>
			<Link href="/">
				<div className="liquidate">Liquidate loan</div>
			</Link>
		</div>
	);
}
