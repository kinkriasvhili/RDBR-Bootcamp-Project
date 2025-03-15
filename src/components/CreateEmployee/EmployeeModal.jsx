import { useState } from "react";
import styles from "../nav.module.css";
import { api, apiToken } from "../../App"; // Import API details
export default function EmployeeModal({
  isModalOpen,
  closeModal,
  EmployeeAdd,
}) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    avatar: null,
    department_id: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, avatar: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("surname", formData.surname);
    data.append("avatar", formData.avatar);
    data.append("department_id", formData.department_id);

    try {
      const response = await fetch(`${api}/employees`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
        body: data,
      });

      if (!response.ok) throw new Error("Failed to create employee");

      const newEmployee = await response.json();
      EmployeeAdd(newEmployee); // Update state in parent component
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>ახალი თანამშრომელი</h2>
        <p>შეიყვანეთ თანამშრომლის ინფორმაცია</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="სახელი"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="გვარი"
            value={formData.surname}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="avatar"
            onChange={handleFileChange}
            required
          />
          <button type="submit">შენახვა</button>
        </form>

        <button className={styles.closeButton} onClick={closeModal}>
          დახურვა
        </button>
      </div>
    </div>
  );
}
