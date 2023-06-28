- start their GIS map

```bash
npm run start # 開發時需要將 domain proxy 到 stg ./server.js middleware
```

```bash
cd ./stg
docker-compose up
```

- Our frontend (`./index.html`) embed their GIS map (`http://localhost:5000/tipc/map/index.html`)