import { useContext } from "react";

import { SalaryContext } from "../contexts/SalaryContext";

const Result = () => {
	const { salary } = useContext(SalaryContext);

	return (
		<div className="result border">
			<h3 className="heading result-padding">Your Salary</h3>
			<div className="flex-between result-padding">
				<h6 className="body-text-semibold-lighter">Items</h6>
				<h6 className="body-text-semibold-lighter">Amount</h6>
			</div>
			<div className="salary-details body-text flex-between result-padding">
				<p>Basic Salary</p>
				<p>{salary.basicSalary ? salary.basicSalary.toFixed(2) : "0.00"}</p>
			</div>
			<div className="salary-details body-text flex-between result-padding">
				<p>Gross Earning</p>
				<p>{salary.grossEarning ? salary.grossEarning.toFixed(2) : "0.00"}</p>
			</div>
			<div className="salary-details body-text flex-between result-padding">
				<p>Gross Deduction</p>
				<p>{salary.grossDeduction ? salary.grossDeduction.toFixed(2) : "0.00"}</p>
			</div>
			<div className="salary-details body-text flex-between result-padding">
				<p>Employee EPF (8%)</p>
				<p>{salary.employeeEpf ? salary.employeeEpf.toFixed(2) : "0.00"}</p>
			</div>
			<div className="net-salary body-text flex-between border margin-top">
				<h5 className="body-text-semibold padding-top padding-left-right">
					Net Salary (Take Home)
				</h5>
				<h5 className="body-text-semibold padding-top padding-left-right">
					{salary.netSalary ? salary.netSalary.toFixed(2) : "0.00"}
				</h5>
			</div>
			<h6 className="body-text-semibold-lighter result-padding">Contribution from the Employer</h6>
			<div className="salary-details body-text flex-between  result-padding">
				<p>Employer EPF (12%)</p>
				<p>{salary.employerEpf ? salary.employerEpf.toFixed(2) : "0.00"}</p>
			</div>
			<div className="salary-details body-text flex-between result-padding">
				<p>Employer ETF (3%)</p>
				<p>{salary.employerEtf ? salary.employerEtf.toFixed(2) : "0.00"}</p>
			</div>
			<div className="salary-details body-text flex-between padding-top result-padding">
				<p>CTC (Cost to Company)</p>
				<p>{salary.costToCompany ? salary.costToCompany.toFixed(2) : "0.00"}</p>
			</div>
		</div>
	);
};

export default Result;
