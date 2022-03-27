/**
|-----------------------------------
| Web Routes
|-----------------------------------
| Put all api routes here
*/

import Route from '@ioc:Adonis/Core/Route'

export function WEB() {
  return Route.group(() => {
    Route.get('/', async ({ view }) => {
      return view.render('welcome')
    })
    Route.get('/home/:id', async ({ response }) => {
      return response.json({
        code: 200,
        message: `Welcome`,
      })
    }).where('id', {
      match: /^[a-z]+-[0-9]+$/,
    })
  })
}
