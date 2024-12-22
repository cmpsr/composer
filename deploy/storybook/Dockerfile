# Copyright 2020 Google, LLC.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# https://hub.docker.com/_/node
FROM node:20-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy local code to the container image.
COPY . ./

# Install production dependencies.
RUN npm install
RUN npm run build-storybook

# The standard nginx container just runs nginx. The configuration file added
# below will be used by nginx.
FROM nginx

EXPOSE 8080

# Copy the nginx configuration file. This sets up the behavior of nginx, most
# importantly, it ensure nginx listens on port 8080. Google App Engine expects
# the runtime to respond to HTTP requests at port 8080.
COPY ./nginx.conf /etc/nginx/nginx.conf

# Finally, all static assets.
COPY --from=0 /usr/src/app/projects/ui-storybook/storybook-static/ /usr/share/nginx/www/
RUN chmod -R a+r /usr/share/nginx/www
