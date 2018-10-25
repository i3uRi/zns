root_dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

.PHONY: all
all:
	-cp -R public/ www/
	NODE_ENV=production $(MAKE) -j2 javascript css

.PHONY: watch
watch: all
	watchman-make -p 'src/**/*.js' -t javascript -p 'src/**/*.scss' -t css

.PHONY: install
install:
	yarn

.PHONY: fake-cert
fake-cert:
	-[ ! -f ssl/local.key ] || [ ! -f ssl/local.cert ] && openssl req -new -newkey rsa:1024 -days 365 -nodes -x509 \
    -subj "/C=US/ST=Test/L=Test/O=Test/CN=local" \
    -keyout ssl/local.key -out ssl/local.cert

.PHONY: kill-serve-nginx
kill-serve-nginx:
	-pkill nginx

.PHONY: serve-nginx
serve-nginx: fake-cert kill-serve-nginx
	nginx -c $(root_dir)nginx.dev.conf

.PHONY: start
start:
	$(MAKE) -j2 watch serve-nginx

.PHONY: clean
clean:
	@echo "[ $@	: \033[0;33mCleaning...\033[0m ]"
	rm -rf www node_modules

.PHONY: css
css:
	@echo "[ $@	: \033[0;35mProcessing...\033[0m ]"
	-./scripts/compile-scss.js
	@echo "[ $@	: \033[0;32mDone building\033[0m ]"

.PHONY: javascript
javascript:
	@echo "[ $@	: \033[0;35mProcessing...\033[0m ]"
	./node_modules/.bin/rollup -c --silent
	@echo "[ $@	: \033[0;32mDone building\033[0m ]"

.PHONY: format
format:
	@echo "[ $@	: \033[0;36mFormatting...\033[0m ]"
	./node_modules/.bin/prettier -l --write src/**/*.{js,scss}
	./node_modules/.bin/stylelint --fix src/styles

.PHONY: help
help:
	@echo "[ \033[0;36mPlease select a target\033[0m ]"
	@echo '[ all	: ]'
	@echo '[ container	: ]'
	@echo '[ clean	: ]'
	@echo '[ css	: ]'
	@echo '[ format	: ]'
	@echo '[ help	: ]'
	@echo '[ javascript	: ]'
	@echo '[ kill-container	: ]'
	@echo '[ serve	: ]'
	@echo '[ serve-container	: ]'
	@echo '[ watch	: ]'
