import { Router } from './router.js' 

const router = new Router()
router.add('/', '/pages/home.html')

router.add('/the_universe', '/pages/the_universe.css')
router.add('/the_universe', '/pages/the_universe.html')
router.add('/exploration', '/pages/exploration.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()