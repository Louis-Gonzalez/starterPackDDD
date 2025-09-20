.PHONY: test format lint coverage

# Commande par défaut
test: format lint coverage

# Étape 1 : formater le code avec Prettier
format:
	npx prettier --write .

# Étape 2 : corriger les problèmes ESLint
lint:
	npx eslint --fix

# Étape 3 : lancer les tests avec couverture
coverage:
	npx vitest --coverage