FROM node:20-alpine AS builder

WORKDIR /build

COPY package.json package-lock.json* ./
RUN npm install

COPY templates/ ./templates/
COPY scripts/generateBlog.js scripts/generatePages.js scripts/renderContent.js ./scripts/
COPY pages/ ./pages/
COPY styles/ ./styles/
COPY res/ ./res/

# this is last bc it changes the most
COPY posts/ ./posts/

RUN node scripts/generateBlog.js && node scripts/generatePages.js


FROM nginx:alpine

COPY --from=builder /build/blog/ /usr/share/nginx/html/blog/
COPY --from=builder /build/*.html /usr/share/nginx/html/
# Copy all original static files
COPY styles/ /usr/share/nginx/html/styles/
COPY res/ /usr/share/nginx/html/res/
COPY favicon.ico me.jpg me_drawing.png gridbeat_privacy.txt /usr/share/nginx/html/

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf