# how it works

1. use `examples/suger.ymal` as document data source.
2. transfer doc files by `yarn docusaurus gen-api-docs <id>`
3. Generated API page is [http://localhost:3000/docs/category/suger-api](http://localhost:3000/docs/category/suger-api)

# TODO list
* not all yaml file contant is shown, need to investigate
* not possable to publish with a host name because Github Pages need some steps ([guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site))

# how to build

1. install node version 18, yarn
2. `yarn start`
