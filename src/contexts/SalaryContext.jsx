import React, { createContext, useState } from "react";

export const SalaryContext = createContext();

/**
 * Salary Context
 * @param {} children
 * @returns {React.Context.Provider} SalaryContext.Provider - salary context provider
 */
const SalaryContextProvider = ({ children }) => {
	const [salary, setSalary] = useState({
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
	const [earnings, setEarnings] = useState([{ amount: "", epfEtf: false }]);
	const [deductions, setDeductions] = useState([{ amount: "" }]);

	/**
	 * Calculate gross earning and EPF allowed earnings
	 */
	const calculateEarnings = () => {
		salary.epfAllowedEarnings = 0;

		salary.grossEarning = earnings.reduce((total, earning) => {
			if (earning.epfEtf) {
				salary.epfAllowedEarnings = salary.epfAllowedEarnings + parseFloat(earning.amount) || 0;
			}

			return total + parseFloat(earning.amount) || 0;
		}, 0);
	};

	/**
	 * Calculate gross deductions
	 */
	const calculateDeductions = () => {
		salary.grossDeduction = deductions.reduce(
			(total, deduction) => total + parseFloat(deduction.amount) || 0,
			0
		);
	};

	/**
	 * Calculate employee EPF, employer EPF, employer ETF, net salary and cost to company
	 */
	const calculateSalary = () => {
		const employeeEpf = (salary.epfAllowedEarnings + salary.basicSalary) * 0.08;
		const employerEpf = (salary.epfAllowedEarnings + salary.basicSalary) * 0.12;
		const employerEtf = (salary.epfAllowedEarnings + salary.basicSalary) * 0.03;
		const netSalary =
			salary.basicSalary + salary.grossEarning - (salary.grossDeduction + employeeEpf);
		const costToCompany =
			salary.basicSalary + salary.grossEarning + employerEpf + employerEtf - salary.grossDeduction;

		setSalary({
			...salary,
			employeeEpf,
			employerEpf,
			employerEtf,
			netSalary,
			costToCompany,
		});
	};

	return (
		<SalaryContext.Provider
			value={{
				salary,
				setSalary,
				earnings,
				setEarnings,
				deductions,
				setDeductions,
				calculateEarnings,
				calculateDeductions,
				calculateSalary,
			}}
		>
			{children}
		</SalaryContext.Provider>
	);
};

export default SalaryContextProvider;
