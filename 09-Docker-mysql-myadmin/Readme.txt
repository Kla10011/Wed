///// Download image nginx
docker pull nginx:[version]


///// Run nginx
docker run --detach --publish 8080:80 --name nginx-server nginx:1.23.3

docker ps //check container
docker ps --all //check container in stop
docker rm [ID]//remove container

///// build after create DB and DF
docker build -t mysql-docker:0.1 .

///// run mysql-docker from image
docker run --name mysql-server -d -p 3306:3306 mysql-docker
docker run --name mysql-phpadmin -d --link mysql-server:db -p 8081:80 phpmyadmin/phpmyadmin

///// check configuration
docker inspect [name/id]