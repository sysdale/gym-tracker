const router = require("express").Router();
const {
  getWorkouts,
  getOneWorkout,
  addWorkout,
  deleteWorkout,
  editWorkout,
  getPDF,
} = require("../controllers/gym_controllers");
const requireAuth = require("../middleware/auth");

router.use(requireAuth);

router.route("/").get(getWorkouts);
router.route("/export").get(getPDF);
router.route("/:id").get(getOneWorkout);

router.route("/").post(addWorkout);
router.route("/:id").delete(deleteWorkout);
router.route("/:id").patch(editWorkout);

module.exports = router;
