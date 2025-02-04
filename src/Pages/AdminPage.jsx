import React, { useState } from "react";

const AdminPage = () => {
    const [eventData, setEventData] = useState({
        name: "",
        description: "",
        location: "",
        date: "",
        time: "",
        participants: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch("http://localhost:8080/event", {
                method: "POST",
                headers: {
                    "Authorization": "Basic " + btoa("admin:admin123"),
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData),
            });

            if (!response.ok) {
                throw new Error("Failed to create event");
            }

            const data = await response.json();
            setSuccess(true);
            setEventData({
                name: "",
                description: "",
                location: "",
                date: "",
                time: "",
                participants: "",
            });
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-base-100 shadow-lg rounded-lg mt-8">
            <h2 className="text-3xl font-semibold text-center mb-6">Create a New Event</h2>

            {success && <p className="text-green-500 text-center mb-4">Event created successfully!</p>}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Event Name */}
                <div className="form-control">
                    <label htmlFor="name" className="label">
                        <span className="label-text">Event Name</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={eventData.name}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-300 rounded-lg"
                    />
                </div>

                {/* Description */}
                <div className="form-control">
                    <label htmlFor="description" className="label">
                        <span className="label-text">Event Description</span>
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={eventData.description}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="input input-bordered w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-300 rounded-lg"
                    />
                </div>

                {/* Location */}
                <div className="form-control">
                    <label htmlFor="location" className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={eventData.location}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-300 rounded-lg"
                    />
                </div>

                {/* Date */}
                <div className="form-control">
                    <label htmlFor="date" className="label">
                        <span className="label-text">Event Date</span>
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={eventData.date}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-300 rounded-lg"
                    />
                </div>

                {/* Time */}
                <div className="form-control">
                    <label htmlFor="time" className="label">
                        <span className="label-text">Event Time</span>
                    </label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={eventData.time}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-300 rounded-lg"
                    />
                </div>

                {/* Participants */}
                <div className="form-control">
                    <label htmlFor="participants" className="label">
                        <span className="label-text">Max Participants</span>
                    </label>
                    <input
                        type="number"
                        id="participants"
                        name="participants"
                        value={eventData.participants}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-2 border-gray-300 rounded-lg"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`btn btn-primary w-full py-3 px-4 rounded-lg text-white ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={loading}
                >
                    {loading ? "Creating..." : "Create Event"}
                </button>
            </form>
        </div>
    );
};

export default AdminPage;
