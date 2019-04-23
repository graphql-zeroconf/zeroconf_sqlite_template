# Get Started

### Clone the repository
```
git clone https://github.com/graphql-zeroconf/zeroconf_sqlite_template.git
```

### Install the packages

```
cd zeroconf_sqlite_template
npm install
```

### Create your .env file on your project root

```
cat <<EOF >.env
SQLITE_HOST=localhost
SQLITE_DATABASE=main
SQLITE_USER=
SQLITE_PASSWORD=
SQLITE_STORAGE=./sqlite/chinook.db
GRAPHQL_HOST=localhost
GRAPHQL_PORT=4000
EOF
```

### Start with graphql

```
$ npm start
```

or

```
$ npm start graphql
```

### Start with apollo

```
$ npm run apollo
```