const { useRouter } = require("next/navigation");
const { createContext, useState, useContext } = require("react");

const PatientContext = createContext();

export const PatientProvider = ({children}) => {
  const router = useRouter();

  const [currentPatient, setCurrentPatient] = useState(
    JSON.parse(sessionStorage.getItem("patient"))
  );

  const [patientLoggedIn, setPatientLoggedIn] = useState(currentPatient !== null);

  const logout = () => {
    setCurrentPatient(null);
    sessionStorage.removeItem("patient");
    setPatientLoggedIn(false);
    router.push("/patientlogin");
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