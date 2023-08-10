"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const data2_1 = require("../controller/data2");
// ALL DRAG&DROP ROUTES
router.get("/ALL/:id", data2_1.GetDragbyassociate);
router.get("/:id", data2_1.GetDragAndDropDataByid);
router.post("/create", data2_1.CreateDragAndDropData);
router.put("/update/:id", data2_1.UpdateDragAndDropData);
router.delete("/delete/:id", data2_1.DeleteDragAndDropData);
exports.default = router;
