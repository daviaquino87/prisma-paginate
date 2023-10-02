#!/bin/bash

npm install
npm run build
npx prisma migrate dev
npm run start:dev