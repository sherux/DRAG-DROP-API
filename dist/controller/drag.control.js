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
exports.DeleteDragAndDropData = exports.UpdateDragAndDropData = exports.CreateDragAndDropData = exports.GetDragAndDropDataByid = exports.GetDragAndDropData = void 0;
const drag_model_1 = __importDefault(require("../model/drag.model"));
// --------------------------GET API------------------------
const GetDragAndDropData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userdata = yield drag_model_1.default.findAll();
        res.status(200).json({ message: "data succesfully fetch", data: userdata });
    }
    catch (error) {
        console.log("error2", error);
        res.status(400).json({ message: error.message });
    }
});
exports.GetDragAndDropData = GetDragAndDropData;
// --------------------------GET API BY ID------------------------
const GetDragAndDropDataByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = +req.params.id;
        const userdata = yield drag_model_1.default.findOne({ where: { id: data } });
        res.status(200).json({ message: "data succesfully fetch", data: userdata });
    }
    catch (error) {
        console.log("error2", error);
        res.status(400).json({ message: error.message });
    }
});
exports.GetDragAndDropDataByid = GetDragAndDropDataByid;
// --------------------------POST API------------------------
const CreateDragAndDropData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new drag_model_1.default({
            Input_value: req.body.Input_value,
            RadioBox: req.body.RadioBox,
            CheckBox: req.body.CheckBox,
            TextArea: req.body.TextArea,
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
        const Input_value = req.body.Input_value;
        const RadioBox = req.body.RadioBox;
        const CheckBox = req.body.CheckBox;
        const TextArea = req.body.TextArea;
        console.log(req.body.Input_value);
        const UpdateUserData = yield drag_model_1.default.update({
            Input_value: Input_value,
            RadioBox: RadioBox,
            CheckBox: CheckBox,
            TextArea: TextArea,
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
