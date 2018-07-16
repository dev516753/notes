import express from 'express'
import requireAuth from '../requireAuth'
import NoteCtrl from '../controllers/note'
const router = express.Router()
const noteController = new NoteCtrl();

router.get('/notes', requireAuth, noteController.all)
router.delete('/notes/:id', requireAuth, noteController.remove)
router.post('/notes/add', requireAuth, noteController.create)
router.put('/notes/:id', requireAuth, noteController.update)

export default router