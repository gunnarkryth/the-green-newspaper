import s from "./MyPage.module.scss";

import React, { useState, useEffect } from "react";

const CategoryDropdown = ({ value, onChange }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4242/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setFetchError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading categories...</div>;
  if (fetchError) return <div>Error loading categories</div>;

  return (
    <select value={value} onChange={onChange}>
      <option value="" disabled>
        Select a category
      </option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export const MyPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    newsletter: false,
    notifications: false,
  });
  const [ads, setAds] = useState([]);
  const [error, setError] = useState(null);

  const [productFormData, setProductFormData] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category_id: "",
  });
  const [productMessage, setProductMessage] = useState(null);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setProfileData(data))
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    if (activeTab === "ads") {
      fetch("/users/ads")
        .then((res) => res.json())
        .then((data) => setAds(data))
        .catch((err) => setError(err));
    }
  }, [activeTab]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    fetch("/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Opdatering mislykkedes");
        return res.json();
      })
      .then((data) => {
        alert("Profil opdateret");
        setProfileData(data);
      })
      .catch((err) => {
        console.error(err);
        alert("Der skete en fejl ved opdatering");
      });
  };

  const handleProfileDelete = () => {
    if (!window.confirm("Er du sikker på, at du vil slette din profil?"))
      return;
    fetch("/users", { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Sletning mislykkedes");
        alert("Profil slettet");
      })
      .catch((err) => {
        console.error(err);
        alert("Der skete en fejl ved sletning");
      });
  };

  const handleAdDelete = (adId) => {
    if (!window.confirm("Er du sikker på, at du vil slette denne annonce?"))
      return;
    fetch(`/ads/${adId}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Sletning mislykkedes");
        setAds((prev) => prev.filter((ad) => ad.id !== adId));
      })
      .catch((err) => {
        console.error(err);
        alert("Der skete en fejl ved sletning af annoncen");
      });
  };

  const handleProductInputChange = (e) => {
    const { name, value } = e.target;
    setProductFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e) => {
    setProductFormData((prev) => ({ ...prev, category_id: e.target.value }));
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:4242/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productFormData),
      });
      const contentType = res.headers.get("content-type");
      if (!res.ok) {
        let errorMsg = "Fejl ved oprettelse af produkt";
        if (contentType && contentType.includes("application/json")) {
          const errorData = await res.json();
          errorMsg = errorData.message || errorMsg;
        }
        throw new Error(errorMsg);
      }
      if (contentType && contentType.includes("application/json")) {
        await res.json();
      }
      setProductMessage("Produkt oprettet!");
      fetch("/users/ads")
        .then((res) => res.json())
        .then((data) => setAds(data))
        .catch((err) => setError(err));
      setProductFormData({
        name: "",
        image: "",
        description: "",
        price: "",
        category_id: "",
      });
    } catch (err) {
      setProductMessage(`Fejl: ${err.message}`);
    }
  };

  return (
    <div className={s.my_page}>
      <div className={s.tabSwitcher}>
        <button
          onClick={() => setActiveTab("profile")}
          style={{
            backgroundColor: activeTab === "profile" ? "green" : "transparent",
          }}
        >
          Min Profil
        </button>
        <button
          onClick={() => setActiveTab("ads")}
          style={{
            backgroundColor: activeTab === "ads" ? "green" : "transparent",
          }}
        >
          Mine annoncer
        </button>
      </div>

      {activeTab === "profile" && (
        <div className="profile-section">
          <h2>Min Profil</h2>
          <form onSubmit={handleProfileUpdate}>
            <div>
              <label>Navn:</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Telefon:</label>
              <input
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={profileData.newsletter}
                  onChange={handleInputChange}
                />
                Tilmeld nyhedsbrev
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="notifications"
                  checked={profileData.notifications}
                  onChange={handleInputChange}
                />
                Tilmeld notifikationer
              </label>
            </div>
            <button type="submit">Gem ændringer</button>
          </form>
          <button onClick={handleProfileDelete} style={{ color: "red" }}>
            Slet profil
          </button>
        </div>
      )}

      {activeTab === "ads" && (
        <div className="ads-section">
          <h2>Mine annoncer</h2>

          <div className="create-product-form">
            <h3>Opret produkt</h3>
            {productMessage && <p>{productMessage}</p>}
            <form onSubmit={handleProductSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={productFormData.name}
                  onChange={handleProductInputChange}
                  required
                />
              </div>
              <div>
                <label>Image URL:</label>
                <input
                  type="text"
                  name="image"
                  value={productFormData.image}
                  onChange={handleProductInputChange}
                  required
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  name="description"
                  value={productFormData.description}
                  onChange={handleProductInputChange}
                  required
                />
              </div>
              <div>
                <label>Price (integer):</label>
                <input
                  type="text"
                  name="price"
                  value={productFormData.price}
                  onChange={handleProductInputChange}
                  required
                />
              </div>
              <div>
                <label>Category:</label>
                <CategoryDropdown
                  value={productFormData.category_id}
                  onChange={handleCategoryChange}
                />
              </div>
              <button type="submit">Opret produkt</button>
            </form>
          </div>

          {ads.length === 0 ? (
            <p>Ingen annoncer fundet.</p>
          ) : (
            <ul>
              {ads.map((ad) => (
                <li key={ad.id}>
                  <span>{ad.title}</span>
                  <a href={`/produkt/${ad.id}`}>Gå til annoncen</a>
                  <button onClick={() => handleAdDelete(ad.id)}>
                    Slet annoncen
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {error && <p className="error">Der opstod en fejl: {error.message}</p>}
    </div>
  );
};
