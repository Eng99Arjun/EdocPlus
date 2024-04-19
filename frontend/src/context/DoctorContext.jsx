const { useRouter } = require("next/navigation");
const { createContext, useState, useContext } = require("react");

const DoctorContext = createContext();

export const DoctorProvider = ({children}) => {
  const router = useRouter();

  const [currentDoctor, setCurrentDoctor] = useState(
    JSON.parse(sessionStorage.getItem("doctor"))
  );

  const [doctorLoggedIn, setDoctorLoggedIn] = useState(currentDoctor !== null);

  const logout = () => {
    setCurrentDoctor(null);
    sessionStorage.removeItem("doctor");
    setDoctorLoggedIn(false);
    router.push("/doctorlogin");
  };

  return (
    <DoctorContext.Provider
      value={{
        currentDoctor,
        setCurrentDoctor,
        doctorLoggedIn,
        setDoctorLoggedIn,
        
        logout,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};


const useDoctorContext = () => useContext(DoctorContext);
export default useDoctorContext;