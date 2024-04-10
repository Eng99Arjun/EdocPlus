import React from 'react';

const DoctorProfile = () => {
  return (
    <div className="doctor-profile">
      <div className="profile-card">
        <div className="profile-picture"></div>
          <img src="doctor-photo.jpg" alt="Doctor" />
        </div>
        <div className="profile-details">
          <h2>Dr. John Doe</h2>
          <p>Specialty: Cardiology</p>
          <p>Experience: 10+ years</p>
          <p>Education: MD, University of Medical Sciences</p>
          <p>Location: New York, NY</p>
          <p>About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc euismod, aliquet nisl nec, aliquam nunc. Nullam euismod, nunc id lacinia tincidunt, velit nunc lacinia nunc, nec tincidunt nunc nunc id lectus.</p>
          <div className="buttons"></div>
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
      
  );
};

export default DoctorProfile;