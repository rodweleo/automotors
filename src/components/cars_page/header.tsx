import { useState } from "react";
import { Select } from "../ui/select";
import { SelectOption } from "../ui/select/select_option";

export const Header = () => {
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");

  return (
    <section className="car-header">
      <Select options={{ label: "CAR BRAND", defaultValue:carBrand }}>
        {['BMW','Maxda', 'Honda'].sort().map((carBrand) => (
          <SelectOption
          options={{
            label: carBrand,
            onChange: setCarBrand,
            value: carBrand,
          }}
        />
        ))}
      </Select>

      <Select options={{ label: "CAR MODEL", defaultValue:carModel }}>
        {['Audi','Aston Martin', 'Bentley'].sort().map((carModel) => (
          <SelectOption
          options={{
            label: carModel,
            onChange: setCarModel,
            value: carModel,
          }}
        />
        ))}
      </Select>

      <button type="submit" className="btn-primary">
        <i className="fa-solid fa-search"></i> Search
      </button>
    </section>
  );
};
