FROM node:20.14.0

ENV HOME=/advices
WORKDIR $HOME

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]