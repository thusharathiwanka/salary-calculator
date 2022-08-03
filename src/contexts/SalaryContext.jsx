import React, { createContext, useState, useEffect } from "react";

export const SalaryContext = createContext();

const SalaryContextProvider = ({ children }) => {
	const [salary, setSalary] = useState({
		basicSalary: 0,
		grossEarning: 0,
		grossDeduction: 0,
		netSalary: 0,
		employeeEPF: 0,
		employerEPF: 0,
		employerETF: 0,
		costToCompany: 0,
	});
	const [earnings, setEarnings] = useState([{ amount: null, isIncluded: false }]);
	const [deductions, setDeductions] = useState([{ amount: 0 }]);

	return (
		<SalaryContext.Provider
			value={{
				salary,
				setSalary,
				earnings,
				setEarnings,
				deductions,
				setDeductions,
			}}
		>
			{children}
		</SalaryContext.Provider>
	);
};

export default SalaryContextProvider;
