FROM nginx:alpine

ARG APP_VERSION
ARG APP_GIT_SHA
ARG APP_VERSION_FULL
ARG APP_BUILD_DATE
ENV APP_VERSION=${APP_VERSION} \
    APP_GIT_SHA=${APP_GIT_SHA} \
    APP_VERSION_FULL=${APP_VERSION_FULL} \
    APP_BUILD_DATE=${APP_BUILD_DATE}

RUN apk add --no-cache curl
COPY . /usr/share/nginx/html/
# Remove non-web files
RUN rm -f /usr/share/nginx/html/HOMELAB_ONBOARDING.md \
          /usr/share/nginx/html/.gitignore \
          /usr/share/nginx/html/README.md
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD curl --silent --show-error --fail http://127.0.0.1/ > /dev/null || exit 1
