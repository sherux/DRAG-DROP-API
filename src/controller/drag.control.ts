import USER from "../model/drag.model";
import { RequestHandler } from "express";

// --------------------------GET API------------------------
export const GetDragAndDropData: RequestHandler = async (req, res) => {
  try {
    const userdata = await USER.findAll();

    res.status(200).json({ message: "data succesfully fetch", data: userdata });
  } catch (error: any) {
    console.log("error2", error);

    res.status(400).json({ message: error.message });
  }
};

// --------------------------GET API BY ID------------------------

export const GetDragAndDropDataByid: RequestHandler = async (req, res) => {
  try {
    const data: number = +req.params.id;

    const userdata = await USER.findOne({ where: { id: data } });

    res.status(200).json({ message: "data succesfully fetch", data: userdata });
  } catch (error: any) {
    console.log("error2", error);

    res.status(400).json({ message: error.message });
  }
};

// --------------------------POST API------------------------

export const CreateDragAndDropData: RequestHandler = async (req, res) => {
  try {
    const data = new USER({
      Input_value: req.body.Input_value,
      RadioBox: req.body.RadioBox,
      CheckBox: req.body.CheckBox,
      TextArea: req.body.TextArea,
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

    const Input_value = req.body.Input_value;
    const RadioBox = req.body.RadioBox;
    const CheckBox = req.body.CheckBox;
    const TextArea = req.body.TextArea;

    console.log(req.body.Input_value);
    const UpdateUserData = await USER.update(
      {
        Input_value: Input_value,
        RadioBox: RadioBox,
        CheckBox: CheckBox,
        TextArea: TextArea,
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
