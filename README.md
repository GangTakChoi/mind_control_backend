
# 개발용 서버 실행
### 1. 사전작업
+ docker 설치
+ docker compose 설치
+ .env 파일에 [로컬 DB URL]을 사용한다.

### 2. 실행
```bash
$ docker compose -f compose.dev.yaml up

# prisma 이용시 MongoDB 연결하는 경우 replica 설정을 필수로 해줘야함
$ docker exec mongo1 mongosh -u root -p root! --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'mongo1:27017'}]});"
```

# 상용 서버 실행
### 1. 사전작업
+ docker 설치
+ docker compose 설치
+ .env 파일에 [상용 DB URL]을 사용한다.

### 2. 실행
```bash
$ docker compose up -f compose.prod.yaml -d
```

