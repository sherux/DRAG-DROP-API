"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDragAndDropData = exports.UpdateDragAndDropData = exports.CreateDragAndDropData = exports.GetDragAndDropDataByid = void 0;
const drag_model_1 = __importDefault(require("../model/drag.model"));
// --------------------------GET API BY ID------------------------
const GetDragAndDropDataByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = +req.params.id;
        const userdata = yield drag_model_1.default.findOne({ where: { id: data } });
        res.status(200).json({ message: "data succesfully fetch", data: userdata });
    }
    catch (error) {
        // console.log("error2", error);
        res.status(400).json({ message: error.message });
    }
});
exports.GetDragAndDropDataByid = GetDragAndDropDataByid;
// --------------------------POST API------------------------
const CreateDragAndDropData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new drag_model_1.default({
            Fields_Input: req.body.Fields_Input,
            Fields_RadioBox: req.body.Fields_RadioBox,
            Fields_CheckBox: req.body.Fields_CheckBox,
            Fields_TextArea: req.body.Fields_TextArea,
            Fields_Image: req.body.Fields_Image,
        });
        const userdata = yield data.save();
        res
            .status(200)
            .json({ message: "data succesfully created", data: userdata });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.CreateDragAndDropData = CreateDragAndDropData;
// --------------------------UPDATE API------------------------
const UpdateDragAndDropData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const Fields_Input = req.body.Fields_Input;
        const Fields_RadioBox = req.body.Fields_RadioBox;
        const Fields_CheckBox = req.body.Fields_CheckBox;
        const Fields_TextArea = req.body.Fields_TextArea;
        const Fields_Image = req.body.Fields_Image;
        const UpdateUserData = yield drag_model_1.default.update({
            Fields_Input: Fields_Input,
            Fields_RadioBox: Fields_RadioBox,
            Fields_CheckBox: Fields_CheckBox,
            Fields_TextArea: Fields_TextArea,
            Fields_Image: Fields_Image,
        }, {
            where: { id: id },
        });
        res
            .status(200)
            .json({ message: "data succesfully updated", data: UpdateUserData });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.UpdateDragAndDropData = UpdateDragAndDropData;
// --------------------------DELETE API------------------------
const DeleteDragAndDropData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const DeleteUserData = yield drag_model_1.default.destroy({ where: { id: id } });
        res
            .status(200)
            .json({ message: "data succesfully deleted", data: DeleteUserData });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.DeleteDragAndDropData = DeleteDragAndDropData;
