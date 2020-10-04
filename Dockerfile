FROM node:12.18.4-alpine3.12

WORKDIR /usr/github-public-api-tests

COPY . .

RUN npm install

ENV EXTERNAL_URL api.github.com
ENV GITHUB_USERNAME qa-assignment
ENV GITHUB_TOKEN cd2045ca158d07edbbded17f33f5b9bcf4bae446

CMD [ "npm", "test" ]