import F1 from "../model/data";
import { RequestHandler } from "express";
import FieldsFormschema from "../model/drag.model";

// --------------------------GET API BY ID------------------------

export const GetDragAndDropDataByid: RequestHandler = async (req, res) => {
  try {
    const data: number = +req.params.id;

    const userdata = await F1.findOne({ where: { id: data } });
    res.status(200).json({ message: "data succesfully fetch", data: userdata });
  } catch (error: any) {
    // console.log("error2", error);

    res.status(400).json({ message: error.message });
  }
};
export const GetDragbyassociate: RequestHandler = async (req, res) => {
  try {
    const data: number = +req.params.id;

    const userdata = await F1.findAll({
      include: [
        {
          model: FieldsFormschema,
          as: "Fields_Form",
        },
      ],
      where: {
        id: data,
      },
    });
    res.status(200).json({ message: "data succesfully fetch", data: userdata });
  } catch (error: any) {
    // console.log("error2", error);

    res.status(400).json({ message: error.message });
  }
};

// --------------------------POST API------------------------

export const CreateDragAndDropData: RequestHandler = async (req, res) => {
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
    const data = new F1({
      fields_input2: req.body.fields_input,
      f_Id: req.body.f_id,
    });
    const userdata = await data.save();
    console.log(userdata);

    res.status(200).json({
      message: "data succesfully created",
      data: userdata,
      id: userdata.id,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// --------------------------UPDATE API------------------------

export const UpdateDragAndDropData: RequestHandler = async (req, res) => {
  try {
    const id: number = +req.params.id;

    const UpdateUserData = await F1.update(
      {
        fields_input2: req.body.fields_input,
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

    const DeleteUserData = await F1.destroy({
      where: { id: id },
    });
    res
      .status(200)
      .json({ message: "data succesfully deleted", data: DeleteUserData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
