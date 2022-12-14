import { useContext, useEffect, useState } from "react";

import { SalaryContext } from "../contexts/SalaryContext";

/**
 * Form component
 * @returns {JSX.Element} form - salary input form
 */
const Form = () => {
	const {
		salary,
		setSalary,
		earnings,
		setEarnings,
		deductions,
		setDeductions,
		calculateEarnings,
		calculateDeductions,
		calculateSalary,
	} = useContext(SalaryContext);

	const [trigger, setTrigger] = useState(false);

	/**
	 * Trigger calculations
	 */
	useEffect(() => {
		calculateEarnings();
		calculateDeductions();
		calculateSalary();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [trigger]);

	/**
	 * Handle earnings input change
	 * @param {Event} e
	 * @param {Number} index
	 */
	const handleEarningsChange = (e, index) => {
		const newEarnings = [...earnings];
		newEarnings[index].amount = e.target.value;
		setEarnings(newEarnings);
		setTrigger(!trigger);
	};

	/**
	 * Handle EPF/ETF checkbox input change
	 * @param {Number} index
	 */
	const handleEpfEtfChange = index => {
		const newEarnings = [...earnings];
		newEarnings[index].epfEtf = !newEarnings[index].epfEtf;
		setEarnings(newEarnings);
		setTrigger(!trigger);
	};

	/**
	 * Handle deductions input change
	 *  @param {Event} e
	 * @param {Number} index
	 */
	const handleDeductionsChange = (e, index) => {
		const newDeductions = [...deductions];
		newDeductions[index].amount = e.target.value;
		setDeductions(newDeductions);
		setTrigger(!trigger);
	};

	/**
	 * Handle add new input to earnings
	 * @param {Event} e
	 */
	const addEarningRow = e => {
		e.preventDefault();
		const newRow = { amount: "", epfEtf: false };
		setEarnings([...earnings, newRow]);
	};

	/**
	 * Handle remove input from earnings
	 * @param {Event} e
	 * @param {Number} index
	 */
	const removeEarningRow = (e, index) => {
		e.preventDefault();
		const newEarnings = [...earnings];
		newEarnings.splice(index, 1);
		setEarnings(newEarnings);
		setTrigger(!trigger);
	};

	/**
	 * Handle add new input to deductions
	 * @param {Event} e
	 */
	const addDeductionRow = e => {
		e.preventDefault();
		const newRow = { amount: "" };
		setDeductions([...deductions, newRow]);
	};

	/**
	 * Handle remove input from deductions
	 * @param {Event} e
	 * @param {Number} index
	 */
	const removeDeductionRow = (e, index) => {
		e.preventDefault();
		const newDeductions = [...deductions];
		newDeductions.splice(index, 1);
		setDeductions(newDeductions);
		setTrigger(!trigger);
	};

	/**
	 * Reset form to initial values
	 * @param {Event} e
	 */
	const resetForm = e => {
		e.preventDefault();
		setSalary({
			basicSalary: "",
			grossEarning: "",
			epfAllowedEarnings: "",
			grossDeduction: "",
			netSalary: "",
			employeeEpf: "",
			employerEpf: "",
			employerEtf: "",
			costToCompany: "",
		});
		setEarnings([{ amount: "", epfEtf: false }]);
		setDeductions([{ amount: "" }]);
	};

	return (
		<form className="form border">
			<div className="header flex-between">
				<h3 className="heading">Calculate Your Salary</h3>
				<button className="flex-between button" onClick={e => resetForm(e)}>
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
					value={salary.basicSalary ? salary.basicSalary : ""}
					onChange={e => {
						setSalary({ ...salary, basicSalary: parseFloat(e.target.value) || 0 });
						setTrigger(!trigger);
					}}
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
								value={earning.epfEtf}
								checked={earning.epfEtf}
								onChange={() => handleEpfEtfChange(index)}
							/>
							<label htmlFor="epf-etf">EPF/ETF</label>
						</div>
					</div>
				))}
				<button
					className={`flex-between button ${earnings.length <= 0 && `padding-top-empty`}`}
					onClick={e => addEarningRow(e)}
				>
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
				<button
					className={`flex-between button ${deductions.length <= 0 && `padding-top-empty`}`}
					onClick={e => addDeductionRow(e)}
				>
					<img src="/assets/plus.png" alt="plus-icon" className="button-img" />
					Add New Deduction
				</button>
			</div>
		</form>
	);
};

export default Form;
