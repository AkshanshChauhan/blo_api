const express = require("express");
const router = express.Router();
const blo_module = require("../../database_modules/blo_module");
const { default: mongoose } = require("mongoose");

router.get("/all", (req, res, next) => {
    blo_module.find()
        .exec()
        .then(data => {
            res.status(200).json({
                message: "ALL BLO DATA",
                data: data
            })
        })
        .catch(err => console.log(err));
});

// router.get("/:roll_number", (req, res, next) => {
//     const roll_number_finder = req.params.roll_number;
//     studentsModule.find({ roll_number: roll_number_finder })
//         .exec()
//         .then(data => {
//             res.status(200).json({
//                 message: "Student Data of Roll Number: " + roll_number_finder,
//                 data: data
//             })
//         })
//         .catch(err => console.log(err));
// });

router.post("/", (req, res, next) => {
    const bloData = new blo_module({
        _id: new mongoose.Types.ObjectId(),
        input1: req.body.input1,
        input2: req.body.input2,
        input3: req.body.input3,
        input4: req.body.input4,
        input5: req.body.input5,
        input6: req.body.input6,
        input7: req.body.input7,
        input8: req.body.input8,
        input9: req.body.input9,
        input10: req.body.input10,
        input11: req.body.input11
    });

    bloData.save()
        .then(res => console.log(res))
        .catch(err => console.log(err));

    res.status(200).json({
        message: "Data is Successfully Posted",
        student_data_to_post: bloData
    });
});

// blo_module.find({ roll_number: req.body.roll_number })
//         .exec()
//         .then(data => {
//             console.log(data)
//             if (data != "") {
//                 res.status(500).json({
//                     message: "Data Already Existed!!!",
//                     already_exist_data: data
//                 });
//             } else {

//             }
//         })

// router.delete("/:id", (req, res, next) => {
//     const id = req.params.id;
//     studentsModule.findOneAndRemove({ _id: id })
//         .exec()
//         .then(data => {
//             res.status(200).json({
//                 message: "Student Data Successfully Deleted Of Id: " + id,
//                 data: data
//             })
//         })
//         .catch(err => console.log(err));
// });

module.exports = router;