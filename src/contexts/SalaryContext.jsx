import React, { createContext, useState } from "react";

export const SalaryContext = createContext();

const SalaryContextProvider = ({ children }) => {
	const [salary, setSalary] = useState({
		basicSalary: "",
		grossEarning: "",
		epfAllowedEarnings: 0,
		grossDeduction: "",
		netSalary: "",
		employeeEpf: "",
		employerEpf: "",
		employerEtf: "",
		costToCompany: "",
	});
	const [earnings, setEarnings] = useState([{ amount: "", epfEtf: false }]);
	const [deductions, setDeductions] = useState([{ amount: "" }]);

	const calculateEarnings = () => {
		salary.epfAllowedEarnings = 0;
		salary.grossEarning = earnings.reduce((total, earning) => {
			if (earning.epfEtf) {
				console.log(earning.amount);
				salary.epfAllowedEarnings = salary.epfAllowedEarnings + earning.amount;
			}

			return total + earning.amount;
		}, 0);
	};

	const calculateDeductions = () => {
		salary.grossDeduction = deductions.reduce((total, deduction) => total + deduction.amount, 0);
	};

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
