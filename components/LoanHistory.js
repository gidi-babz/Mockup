import React from 'react';
import LoanHistoryCard from './UI/LoanHistoryCard';

export default function LoanHistory() {
	return (
		<div className="loan-history">
			<h4>Loan History</h4>
			<div className="loan-history_cards">
				<div className="loan-history_card">
					<LoanHistoryCard
						balance="2,000,000.00"
						month="6"
						year="2022"
						status="Ongoing"
					/>
				</div>
				<div className="loan-history_card-2">
					<LoanHistoryCard
						balance="5,000,000.00"
						month="12"
						year="2021"
						status="Approved"
						approved={true}
					/>
				</div>
			</div>
		</div>
	);
}
