FROM nginx:1.17.9-alpine

COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./config/nginx-server.conf /etc/nginx/conf.d/default.conf
                                  
## Remove default nginx website
RUN rm -i /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY dist/** /usr/share/nginx/html

#RUN adduser -D myuser
#USER myuser
#CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
CMD envsubst '${PORT}' < "/etc/nginx/conf.d/default.conf" > "/etc/nginx/conf.d/default.conf" \ 
    && nginx -g 'daemon off;'
