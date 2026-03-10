FROM nginx:alpine
RUN apk add --no-cache curl
COPY . /usr/share/nginx/html/
# Remove non-web files
RUN rm -f /usr/share/nginx/html/HOMELAB_ONBOARDING.md \
          /usr/share/nginx/html/.gitignore \
          /usr/share/nginx/html/README.md
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD curl --silent --show-error --fail http://127.0.0.1/ > /dev/null || exit 1
