FROM node:18.19 as builder
WORKDIR /app
COPY . .

ARG WEBTEAM_UI_NPM_TOKEN
RUN npm install --legacy-peer-deps
RUN npm run build

FROM nginxinc/nginx-unprivileged:mainline-alpine-slim
EXPOSE 3000

COPY --chown=101:101 ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=101:101 /app/dist /usr/share/nginx/html
