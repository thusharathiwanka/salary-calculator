import { useContext } from "react";

import { SalaryContext } from "../contexts/SalaryContext";

const Form = () => {
	const { salary, setSalary, earnings, setEarnings, deductions, setDeductions } =
		useContext(SalaryContext);

	const handleEarningsChange = (e, index) => {
		const newEarnings = [...earnings];
		newEarnings[index].amount = e.target.value;
		setEarnings(newEarnings);
		console.log(e.target.value);
		console.log(earnings);
	};

	const handleEpfEtfChange = index => {
		const newEarnings = [...earnings];
		newEarnings[index].epfEtf = !newEarnings[index].epfEtf;
		setEarnings(newEarnings);
		console.log(earnings);
	};

	const handleDeductionsChange = (e, index) => {
		const newDeductions = [...deductions];
		newDeductions[index].amount = e.target.value;
		setDeductions(newDeductions);
		console.log(deductions);
	};

	const addEarningRow = e => {
		e.preventDefault();
		const newRow = { amount: "", epfEtf: false };
		setEarnings([...earnings, newRow]);
	};

	const removeEarningRow = (e, index) => {
		e.preventDefault();
		const newEarnings = [...earnings];
		newEarnings.splice(index, 1);
		setEarnings(newEarnings);
	};

	const addDeductionRow = e => {
		e.preventDefault();
		const newRow = { amount: "" };
		setDeductions([...deductions, newRow]);
	};

	const removeDeductionRow = (e, index) => {
		e.preventDefault();
		const newDeductions = [...deductions];
		newDeductions.splice(index, 1);
		setDeductions(newDeductions);
	};

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
				{earnings.map((earning, index) => (
					<div className="input-container" key={index}>
						<input
							type="number"
							name="amount"
							className="body-text"
							value={earning.amount}
							onChange={e => handleEarningsChange(e, index)}
						/>
						<button className="remove-button button" onClick={e => removeEarningRow(e, index)}>
							<img src="/assets/remove.png" alt="remove-icon" />
						</button>
						<div className="flex-center checkbox-container">
							<input
								type="checkbox"
								name="epfEtf"
								value={earning.isIncluded}
								checked={earning.isIncluded}
								onChange={() => handleEpfEtfChange(index)}
							/>
							<label htmlFor="epf-etf">EPF/ETF</label>
						</div>
					</div>
				))}
				<button className="flex-between button" onClick={e => addEarningRow(e)}>
					<img src="/assets/plus.png" alt="plus-icon" className="button-img" />
					Add New Allowance
				</button>
			</div>
			<hr className="divider" />
			<div className="deductions">
				<h5 className="body-text-semibold padding-top">Deductions</h5>
				<p className="body-text-small">Salary Advances, Loan Deductions and all</p>
				{deductions.map((deduction, index) => (
					<div className="input-container" key={index}>
						<input
							type="number"
							name="deduction"
							id="deduction"
							className="body-text"
							value={deduction.amount}
							onChange={e => handleDeductionsChange(e, index)}
						/>
						<button className="remove-button button" onClick={e => removeDeductionRow(e, index)}>
							<img src="/assets/remove.png" alt="remove-icon" />
						</button>
					</div>
				))}
				<button className="flex-between button" onClick={e => addDeductionRow(e)}>
					<img src="/assets/plus.png" alt="plus-icon" className="button-img" />
					Add New Deduction
				</button>
			</div>
		</form>
	);
};

export default Form;
