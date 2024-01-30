import { Select } from "../ui/select";

export const Header = () => {
  return (
    <section className="car-header">
      <Select label="CAR BRAND">
        <option value="">Select Car Brand</option>
        <option value="">Porche</option>
      </Select>

      <label htmlFor="car-model" className="label">
        <p>Car Model</p>
        <select name="" id="car-model">
          <option value="">Select Car Model</option>
          <option value="">Any</option>
        </select>
      </label>

      <label htmlFor="car-brand" className="label">
        <p>PickUp Location</p>
        <select name="" id="car-brand">
          <option value="">Select Pickup Location</option>
          <option value="">Porche</option>
        </select>
      </label>


      <button type="submit" className="btn-primary"><i className="fa-solid fa-search"></i> Search</button>
    </section>
  );
};
