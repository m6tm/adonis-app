/**
|-----------------------------------
| Routes API
|-----------------------------------
| Put all api routes here
*/

import Route from '@ioc:Adonis/Core/Route'

export function API() {
  return Route.group(() => {
    Route.get('/', async ({ response }) => {
      return response.json({
        code: 200,
        message: `API zone`,
      })
    })
  }).prefix('api')
}
