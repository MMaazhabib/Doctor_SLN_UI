import React from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const doctors = [
  {
    name: "Dr. Maaz",
    specialty: "Cardiology",
    image: "/dist/assets/maaz.jpeg",
    
  },
  {
    name: "Dr. Umar",
    specialty: "Dermatology",
    image: "dist/assets/umar.jpg",
    
  },
  {
    name: "Dr. Ali Rehan",
    specialty: "gynecologist",
    image: "dist/assets/ali.jpg",
    
  },
  {
    name: "Dr. Zaman",
    specialty: "Anesthesiology",
    image: "dist/assets/zaman.jpeg",
    
  },
  {
    name: "Dr. Hammad",
    specialty: "Psychiatry",
    image: "dist/assets/hammad.jpg",
    
  },
  {
    name: "Dr. Waqar",
    specialty: "Dermatology",
    image: "dist/assets/waqar.jpg",
    
  },
];

function Doctors() {
  return (
    <>
    <Header />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Best Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full rounded-lg mb-4" 
            />
            <h2 className="text-2xl font-semibold mb-2" >{doctor.name}</h2>
            <p className="text-gray-600 mb-4">Specialty: {doctor.specialty}</p>
            
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Doctors;
