PROJECT = "GitHub Public Api Tests"

npm: ;@echo "Testing ${PROJECT} with npm....."; \
	npm install
	npm test
	allure serve

docker: ;@echo "Testing ${PROJECT} on docker....."
	docker build --tag githubtests .
	docker run -it githubtests
 