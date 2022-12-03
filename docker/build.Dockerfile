ARG app_image
ARG builder_image
FROM ${builder_image} AS prepare

# The following prevents errors when cwebp is installing.
RUN apt-get -qq update && apt-get -qq -y install libglu1
WORKDIR /usr/src/app
RUN yarn global add mocha
COPY package.json .
COPY yarn.lock .
RUN yarn install --silent --non-interactive --prefer-offline --cache-folder ./cache


FROM ${builder_image} AS build
COPY .env* ./
COPY .eslintignore .
COPY .eslintrc.js .
COPY .nvmrc .
COPY .prettierignore .
COPY .prettierrc .
COPY babel.config.js .
COPY tsconfig.json .
COPY config config
COPY public public
COPY webpack webpack
COPY src src
RUN yarn run build:ci
RUN mocha --timeout=5000 dist/server/start.js -tests
COPY version.json ./static/version.json
RUN cat ./static/version.json

FROM ${app_image} AS final
COPY manifest.json /
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --production --link-duplicates --silent --non-interactive --prefer-offline --cache-folder ./cache && yarn cache clean
COPY .env* ./
COPY webpack/define-config.js ./webpack/
COPY --from=build /usr/src/app/dist dist

# Start the server with launcher.js using docker environment variables. This is the preferred startup method when created via Blocks.
# If launcher.js cannot find an existing start script, it will generate one to start the server based on the supplied args
ENTRYPOINT node --max-http-header-size=800000 dist/server/launcher.js --alias=$alias --projectId=$projectId --accessToken=$accessToken

EXPOSE 3001
