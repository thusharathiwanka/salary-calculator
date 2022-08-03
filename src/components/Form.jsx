import { useContext } from "react";

import { SalaryContext } from "../contexts/SalaryContext";

const Form = () => {
	const { salary, setSalary } = useContext(SalaryContext);

	return (
		<form className="form border">
			<div className="header flex-between">
				<h3 className="heading">Calculate Your Salary</h3>
				<button className="flex-between button">
					<img src="/assets/reset.png" alt="reset-icon" className="button-img" />
					Reset
				</button>
			</div>
			<div className="basic-salary">
				<h5 className="body-text-semibold">Basic Salary</h5>
				<input
					type="number"
					name="basic-salary"
					id="basic-salary"
					className="body-text"
					value={salary.basicSalary}
					onChange={e => setSalary({ ...salary, basicSalary: e.target.value })}
				/>
			</div>
			<div className="earnings">
				<h5 className="body-text-semibold padding-top">Earnings</h5>
				<p className="body-text-small">Allowance, Fixed Allowance, Bonus and etc.</p>
				<div className="input-container">
					<input type="number" name="earning" id="earning" className="body-text" />
					<button className="remove-button button">
						<img src="/assets/remove.png" alt="remove-icon" />
					</button>
					<div className="flex-center checkbox-container">
						<input type="checkbox" id="epf-etf" name="epf-etf" />
						<label htmlFor="epf-etf">EPF/ETF</label>
					</div>
				</div>
				<button className="flex-between button">
					<img src="/assets/plus.png" alt="plus-icon" className="button-img" />
					Add New Allowance
				</button>
			</div>
			<hr className="divider" />
			<div className="deductions">
				<h5 className="body-text-semibold padding-top">Deductions</h5>
				<p className="body-text-small">Salary Advances, Loan Deductions and all</p>
				<div className="input-container">
					<input type="number" name="deduction" id="deduction" className="body-text" />
					<button className="remove-button button">
						<img src="/assets/remove.png" alt="remove-icon" />
					</button>
				</div>
				<button className="flex-between button">
					<img src="/assets/plus.png" alt="plus-icon" className="button-img" />
					Add New Deduction
				</button>
			</div>
		</form>
	);
};

export default Form;
