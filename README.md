# AdonisJS Mongoose

This package creates a Mongoose service for use in AdonisJS applications.

## Install

Install mongoose and this package from npm:
```sh
npm install mongoose @benhepburn/adonis-mongoose
```
or
```sh
pnpm install mongoose @benhepburn/adonis-mongoose
```
or
```sh
yarn add mongoose @benhepburn/adonis-mongoose
```
<br />

Then configure the package for Adonis:
```sh
node ace configure @benhepburn/adonis-mongoose
```

## Configuration

Edit config/mongoose.ts as needed, then add the MongoDB connection URI to your .env file:
```dotenv
MONGODB_URI=mongodb://...
```
