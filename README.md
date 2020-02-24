# stockx - size calculation

requirements
- docker
- docker-compose

to try this project, just execute the follow command:

```bash
docker-compose up -d --build
```

then, you could try enter to `http://localhost:3000/explorer` in your browser.

to monitoring system, could go to `http://localhost:3001/appmetrics-dash/`.
here you could see metrics about hit and resources used by the gateway. 

if you need stop the services and clean container just run the followings 
commands.

- stop services : `docker-compose down`
- clean container and images: `docker system prune`


to validate TDD, execute the followings commands:

- run containers with `docker-compose up -d`
- enter to gateway container  with `docker-compose exec gateway bash`
- to validate test, try now `npm run test`

