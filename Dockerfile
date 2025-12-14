FROM node:20-alpine AS builder

WORKDIR /build

COPY package.json package-lock.json* ./
RUN npm install

COPY templates/ ./templates/
COPY scripts/generateBlog.js ./scripts/
COPY pages/ ./pages/
COPY styles/ ./styles/

# this is last bc it changes the most
COPY posts/ ./posts/

RUN node scripts/generateBlog.js


FROM nginx:alpine

COPY --from=builder /build/blog/ /usr/share/nginx/html/blog/
COPY --from=builder /build/pages/blog.html /usr/share/nginx/html/pages/
# Copy all original static files
COPY index.html /usr/share/nginx/html/
COPY pages/ /usr/share/nginx/html/pages/
COPY scripts/ /usr/share/nginx/html/scripts/
COPY styles/ /usr/share/nginx/html/styles/
COPY res/ /usr/share/nginx/html/res/
COPY favicon.ico me.jpg gridbeat_privacy.txt /usr/share/nginx/html/