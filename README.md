# covid19-vaccination-graphql

A lean GraphQL API to get vaccination data. The data is based on the CSV data gotten from [Our World In Data](https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/vaccinations.csv).

### Live URL

You can access the GraphQL API at [covid-api.default.knative.graphqldotnetconsulting.com](http://covid-api.default.knative.graphqldotnetconsulting.com/).

You can also deploy the API to any server by building a container image. See the deployment instruction for more details.

## Requirement

1. Node version 15 or higher. This is because I'm using the new "stream/promises" module available in version 15.
2. Set `NEW_RELIC_LICENSE_KEY` and `NEW_RELIC_APP_NAME` environment variables before running the app.

## Deploy

You can build and run the container on any supported PaaS. When you do, it's important to route traffic to port 4000 which the app runs on and set the following environment variable:

- `NEW_RELIC_LICENSE_KEY`: Your New Relic account license key.
- `NEW_RELIC_APP_NAME`: The name for the app which will be displayed on the New Relic dashboard.

You can use the following command to run the app using docker. You should replace the environment variables.

```bash
docker build --tag covid-vaccine-api .
```

```bash
docker run -p 4010:4000 -e NEW_RELIC_LICENSE_KEY=LICENE_KEY \
      -e NEW_RELIC_APP_NAME="APP_NAME" \
      covid-vaccine-api:latest
```
