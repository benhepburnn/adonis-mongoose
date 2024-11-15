import app from '@adonisjs/core/services/app'
import mongooseDefault from 'mongoose'

let mongoose: typeof mongooseDefault

/**
 * Returns a singleton instance of the NotificationsService class from the
 * container.
 */
await app.booted(async () => {
  mongoose = await app.container.make('mongoose')
})

export { mongoose as default }
