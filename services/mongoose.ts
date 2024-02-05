import app from '@adonisjs/core/services/app'
const mongoose = await app.container.make('mongoose')
export { mongoose as default }
