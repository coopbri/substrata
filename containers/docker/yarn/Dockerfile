FROM node:alpine

WORKDIR /app
COPY package.json .
# TODO change below install command if needed
#   e.g. add `--ignore-optional` to ignore optional deps
# Also, the `install` keyword is not necessary, and is only used for clarity
RUN yarn install
COPY . .

CMD ["yarn", "start"]
