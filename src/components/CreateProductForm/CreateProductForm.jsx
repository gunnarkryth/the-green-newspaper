import React, { useState } from "react";

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category_id: "",
  });
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Assumes token is stored here
    try {
      const res = await fetch("http://localhost:4242/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error creating product");
      }
      await res.json();
      setMessage("Product created successfully!");
      // Optionally clear the form or update state as needed
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div className="create-product-form">
      <h2>Create Product</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price (integer):</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Category ID:</label>
          <input
            type="text"
            name="category_id"
            value={formData.category_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProductForm;
