.PHONY: help install dev build preview deploy domain clean

DOMAIN ?= https://www.tallesenrico.com.br
CF_DOMAIN ?= www.tallesenrico.com.br
PROJECT_NAME ?= tallesenrico
BRANCH ?= production
CLOUDFLARE_ACCOUNT_ID ?= cb3810cf7d9581ac25a337475671f71c

export CLOUDFLARE_ACCOUNT_ID

help:
	@echo "Comandos:"
	@echo "  make install   Instala dependências (Bun)"
	@echo "  make dev       Ambiente local (Vite)"
	@echo "  make build     Build estático em ./dist"
	@echo "  make preview   Serve o build localmente"
	@echo "  make deploy    Publica em $(DOMAIN) via Cloudflare Pages"
	@echo "  make domain    Associa o domínio customizado ao projeto Pages"
	@echo "  make clean     Remove artefatos de build"

install:
	bun install

dev:
	bun run dev

build:
	@echo "=== Build estático (Vite) ==="
	bun run build
	@echo "Artefatos em ./dist"

preview: build
	bun run preview -- --host 127.0.0.1 --port 4173

deploy: build
	@echo "=== Deploy Cloudflare Pages → $(DOMAIN) ==="
	@export PATH="$(HOME)/.nvm/versions/node/v22.15.0/bin:$$PATH"; \
	$(HOME)/.bun/bin/bun x wrangler pages deploy dist \
		--project-name=$(PROJECT_NAME) \
		--branch=$(BRANCH) \
		--commit-dirty=true
	@echo ""
	@echo "Deploy concluído."
	@echo "Site: $(DOMAIN)"
	@echo "Preview: https://$(PROJECT_NAME).pages.dev"
	@echo "Se o domínio ainda não estiver ligado, rode: make domain"

domain:
	@echo "Domínios já vinculados ao projeto $(PROJECT_NAME)."
	@echo "No DNS da Cloudflare, crie (proxied):"
	@echo "  CNAME  www  →  $(PROJECT_NAME).pages.dev"
	@echo "  CNAME  @    →  $(PROJECT_NAME).pages.dev"
	@echo "Site esperado: $(DOMAIN)"

clean:
	rm -rf dist .wrangler
