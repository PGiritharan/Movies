const express = require('express');
const Movies = require('../models/movies');
const auth = require('../middleware/auth');
const router = new express.Router();

// router.post('/tasks', auth, async (req,res)=>{
//     const task = new Task({...req.body,owner:req.user._id});
//     try {
//         await task.save();
//         res.status(201).send(task);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// GET /tasks?completed=false
// GET /tasks?limit=10&skip=0
// GET /tasks?sortBy=createdAt_asc
router.get('/', async (req, res) => {
    const sortBy = req.query && req.query.sortBy;
    let data = new Object()
    try {
        const movies = await Movies.getMovies().then((resp) => {
            let movieList = resp.components[1].items
            let sortOrder = resp.components[0].items
            if (sortBy != "false") {
                if (sortBy === "releaseDate" || sortBy === "rank") {
                    movieList.sort((a, b) => {
                        return a[`${sortBy}`] - b[`${sortBy}`];
                    });
                }
            } else {
                movieList.sort((a, b) => {
                    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                })
            }
            data.movieList = movieList;
            data.sortOrder = sortOrder;
            return data
        });
        res.send(movies)
    } catch (error) {
        console.log
        res.status(500).send(error);
    }
});

// router.get('/tasks/:id',auth,async (req,res)=>{
//     const _id = req.params.id;
//     try {
//        const task = await Task.findOne({_id, owner: req.user._id});
//        if(!task) return res.status(404).send('No Tasks');
//        res.send(task);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// router.patch('/tasks/:id',auth,async (req,res)=>{
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['completed','description'];
//     const isValidOperation = updates.every((update)=>allowedUpdates.includes(update));
//     if(!isValidOperation) return res.status(400).send({'error':'Invalid updates'});
//     try {
//         const task = await Task.findOne({_id:req.params.id,owner:req.user._id});
//         if(!task) return res.status(404).send('Task not found');
//         updates.forEach((update)=>task[update]=req.body[update]);
//         await task.save();
//         res.send(task);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// router.delete('/tasks/:id', auth, async (req,res)=>{
//     try {
//         const task = await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id});
//         if(!task) return res.status(404).send();
//         res.send(task)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// });

module.exports = router;
