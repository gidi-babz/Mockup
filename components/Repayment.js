import React from 'react';
import OngoingLoans from './OngoingLoans';

export default function Repayment() {
	return (
		<div className="repayment-schedule">
			<h4>Repayment schedule</h4>
			<p className="repayment_subtext">Showing schedule for ongoing loan</p>
			<ul className="loans">
				<OngoingLoans month="Jan" />
				<OngoingLoans month="Feb" />
				<OngoingLoans month="Mar" />
				<OngoingLoans month="Apr" />
				<OngoingLoans month="May" />
				<OngoingLoans month="Jun" />
				<OngoingLoans month="Jul" />
				<OngoingLoans month="Aug" />
				<OngoingLoans month="Sep" />
				<OngoingLoans month="Oct" />
				<OngoingLoans month="Nov" />
				<OngoingLoans month="Dec" />
			</ul>
		</div>
	);
}
