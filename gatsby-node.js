const createPosts = require(`./gatsby/createPosts.js`)
const createPages = require(`./gatsby/createPages`)

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql })
  await createPosts({ actions, graphql })
}
