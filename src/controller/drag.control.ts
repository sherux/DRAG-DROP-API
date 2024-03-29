import FieldsFormschema from "../model/drag.model";
import { RequestHandler } from "express";
import F1 from "../model/data";

// --------------------------GET API BY ID------------------------

export const GetDragAndDropDataByid: RequestHandler = async (req, res) => {
  try {
    const data: number = +req.params.id;

    const userdata = await FieldsFormschema.findOne({ where: { id: data } });
    res.status(200).json({ message: "data succesfully fetch", data: userdata });
  } catch (error: any) {

    res.status(400).json({ message: error.message });
  }
};
// --------------------------GET API BY ID WITH ASSOCIATE------------------------

export const GetDragbyassociate: RequestHandler = async (req, res) => {
  try {
    const data: number = +req.params.id;

    const userdata = await FieldsFormschema.findAll({
      include: [
        {
          model: F1,
          as: "Fields_Form2",
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

    const data = new FieldsFormschema({
      fields_input: req.body.fields_input,
      fields_radioBox: req.body.fields_radioBox,
      fields_checkBox: req.body.fields_checkBox,
      fields_textArea: req.body.fields_textArea,
      fields_image: req.body.fields_image,
      fields_comment: req.body.fields_comment,
      fields_rating: req.body.fields_rating,
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
    res.status(500).json({ message: error });
  }
};

// --------------------------UPDATE API------------------------

export const UpdateDragAndDropData: RequestHandler = async (req, res) => {
  try {
    const id: number = +req.params.id;

    const UpdateUserData = await FieldsFormschema.update(
      {
        fields_input: req.body.fields_input,
        fields_radioBox: req.body.fields_radioBox,
        fields_checkBox: req.body.fields_checkBox,
        fields_textArea: req.body.fields_textArea,
        fields_image: req.body.fields_image,
        fields_comment: req.body.fields_comment,
        fields_rating: req.body.fields_rating,
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

    const DeleteUserData = await FieldsFormschema.destroy({
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
