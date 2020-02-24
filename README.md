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

______

example to try:

```bash
curl -X POST "http://localhost:3000/shoes" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"name\":\"adidas\",\"sizes\":[2,4,6,7,3,2]}"
```

you can try with postman with this request body (json)

```json
{
  "name": "adidas",
  "sizes": [
    2,4,6,7,3,2
  ]
}
```

the right response will be:

```json
{
  "id": 1,
  "name": "adidas",
  "sizes": [
    2,
    4,
    3,
    2
  ],
  "calculation": 2.75
}
```

the calculation field is the result of algorithm and the `sizes` is clean.
compare request body size field and response body `sizes` field


