
# 개발용 서버 실행
### 1. 사전작업
+ Docker 설치
+ Docker Compose 설치

### 2. 실행
```bash
$ docker compose -f compose.dev.yaml up

# prisma 이용시 MongoDB 연결하는 경우 replica 설정을 필수로 해줘야함
$ docker exec mongo1 mongosh -u root -p root! --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'mongo1:27017'}]});"
```

# 상용 서버 실행
### 1. 사전작업
+ Docker 설치
+ Docker Compose 설치

### 2. 실행
```bash
$ docker compose -f compose.prod.yaml up -d
```

