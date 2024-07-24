import connectDB from "@/lib/dbConnect";
import { ActivityModel } from "@/models/Activity";
import { CountryModel } from "@/models/Country";

export const funcCountry = {
  getCountries: async (page = 1, pageSize) => {
    await connectDB();

    try {
      const countries = await CountryModel.find({})
        .skip((page - 1) * pageSize)
        .limit(pageSize);

      if (!countries) throw new Error("There are no countries");

      return countries;
    } catch (error) {
      return error.message;
    }
  },
  getAllCountries: async () => {
    await connectDB();
    const countries = await CountryModel.find({});
    if (!countries) throw new Error("There are no countries");
    return countries;
  },
  getCountryById: async (id) => {
    await connectDB();
    const country = await CountryModel.findById(id).populate("activities");

    if (!country) throw new Error(`Country ID: ${id} not found`);

    return country;
  },
  getCountryByName: async (name) => {
    await connectDB();
    const formatedName = name.split("-").join(" ");
    const country = await CountryModel.findOne({ name: formatedName });

    if (!country) throw new Error(`Country name: ${name} not found`);
    return country;
  },
};
