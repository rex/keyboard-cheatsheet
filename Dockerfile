FROM nginx:alpine
COPY . /usr/share/nginx/html/
# Remove non-web files
RUN rm -f /usr/share/nginx/html/HOMELAB_ONBOARDING.md \
          /usr/share/nginx/html/.gitignore \
          /usr/share/nginx/html/README.md
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD wget -qO- http://localhost:80/ || exit 1
