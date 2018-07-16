import Note from '../models/note'
import errorHandler from '../utils/errorHandler'

class NoteCtrl {
  async create(req, res) {

    const note = new Note({
      title: req.body.title,
      description: req.body.description,
      author: req.user.id
    })

    try {
      await note.save()
      res.status(201).json(note)
    } catch(e) {
      errorHandler(res, e)
    }
  }

  async all(req, res) {
    try {
      const note = await Note.find({author: req.user.id})
      res.status(200).json(note)
    } catch(e) {
      errorHandler(res, e)
    }
  }
  
  async remove(req, res) {
    const candidate = await Note.findOne({_id: req.params.id, author: req.user.id})
    if(candidate){
      try {
        const note = await Note.remove({_id: req.params.id})
        res.status(200).json(candidate)
      } catch(e) {
        errorHandler(res, e)
      }
    } else {
      res.status(404).json({
        message: 'note with such id not found'
      })
    }
  }

  async update(req, res) {
    const candidate = await Note.findOne({_id: req.params.id, author: req.user.id})

    if(candidate){
      const { title, description } = req.body
      const update = {
        title,
        description
      }
      try {
        const note = await Note.findByIdAndUpdate({_id: req.params.id}, update, {new: true})
        res.status(200).json(note)
      } catch(e) {
          errorHandler(res, e)
      }
    } else {
      res.status(404).json({
        message: 'note with such id not found'
      })
    }
  }
}

export default NoteCtrl