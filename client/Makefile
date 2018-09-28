help:
	@echo "\033[0;33mPlease select a target:\033[0m"
	@echo
	@echo "    build:  clean -> cp public -> rollup"
	@echo "    clean:  rm build"
	@echo "    format: prettier & stylelint"
	@echo "    serve:  serve build"
	@echo "    start:  watch serve"
	@echo "    watch:  watch files and build on change"
	@echo

.PHONY: __build
__build: clean
	cp -R public build
	./node_modules/.bin/rollup --config ./rollup.config.js

.PHONY: __watch
__watch:
	watchman-make -p 'src/**/*.js' 'src/**/*.scss' -t __build

.PHONY: build
build:
	NODE_ENV=production $(MAKE) __build serve

.PHONY: clean
clean:
	rm -rf build

.PHONY: format
format:
	./node_modules/.bin/prettier --config .prettierrc --write '**/*.{js,json,jsx,md,scss,ts,tsx}'

.PHONY: serve
serve:
	./node_modules/.bin/static-server build -zop 8080 -n 404.html

.PHONY: start
start: __build
	@$(MAKE) -j2 serve __watch

.PHONY: watch
watch: __buid __watch