FROM node as build-image

RUN npm config set registry 'https://registry.npm.taobao.org' && \
    yarn config set registry 'https://registry.npm.taobao.org' && \
    yarn global add pm2 && \
    yarn cache clean

WORKDIR /app
COPY package.json ./package.json
RUN npm install

COPY ./ ./
RUN npm rebuild node-sass --force

ENV HOST 0.0.0.0
ENV PORT 5000

ENTRYPOINT [ "npm" ,"run","dev"]