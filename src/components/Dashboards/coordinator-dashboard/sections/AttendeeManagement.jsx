"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaFilter, FaUserEdit, FaTrash } from "react-icons/fa";

const attendees = [
  { id: 1, name: "John Doe", email: "john.doe@college.edu", phone: "+1 234 567 8901", studentId: "S12345", year: "Sophomore", major: "Computer Science" },
  { id: 2, name: "Jane Smith", email: "jane.smith@college.edu", phone: "+1 234 567 8902", studentId: "S12346", year: "Junior", major: "Biology" },
  { id: 3, name: "Bob Johnson", email: "bob.johnson@college.edu", phone: "+1 234 567 8903", studentId: "S12347", year: "Freshman", major: "Engineering" },
  { id: 4, name: "Alice Brown", email: "alice.brown@college.edu", phone: "+1 234 567 8904", studentId: "S12348", year: "Senior", major: "Psychology" },
  { id: 5, name: "Charlie Davis", email: "charlie.davis@college.edu", phone: "+1 234 567 8905", studentId: "S12349", year: "Sophomore", major: "Business" },
  { id: 6, name: "Daniel White", email: "daniel.white@college.edu", phone: "+1 234 567 8906", studentId: "S12350", year: "Junior", major: "Mathematics" },
  { id: 7, name: "Ella Martinez", email: "ella.martinez@college.edu", phone: "+1 234 567 8907", studentId: "S12351", year: "Freshman", major: "Physics" },
  { id: 8, name: "Liam Wilson", email: "liam.wilson@college.edu", phone: "+1 234 567 8908", studentId: "S12352", year: "Senior", major: "History" },
  { id: 9, name: "Sophia Moore", email: "sophia.moore@college.edu", phone: "+1 234 567 8909", studentId: "S12353", year: "Sophomore", major: "Political Science" },
  { id: 10, name: "Ethan Taylor", email: "ethan.taylor@college.edu", phone: "+1 234 567 8910", studentId: "S12354", year: "Junior", major: "Economics" },
  { id: 11, name: "Olivia Anderson", email: "olivia.anderson@college.edu", phone: "+1 234 567 8911", studentId: "S12355", year: "Freshman", major: "Nursing" },
  { id: 12, name: "Mason Thomas", email: "mason.thomas@college.edu", phone: "+1 234 567 8912", studentId: "S12356", year: "Senior", major: "Chemistry" },
  { id: 13, name: "Ava Jackson", email: "ava.jackson@college.edu", phone: "+1 234 567 8913", studentId: "S12357", year: "Sophomore", major: "Environmental Science" },
  { id: 14, name: "Noah Harris", email: "noah.harris@college.edu", phone: "+1 234 567 8914", studentId: "S12358", year: "Junior", major: "Software Engineering" },
  { id: 15, name: "Isabella Martin", email: "isabella.martin@college.edu", phone: "+1 234 567 8915", studentId: "S12359", year: "Freshman", major: "Art" },
  { id: 16, name: "Lucas Thompson", email: "lucas.thompson@college.edu", phone: "+1 234 567 8916", studentId: "S12360", year: "Senior", major: "Music" },
  { id: 17, name: "Mia Garcia", email: "mia.garcia@college.edu", phone: "+1 234 567 8917", studentId: "S12361", year: "Sophomore", major: "Mechanical Engineering" },
  { id: 18, name: "James Robinson", email: "james.robinson@college.edu", phone: "+1 234 567 8918", studentId: "S12362", year: "Junior", major: "Electrical Engineering" },
  { id: 19, name: "Charlotte Clark", email: "charlotte.clark@college.edu", phone: "+1 234 567 8919", studentId: "S12363", year: "Freshman", major: "Astronomy" },
  { id: 20, name: "Benjamin Walker", email: "benjamin.walker@college.edu", phone: "+1 234 567 8920", studentId: "S12364", year: "Senior", major: "Marketing" },
  { id: 21, name: "Amelia Hall", email: "amelia.hall@college.edu", phone: "+1 234 567 8921", studentId: "S12365", year: "Sophomore", major: "Cybersecurity" },
  { id: 22, name: "William Allen", email: "william.allen@college.edu", phone: "+1 234 567 8922", studentId: "S12366", year: "Junior", major: "Finance" },
  { id: 23, name: "Harper Young", email: "harper.young@college.edu", phone: "+1 234 567 8923", studentId: "S12367", year: "Freshman", major: "Data Science" },
  { id: 24, name: "Alexander King", email: "alexander.king@college.edu", phone: "+1 234 567 8924", studentId: "S12368", year: "Senior", major: "Sports Science" },
  { id: 25, name: "Evelyn Wright", email: "evelyn.wright@college.edu", phone: "+1 234 567 8925", studentId: "S12369", year: "Sophomore", major: "Linguistics" },
  { id: 26, name: "Henry Lopez", email: "henry.lopez@college.edu", phone: "+1 234 567 8926", studentId: "S12370", year: "Junior", major: "Architecture" },
  { id: 27, name: "Scarlett Hill", email: "scarlett.hill@college.edu", phone: "+1 234 567 8927", studentId: "S12371", year: "Freshman", major: "Criminal Justice" },
  { id: 28, name: "Sebastian Scott", email: "sebastian.scott@college.edu", phone: "+1 234 567 8928", studentId: "S12372", year: "Senior", major: "Anthropology" },
  { id: 29, name: "Emily Green", email: "emily.green@college.edu", phone: "+1 234 567 8929", studentId: "S12373", year: "Sophomore", major: "Psychology" },
  { id: 30, name: "Jack Adams", email: "jack.adams@college.edu", phone: "+1 234 567 8930", studentId: "S12374", year: "Junior", major: "International Relations" }
];


const AttendeeManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("");

  const filteredAttendees = attendees.filter(
    (attendee) =>
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterYear === "" || attendee.year === filterYear)
  );

  return (
    <motion.div
      className="bg-white rounded-xl p-6 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
        Attendee Management
      </h2>

      {/* Search & Filter */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-between mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search attendees..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <div className="flex items-center space-x-2">
          <FaFilter className="text-gray-600" />
          <select
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          >
            <option value="">All Years</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
<div className="w-full max-h-[500px] overflow-auto">
  <table className="table table-zebra w-full">
    {/* Table Head */}
    <thead className="bg-gray-100 text-gray-800">
      <tr className="border-b border-gray-200">
        <th className="px-4 py-3 text-left whitespace-nowrap">#</th>
        <th className="px-4 py-3 text-left whitespace-nowrap">Name</th>
        <th className="px-4 py-3 hidden md:table-cell text-left whitespace-nowrap w-[220px]">Email</th>
        <th className="px-4 py-3 hidden sm:table-cell text-left whitespace-nowrap w-[180px]">Phone</th>
        <th className="px-4 py-3 text-left whitespace-nowrap w-[130px]">Student ID</th>
        <th className="px-4 py-3 text-left whitespace-nowrap w-[120px]">Year</th>
        <th className="px-4 py-3 hidden md:table-cell text-left whitespace-nowrap w-[200px]">Major</th>
        <th className="px-4 py-3 text-center whitespace-nowrap">Actions</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody>
      {filteredAttendees.map((attendee, index) => (
        <motion.tr
          key={attendee.id}
          className="hover:bg-gray-50 transition-all border-b border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <td className="px-4 py-3 whitespace-nowrap">{index + 1}</td>
          <td className="px-4 py-3 whitespace-nowrap">{attendee.name}</td>
          <td className="px-4 py-3 hidden md:table-cell whitespace-nowrap">{attendee.email}</td>
          <td className="px-4 py-3 hidden sm:table-cell whitespace-nowrap">{attendee.phone}</td>
          <td className="px-4 py-3 whitespace-nowrap">{attendee.studentId}</td>
          <td className="px-4 py-3 whitespace-nowrap">{attendee.year}</td>
          <td className="px-4 py-3 hidden md:table-cell whitespace-nowrap">{attendee.major}</td>
          <td className="px-4 py-3 text-center flex justify-center gap-3 whitespace-nowrap">
            <button className="text-blue-500 hover:text-blue-700">
              <FaUserEdit size={18} />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FaTrash size={18} />
            </button>
          </td>
        </motion.tr>
      ))}
    </tbody>
  </table>
</div>


      {/* Footer */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-gray-600">
          Showing {filteredAttendees.length} of {attendees.length} attendees
        </p>
        <button className="btn btn-primary">Add New Attendee</button>
      </div>
    </motion.div>
  );
};

export default AttendeeManagement;
