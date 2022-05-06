import promos from "../../data/promos.json"
import students from "../../data/students.json"

export const promoController = {
	findItem(type, array, left) {
		return type === true
			? array.find((element) => element.id === left)
			: array.filter((element) => element.promo === left.id)
	},

	promosList(_, res) {
		res.render("promos", { promos: promos })
	},

	promoPage(req, res) {
		res.render("promo", {
			promoId: promoController.findItem(true, promos, +req.params.id),
		})
	},

	studentsPage(req, res) {
		res.render("students", {
			promoId: promoController.findItem(true, promos, +req.params.id),
			promo: promoController.findItem(
				false,
				students,
				promoController.findItem(true, promos, +req.params.id)
			),
		})
	},

	studentPage(req, res) {
		res.render("student", {
			promoId: promoController.findItem(true, promos, +req.params.id),
			student: promoController.findItem(true, students, +req.params.student),
		})
	},
}
