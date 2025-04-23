import Destination from "../models/destination"; // import model Destination
import mongoose from "mongoose";

// Tạo mới destination
export const createDestination = async (req, res) => {
  const { name, description, location } = req.body;

  try {
    const newDestination = new Destination({
      name,
      description,
      location,
    });

    await newDestination.save();

    res.status(201).json({
      message: "Destination created successfully",
      destination: newDestination,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy tất cả destination
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find().populate(
      "tours",
      "name description"
    ); // Populate các tour liên quan

    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin destination theo ID
export const getDestinationById = async (req, res) => {
  const { id } = req.params;

  try {
    const destination = await Destination.findById(id).populate(
      "tours",
      "name description"
    );

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin destination
export const updateDestination = async (req, res) => {
  const { id } = req.params;
  const { name, description, location } = req.body;

  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      id,
      { name, description, location },
      { new: true }
    ).populate("tours", "name description");

    if (!updatedDestination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.status(200).json({
      message: "Destination updated successfully",
      destination: updatedDestination,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa destination theo ID
export const deleteDestination = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDestination = await Destination.findByIdAndDelete(
      id
    );

    if (!deletedDestination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.status(200).json({ message: "Destination deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tìm kiếm điểm đến theo vị trí (sử dụng truy vấn không gian địa lý)
export const getDestinationsNearby = async (req, res) => {
  const { longitude, latitude, maxDistance = 50000 } = req.query; // maxDistance in meters

  try {
    if (!longitude || !latitude) {
      return res
        .status(400)
        .json({ message: "Longitude and Latitude are required" });
    }

    const destinations = await Destination.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          $maxDistance: parseInt(maxDistance), // Distance in meters
        },
      },
    }).populate("tours", "name description");

    if (destinations.length === 0) {
      return res.status(404).json({ message: "No destinations found nearby" });
    }

    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
