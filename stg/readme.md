- 測試環境 : 提供兩個服務 `/tipc/map`、`/tipc/api`
    - `/tipc/map` 透過 nginx 代理
    - `/tipc/api` 測試環境原本提供的服務

- 以下這兩個都在原本港務環境提供 restful api 的 server 中 nginx config 也是在該台上做修改
    - `http://localhost:5000/tipc/map`
    - `http://localhost:5000/tipc/api`