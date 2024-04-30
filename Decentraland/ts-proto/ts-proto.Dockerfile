FROM node:17-alpine as build

WORKDIR /ts-proto
COPY . .

# Install all dependencies needed for production build
RUN yarn install
RUN yarn build

# clean all depencies
RUN rm -rf node_modules
RUN yarn cache clean

# install production dependencies only
RUN yarn workspaces focus --production

FROM node:17-alpine

WORKDIR /ts-proto
COPY --from=build /ts-proto/build build
COPY --from=build /ts-proto/node_modules node_modules
COPY protoc-gen-dcl_ts_proto .

ENTRYPOINT ["./protoc-gen-dcl_ts_proto"]
