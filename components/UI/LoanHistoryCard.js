import React from 'react';

export default function LoanHistoryCard({
	balance,
	month,
	year,
	status,
	approved,
}) {
	return (
		<div className="loan-history_details">
			<div className="loan-history_details-amount">
				<span className="naira">N</span>
				<span>{balance}</span>
			</div>

			<div className="stats">
				<div className="stats-desc">
					<p className="stats-title">interest rate</p>
					<p className="stats-value">45%</p>
				</div>
				<div className="stats-desc">
					<p className="stats-title">1st payment</p>
					<p className="stats-value">
						Jan 26, <span>{year}</span>
					</p>
				</div>
				<div className="stats-desc">
					<p className="stats-title">Loan duration</p>
					<p className="stats-value">
						<span>{month}</span> months
					</p>
				</div>
			</div>

			<div className="status">
				<span className="status-text">Status:</span>
				<div className={approved ? 'status-label-ok' : 'status-label'}>
					{status}
				</div>
			</div>
		</div>
	);
}
