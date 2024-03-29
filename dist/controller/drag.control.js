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
exports.DeleteDragAndDropData = exports.UpdateDragAndDropData = exports.CreateDragAndDropData = exports.GetDragbyassociate = exports.GetDragAndDropDataByid = void 0;
const drag_model_1 = __importDefault(require("../model/drag.model"));
const data_1 = __importDefault(require("../model/data"));
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
// --------------------------GET API BY ID WITH ASSOCIATE------------------------
const GetDragbyassociate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = +req.params.id;
        const userdata = yield drag_model_1.default.findAll({
            include: [
                {
                    model: data_1.default,
                    as: "Fields_Form2",
                },
            ],
            where: {
                id: data,
            },
        });
        res.status(200).json({ message: "data succesfully fetch", data: userdata });
    }
    catch (error) {
        // console.log("error2", error);
        res.status(400).json({ message: error.message });
    }
});
exports.GetDragbyassociate = GetDragbyassociate;
// --------------------------POST API------------------------
const CreateDragAndDropData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const data = new drag_model_1.default({
            fields_input: req.body.fields_input,
            fields_radioBox: req.body.fields_radioBox,
            fields_checkBox: req.body.fields_checkBox,
            fields_textArea: req.body.fields_textArea,
            fields_image: req.body.fields_image,
            fields_comment: req.body.fields_comment,
            fields_rating: req.body.fields_rating,
            f_Id: req.body.f_id,
        });
        const userdata = yield data.save();
        console.log(userdata);
        res.status(200).json({
            message: "data succesfully created",
            data: userdata,
            id: userdata.id,
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error });
    }
});
exports.CreateDragAndDropData = CreateDragAndDropData;
// --------------------------UPDATE API------------------------
const UpdateDragAndDropData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const UpdateUserData = yield drag_model_1.default.update({
            fields_input: req.body.fields_input,
            fields_radioBox: req.body.fields_radioBox,
            fields_checkBox: req.body.fields_checkBox,
            fields_textArea: req.body.fields_textArea,
            fields_image: req.body.fields_image,
            fields_comment: req.body.fields_comment,
            fields_rating: req.body.fields_rating,
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
        const DeleteUserData = yield drag_model_1.default.destroy({
            where: { id: id },
        });
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
