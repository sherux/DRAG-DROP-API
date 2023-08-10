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
const data_1 = __importDefault(require("../model/data"));
const drag_model_1 = __importDefault(require("../model/drag.model"));
// --------------------------GET API BY ID------------------------
const GetDragAndDropDataByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = +req.params.id;
        const userdata = yield data_1.default.findOne({ where: { id: data } });
        res.status(200).json({ message: "data succesfully fetch", data: userdata });
    }
    catch (error) {
        // console.log("error2", error);
        res.status(400).json({ message: error.message });
    }
});
exports.GetDragAndDropDataByid = GetDragAndDropDataByid;
const GetDragbyassociate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = +req.params.id;
        const userdata = yield data_1.default.findAll({
            include: [
                {
                    model: drag_model_1.default,
                    as: "Fields_Form",
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
        // const data = new USER({
        //   Fields_Input: req.body.dataElements[0],
        //   Fields_RadioBox: req.body.dataElements[1],
        //   Fields_CheckBox: req.body.dataElements[2],
        //   Fields_TextArea: req.body.dataElements[3],
        //   Fields_Image: req.body.Fields_Image,
        //   Fields_Comment: req.body.Fields_Comment,
        //   Fields_Rating: req.body.Fields_Rating,
        // });
        const data = new data_1.default({
            fields_input2: req.body.fields_input,
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
        res.status(500).json({ message: error.message });
    }
});
exports.CreateDragAndDropData = CreateDragAndDropData;
// --------------------------UPDATE API------------------------
const UpdateDragAndDropData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const UpdateUserData = yield data_1.default.update({
            fields_input2: req.body.fields_input,
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
        const DeleteUserData = yield data_1.default.destroy({
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
