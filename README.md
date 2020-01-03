![Website](https://img.shields.io/website?url=https%3A%2F%2Flinks.orlow.me)
![GitHub](https://img.shields.io/github/license/AdrianOrlow/links)
![David](https://img.shields.io/david/AdrianOrlow/files)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![CodeFactor](https://www.codefactor.io/repository/github/adrianorlow/links/badge)](https://www.codefactor.io/repository/github/adrianorlow/links)

# Links

My personal simple links shortener. Made with React, Styled Components, Formik and a little bit of Ramda.

[Links API](https://github.com/AdrianOrlow/links-api)

![thumbnail](https://user-images.githubusercontent.com/10941338/71741122-5076fc00-2e5e-11ea-9ee4-253e3ae56654.png)

## Getting started

Get all the dependencies loaded via

```
yarn install
```

And run the server with

```
yarn start
```

## Deployment (Dokku)

Create app container

```
dokku apps:create app_name
```

Create app container

```
dokku apps:create app_name
```

set CRA buildpack for your app container

```
dokku buildpacks:set app_name https://github.com/mars/create-react-app
```


add Dokku remote repository

```
git remote add dokku dokku@server_ip:app_name
```

and finally push code to the repo

```
git push dokku master
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
