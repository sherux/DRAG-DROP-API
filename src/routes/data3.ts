import express from "express";
const router = express.Router();
import {
  GetDragbyassociate,
  GetDragAndDropDataByid,
  CreateDragAndDropData,
  UpdateDragAndDropData,
  DeleteDragAndDropData,
} from "../controller/data2";

// ALL DRAG&DROP ROUTES
router.get("/ALL/:id", GetDragbyassociate);

router.get("/:id", GetDragAndDropDataByid);
router.post("/create", CreateDragAndDropData);
router.put("/update/:id", UpdateDragAndDropData);
router.delete("/delete/:id", DeleteDragAndDropData);

export default router;
