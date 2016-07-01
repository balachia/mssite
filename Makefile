
all:
	make clean && make build

clean:
	rm -rf build

site: build/
	static-server build

build: node_modules
	node index.js

debug: node_modules
	DEBUG=metalsmith:* make build

node_modules: package.json
	npm install

.PHONY: build clean site debug
