import USER from "../model/drag.model";
import { RequestHandler } from "express";

// --------------------------GET API BY ID------------------------

export const GetDragAndDropDataByid: RequestHandler = async (req, res) => {
  try {
    const data: number = +req.params.id;

    const userdata = await USER.findOne({ where: { id: data } });

    res.status(200).json({ message: "data succesfully fetch", data: userdata });
  } catch (error: any) {
    // console.log("error2", error);

    res.status(400).json({ message: error.message });
  }
};

// --------------------------POST API------------------------

export const CreateDragAndDropData: RequestHandler = async (req, res) => {
  try {
    const data = new USER({
      Fields_Input: req.body.Fields_Input,
      Fields_RadioBox: req.body.Fields_RadioBox,
      Fields_CheckBox: req.body.Fields_CheckBox,
      Fields_TextArea: req.body.Fields_TextArea,
      Fields_Image: req.body.Fields_Image,
    });
    const userdata = await data.save();
    res
      .status(200)
      .json({ message: "data succesfully created", data: userdata });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// --------------------------UPDATE API------------------------

export const UpdateDragAndDropData: RequestHandler = async (req, res) => {
  try {
    const id: number = +req.params.id;

    const Fields_Input = req.body.Fields_Input;
    const Fields_RadioBox = req.body.Fields_RadioBox;
    const Fields_CheckBox = req.body.Fields_CheckBox;
    const Fields_TextArea = req.body.Fields_TextArea;
    const Fields_Image = req.body.Fields_Image;

    const UpdateUserData = await USER.update(
      {
        Fields_Input: Fields_Input,
        Fields_RadioBox: Fields_RadioBox,
        Fields_CheckBox: Fields_CheckBox,
        Fields_TextArea: Fields_TextArea,
        Fields_Image: Fields_Image,
      },
      {
        where: { id: id },
      }
    );

    res
      .status(200)
      .json({ message: "data succesfully updated", data: UpdateUserData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
// --------------------------DELETE API------------------------

export const DeleteDragAndDropData: RequestHandler = async (req, res) => {
  try {
    const id: number = +req.params.id;

    const DeleteUserData = await USER.destroy({ where: { id: id } });
    res
      .status(200)
      .json({ message: "data succesfully deleted", data: DeleteUserData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
