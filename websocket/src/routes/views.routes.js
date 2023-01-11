import { Router } from "express"

const router = Router()

router.get('/chat', (req, res) => {
  res.render('index', {
    title: 'Chat'
  })
})

export default router