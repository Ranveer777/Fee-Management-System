const express = require("express");
const router = express.Router();
const { checkAdmin } = require("../middleware/authMiddlware");
const authController = require("../controllers/authControllers");

router.get("/login", (req, res) => {
    res.render("admin");
});


router.post("/login", authController.admin_login_post);
router.get("/logout", authController.get_admin_logout);


router.post('*',checkAdmin);
router.get('*',checkAdmin);

router.get("/admindashboard", (req, res) => {
    res.render("admin_dashboard");
});

router.get("/approve_scholarship",authController.get_student_applied_for_scholarship);
router.get("/handle_scholarship/:id",authController.handle_students_scholarship);
router.post("/approvescholarship",authController.approve_scholarship);
router.get("/get_student_info",authController.get_student_info);
router.get("/add_student_record",authController.add_student_record);
router.post("/add_student_record_post",authController.add_student_record_post);
router.get("/add_fee_structure",authController.add_fee_structure);
router.post("/add_fee_structure",authController.add_fee_structure_post);

module.exports = router;