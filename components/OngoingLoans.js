import React from 'react';

export default function OngoingLoans({ month }) {
	return (
		<li className="ongoing-loan">
			<div className="ongoing-loan_desc">
				<div className="ongoing-loan_date">
					<span>{month}</span> 26, 2022
				</div>
				<div className="ongoing-loan_amount">
					<span className="naira">N</span>196,000.56
				</div>
			</div>
			<div className="ongoing-loan_btn">Paid</div>
		</li>
	);
}
