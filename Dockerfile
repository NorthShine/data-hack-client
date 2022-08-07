FROM node:latest

WORKDIR /datahack_client

COPY . /datahack_client/

RUN apt-get update -y && apt-get install -y xdg-utils
RUN npm install
RUN chmod a+rwx docker-entrypoint.sh

ENTRYPOINT [ "./docker-entrypoint.sh" ]