FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
# react-scriptのインストール
RUN npm install react-scripts@4.0.3 -g
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
