FROM node:16-alpine as builder

COPY . /frontend

WORKDIR /frontend

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

#RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /frontend/build /usr/share/nginx/html
COPY --from=builder /frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 6789

CMD ["nginx", "-g", "daemon off;"]