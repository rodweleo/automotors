import { useState } from "react";
import { Select } from "../ui/select";
import { SelectOption } from "../ui/select/select_option";
import { Button } from "../ui/button";

export const Header = () => {
  const carModels = ['Any','Audi','Aston Martin', 'Bentley'];
  const carBrands = ['Any','BMW','Maxda', 'Honda'];
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");

  return (
    <form className="flex items-center justify-center space-x-5">
      <Select options={{ label: "CAR BRAND", defaultValue:carBrand }}>
        {carBrands.sort().map((carBrand) => (
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
        {carModels.sort().map((carModel) => (
          <SelectOption
          options={{
            label: carModel,
            onChange: setCarModel,
            value: carModel,
          }}
        />
        ))}
      </Select>

      <Button options={{ className: "rounded-3xl bg-[#152238] text-white px-5 py-2.5 cursor-pointer", label: 'Search', leadingIcon: 'fa-solid fa-search'}}/> 
      
    </form>
  );
};
