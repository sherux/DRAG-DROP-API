"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const drag_control_1 = require("../controller/drag.control");
// ALL DRAG&DROP ROUTES
router.get("/:id", drag_control_1.GetDragAndDropDataByid);
router.post("/create", drag_control_1.CreateDragAndDropData);
router.put("/update/:id", drag_control_1.UpdateDragAndDropData);
router.delete("/delete/:id", drag_control_1.DeleteDragAndDropData);
exports.default = router;
