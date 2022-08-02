const Result = () => {
	return (
		<div className="result border">
			<h3 className="heading result-padding">Your Salary</h3>
			<div className="flex-between result-padding">
				<h6 className="body-text-semibold-lighter">Items</h6>
				<h6 className="body-text-semibold-lighter">Amount</h6>
			</div>
			<div className="salary-details body-text flex-between result-padding">
				<p>Basic Salary</p>
				<p>100,000</p>
			</div>
			<div className="salary-details body-text flex-between result-padding">
				<p>Gross Earning</p>
				<p>30,000</p>
			</div>
			<div className="salary-details body-text flex-between result-padding">
				<p>Gross Deduction</p>
				<p>5,000</p>
			</div>
			<div className="salary-details body-text flex-between result-padding">
				<p>Employee EPF (8%)</p>
				<p>8,800</p>
			</div>
			<div className="net-salary body-text flex-between border margin-top">
				<h5 className="body-text-semibold padding-top padding-left-right">
					Net Salary (Take Home)
				</h5>
				<h5 className="body-text-semibold padding-top padding-left-right">116,200</h5>
			</div>
			<h6 className="body-text-semibold-lighter result-padding">Contribution from the Employer</h6>
			<div className="salary-details body-text flex-between  result-padding">
				<p>Employer EPF (12%)</p>
				<p>13,200</p>
			</div>
			<div className="salary-details body-text flex-between result-padding">
				<p>Employer ETF (3%)</p>
				<p>3,300</p>
			</div>
			<div className="salary-details body-text flex-between padding-top result-padding">
				<p>CTC (Cost to Company)</p>
				<p>141,500</p>
			</div>
		</div>
	);
};

export default Result;
