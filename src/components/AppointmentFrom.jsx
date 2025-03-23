import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctor = async () => {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/user/get-all-doctor",
        { withCredentials: true }
      );
      setDoctors(data?.doctor);
    };
    fetchDoctor();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/appointments/create-appointment",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("Pediatrics");
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto py-12 px-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-center cursor-pointer">
        Book an Appointment
      </h1>
      <form className="space-y-6" onSubmit={handleAppointment}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
          />
          <input
            type="text"
            placeholder="NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
          />
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
          />
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setDoctorFirstName("");
              setDoctorLastName("");
            }}
            className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
          >
            {departmentsArray.map((depart, index) => (
              <option value={depart} key={index}>
                {depart}
              </option>
            ))}
          </select>
          <select
            value={`${doctorFirstName} ${doctorLastName}`}
            onChange={(e) => {
              const [firstName, lastName] = e.target.value.split(" ");
              setDoctorFirstName(firstName);
              setDoctorLastName(lastName);
            }}
            disabled={!department}
            className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
          >
            <option value="">Select Doctor</option>
            {doctors
              .filter((doctor) => doctor.doctorDepartment === department)
              .map((doctor, index) => (
                <option
                  value={`${doctor.firstName} ${doctor.lastName}`}
                  key={index}
                >
                  {doctor.firstName} {doctor.lastName}
                </option>
              ))}
          </select>
        </div>

        <textarea
          rows="4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          className="w-full p-3 border bg-white text-gray-800 rounded-md shadow-md"
        />

        <div className="flex items-center justify-center gap-4 mb-4">
          <p className="mb-0 cursor-pointer text-lg">Have you visited before?</p>
          <input
            type="checkbox"
            checked={hasVisited}
            onChange={(e) => setHasVisited(e.target.checked)}
            className="w-6 h-6 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black text-lg font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition-all duration-300 shadow-lg"
        >
          GET APPOINTMENT
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
