# covid19-vaccination-graphql

A lean GraphQL API to get vaccination data. The data is based on the CSV data gotten from [Our World In Data](https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/vaccinations.csv).

### Live URL

You can access the GraphQL API at [covid-api.default.knative.graphqldotnetconsulting.com](http://covid-api.default.knative.graphqldotnetconsulting.com/).

You can also deploy the API to any server by building a container image. See the deployment instruction for more details.

## Requirement

1. Node version 15 or higher. This is because I'm using the new "stream/promises" module available in version 15.
