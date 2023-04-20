import Router from 'koa-router'
import getHealth from './health/health'
import getUsersFromDataset from './../repository/usersRepository'
const router = new Router()

router.get('/health', getHealth)

router.get('api/users/:name', getUsersFromDataset)
export default router
