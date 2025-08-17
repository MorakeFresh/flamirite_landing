import React, { useState } from "react";

export default function LeadCaptureForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        age: "",
        matric: "No",
        reason: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbyjJqOQaYKHcPPo84rOvFtBbYMxn-cj1znQtdiWEqWeV3dk0IFfg7cgsG2jnX7hSl6LoQ/exec",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if (res.ok && data.status === "success") {
                setStatus("✅ Application submitted successfully!");
                setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    age: "",
                    matric: "No",
                    reason: "",
                });
            } else {
                console.error("Server response:", data);
                setStatus("❌ Submission failed. Please try again.");
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setStatus("❌ An error occurred. Please try again.");
        }
    };

    return (
        <div className="bg-black rounded-xl shadow-xl p-6 md:p-8 border border-yellow-500 flex justify-center">
            <div className="w-full sm:w-11/12 md:w-full max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-yellow-400">
                    🎰 Apply Now — Limited Seats Available
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 text-gray-200">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (WhatsApp)"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500"
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500"
                    />

                    {/* Matric Yes/No toggle */}
                    <div className="space-y-2">
                        <p className="font-semibold">Do you have Matric?</p>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="matric"
                                    value="Yes"
                                    checked={formData.matric === "Yes"}
                                    onChange={handleChange}
                                    className="accent-yellow-500"
                                />
                                <span>Yes</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="matric"
                                    value="No"
                                    checked={formData.matric === "No"}
                                    onChange={handleChange}
                                    className="accent-yellow-500"
                                />
                                <span>No</span>
                            </label>
                        </div>
                    </div>

                    <textarea
                        name="reason"
                        placeholder="Why do you want to work in a casino? (Optional)"
                        value={formData.reason}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-full transition"
                    >
                        I’m Ready to Get Trained
                    </button>
                </form>

                {status && <p className="mt-4 text-center">{status}</p>}
            </div>
        </div>
    );
}
