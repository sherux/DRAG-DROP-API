import express from "express";
const router = express.Router();
import {
  GetDragAndDropDataByid,
  CreateDragAndDropData,
  UpdateDragAndDropData,
  DeleteDragAndDropData,
} from "../controller/drag.control";

// ALL DRAG&DROP ROUTES

router.get("/:id", GetDragAndDropDataByid);
router.post("/create", CreateDragAndDropData);
router.put("/update/:id", UpdateDragAndDropData);
router.delete("/delete/:id", DeleteDragAndDropData);

export default router;
