import express from "express";
import {
  createDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination,
  getDestinationsNearby,
} from "../controllers/destination";

const router = express.Router();

router.post("/destination", createDestination);
router.get("/getDestinations", getAllDestinations);
router.get("/getDestination/:id", getDestinationById);
router.put("/updateDestination/:id", updateDestination);
router.delete("/deleteDestination/:id", deleteDestination);
router.get("/getDestinations/nearby", getDestinationsNearby);

export default router;
