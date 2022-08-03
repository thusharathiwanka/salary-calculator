import React, { createContext, useState } from "react";

export const SalaryContext = createContext();

const SalaryContextProvider = ({ children }) => {
	const [salary, setSalary] = useState({
		basicSalary: "",
		grossEarning: "",
		grossDeduction: "",
		netSalary: "",
		employeeEPF: "",
		employerEPF: "",
		employerETF: "",
		costToCompany: "",
	});
	const [earnings, setEarnings] = useState([{ amount: "", epfEtf: false }]);
	const [deductions, setDeductions] = useState([{ amount: "" }]);

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
