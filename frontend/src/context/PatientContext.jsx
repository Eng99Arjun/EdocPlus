'use client'
const { useRouter } = require("next/navigation");
const { createContext, useState, useContext } = require("react");

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const router = useRouter();

  const [currentPatient, setCurrentPatient] = useState(
    JSON.parse(localStorage.getItem("patient"))
  );

  const [patientLoggedIn, setPatientLoggedIn] = useState(currentPatient !== null);

  const logout = () => {
    setCurrentPatient(null);
    localStorage.removeItem("patient");
    setPatientLoggedIn(false);
    // clear cookie
    document.cookie = "token=; expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

  return (
    <PatientContext.Provider
      value={{
        currentPatient,
        setCurrentPatient,
        patientLoggedIn,
        setPatientLoggedIn,
        logout,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};


const usePatientContext = () => useContext(PatientContext);
export default usePatientContext;