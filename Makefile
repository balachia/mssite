
all:
	make clean && make build

debug:
	make clean && DEBUG=metalsmith:* make build

clean:
	rm -rf build

deploy: build
	bin/deploy.sh

site: build
	static-server build

build: node_modules
	node index.js

node_modules: package.json
	npm install

.PHONY: all build clean site debug deploy
