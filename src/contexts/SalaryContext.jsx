import React, { createContext, useState } from "react";

export const SalaryContext = createContext();

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

	const calculateEarnings = () => {
		salary.epfAllowedEarnings = 0;
		salary.grossEarning = earnings.reduce((total, earning) => {
			if (earning.epfEtf) {
				salary.epfAllowedEarnings = salary.epfAllowedEarnings + earning.amount;
			}

			return total + earning.amount;
		}, 0);
		salary.grossEarning = parseInt(salary.grossEarning);
	};

	const calculateDeductions = () => {
		salary.grossDeduction = deductions.reduce((total, deduction) => total + deduction.amount, 0);
		salary.grossDeduction = parseInt(salary.grossDeduction);
	};

	const calculateSalary = () => {
		const employeeEpf = (salary.epfAllowedEarnings + salary.basicSalary) * 0.08;
		const employerEpf = (salary.epfAllowedEarnings + salary.basicSalary) * 0.12;
		const employerEtf = (salary.epfAllowedEarnings + salary.basicSalary) * 0.03;
		const netSalary =
			salary.basicSalary + salary.grossEarning - (salary.grossDeduction + employeeEpf);
		const costToCompany =
			salary.basicSalary + salary.grossEarning + employerEpf + employerEtf - salary.grossDeduction;
		console.log(salary);

		setSalary({
			...salary,
			employeeEpf,
			employerEpf,
			employerEtf,
			netSalary,
			costToCompany,
		});
		localStorage.setItem("salary", JSON.stringify(salary));
		localStorage.setItem("earnings", JSON.stringify(earnings));
		localStorage.setItem("deductions", JSON.stringify(deductions));
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
