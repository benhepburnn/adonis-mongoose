import { ConnectOptions, default as mongoose } from 'mongoose'

export type MongoDbConfig = {
  useDefaultConnection: boolean
  uri: string
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
