const express = require('express')
const router = express.Router();
const Joi = require('joi')


let courses = [
    { id: 1, name: 'courses1' },
    { id: 2, name: 'courses2' },
    { id: 3, name: 'courses3' },
  ]

router.get("/", (req, res) => {
    res.send([1, 2, 3])
})

router.get('/:id', (req, res) => {
    const course = courses.find(course => course.id == parseInt(req.params.id))
    if (!course) {
        res.send(404)
        return
    }
    else {
        res.send(course)
        return
    }
})

router.post('/', (req, res) => {
    const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().min(4).required()
    });

    const { error, value } = schema.validate(req.body);

    if (!error) {
        courses.push(value);
        res.send(courses);
        return
    } else {
        res.status(400).send(error);
        return
    }
})



router.put("/:id", (req, res) => {
    const id = req.params.id
    const name = req.body.name

    if (id && name) {
        const course = courses.find(course => course.id == id)
        if (course) {
            course.name = name
            res.send(courses)
            return
        } else {
            res.status(400).json({ msg: "course not found" })
            return
        }
    } else {
        res.status(404).json("id and name not found")
        return
    }
})

router.delete("/:id", (req, res) => {
    const id = req.params.id

    if (id) {
        const courseID = courses.find(course => course.id == id);
        if (courseID) {
            courses = courses.filter(course => course.id != courseID.id)
            res.send(courses)
            return
        } else {
            res.status(400).json({ msg: "course not found" })
            return
        }
    } else {
        res.status(404).json("id not found")
        return
    }
})

module.exports = router