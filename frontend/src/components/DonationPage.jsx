import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import Swal from "sweetalert2"; // Import SweetAlert2

const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    paymentMethod: "RazorPay",
  });

  const [donorList, setDonorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state for the donation process

  // Fetch donors from the database
  useEffect(() => {
    axios
      .get("https://project-ma.onrender.com/api/donors")
      .then((response) => setDonorList(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handlePaymentSuccess = (response) => {
    Swal.fire({
      title: "Payment successful!",
      text: "Thank you for your contribution.",
      icon: "success",
      confirmButtonText: "OK",
    });

    axios
      .post("https://project-ma.onrender.com/api/donate", {
        ...formData,
        paymentId: response.razorpay_payment_id,
      })
      .then((response) => {
        Swal.fire({
          title: "Donation Recorded!",
          text: "Your donation has been successfully recorded.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({
          name: "",
          email: "",
          amount: "",
          paymentMethod: "RazorPay",
        });
        setIsLoading(false); // Turn off loading state after success
        axios
          .get("https://project-ma.onrender.com/api/donors") // Fetch updated donor list
          .then((response) => setDonorList(response.data))
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "There was an issue recording your donation.",
          icon: "error",
          confirmButtonText: "OK",
        });
        setIsLoading(false); // Turn off loading state on error
        console.error(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submission starts

    try {
      const response = await axios.post(
        "https://project-ma.onrender.com/api/create-order",
        { amount: formData.amount }
      );

      const { orderId } = response.data;

      // Razorpay checkout options
      const options = {
        key: "rzp_test_6dJ6VSsjxt2EZd", // Replace with your Razorpay Key ID
        amount: formData.amount * 100,
        currency: "INR",
        name: "Durga Puja Donation",
        description: "Thank you for your kind donation!",
        order_id: orderId,
        handler: handlePaymentSuccess,
        prefill: {
          name: formData.name,
          email: formData.email,
        },
        theme: {
          color: "#F37254",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to create a Razorpay order. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setIsLoading(false); // Turn off loading state on error
      console.error("Error creating Razorpay order", error);
    }
  };

  return (
    <>
      <div className="w-full p-8 py-20 bg-gradient-to-b from-yellow-400 to-orange-700 text-white flex flex-col md:flex-row justify-evenly">
        {/* Left Side: Donation Form */}
        <div className="w-full h-[520px] md:w-[45%] p-4 bg-white bg-opacity-20 rounded-lg shadow-lg mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Donate to Durga Puja
          </h1>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="mb-4">
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Amount</label>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="w-full  border-2 border-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Payment Method</label>
              <select
                value={formData.paymentMethod}
                onChange={(e) =>
                  setFormData({ ...formData, paymentMethod: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
              >
                <option>RazorPay</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition"
              disabled={isLoading} // Disable the button when loading
            >
              {isLoading ? "Processing..." : "Donate"}{" "}
              {/* Show loading text when processing */}
            </button>
          </form>
        </div>

        {/* Right Side: Donor List with Fixed Height and Scroll */}
        <div className="w-full md:w-[45%] p-4 bg-white bg-opacity-20 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Our Generous Donors
          </h2>
          <div className="overflow-y-auto h-[400px] border border-gray-800 p-4 rounded-lg">
            <ul className="list-disc list-inside text-gray-200">
              {donorList.length > 0 ? (
                donorList.map((donor, index) => (
                  <li key={index} className="mb-3 text-xl font-semibold">
                    {donor.name} donated ₹{donor.amount}
                  </li>
                ))
              ) : (
                <p className="text-xl">No donations yet.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonationPage;
