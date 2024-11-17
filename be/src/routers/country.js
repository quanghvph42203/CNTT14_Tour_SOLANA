import express from "express";
import {
  createCountry,
  getAllCountries,
  getCountryById,
  updateCountry,
  deleteCountry,
} from "../controllers/country";

const router = express.Router();

router.post("/create", createCountry);
router.get("/getall", getAllCountries);
router.get("/getId/:id", getCountryById);
router.put("/update/:id", updateCountry);
router.delete("/remove/:id", deleteCountry);

export default router;
