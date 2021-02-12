FROM node:alpine

WORKDIR /app
COPY package.json .
# TODO change below install command if needed
# e.g. add `--ignore-optional` to ignore optional deps
RUN yarn install
COPY . .

CMD ["yarn", "start"]
