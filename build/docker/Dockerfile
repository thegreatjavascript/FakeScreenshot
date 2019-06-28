FROM node:8-alpine

ENV HOST=0.0.0.0

RUN apk add --nocache --virtual .deps git && \
    git clone https://github.com/thegreatjavascript/FakeScreenshot.git && \
    apk del .deps

WORKDIR FakeScreenshot

RUN yarn

EXPOSE 8000

CMD ["yarn", "run", "dev"]
