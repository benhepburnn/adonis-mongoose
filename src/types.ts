import { Secret } from '@adonisjs/core/helpers'
import { ConnectOptions, default as mongoose } from 'mongoose'

export type MongoDbConfig = {
  useDefaultConnection: boolean
  uri: Secret<string>
  options: ConnectOptions
}

export type MongooseConfig = {
  mongodb: MongoDbConfig
}

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    mongoose: typeof mongoose
  }
}
