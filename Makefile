PROJECT = "GitHub Public Api Tests"

test: ;@echo "Testing ${PROJECT}....."; \
	npm install
	npm test
	allure serve
 