FROM apline as build
WORKDIR /usr/app/
COPY package.json .
RUN npm i
COPY . .
ENTRYPOINT [ "npm", "run", "prod" ]

FROM nginx as app
COPY --from=build /usr/app/dist usr/share/nginx/html
