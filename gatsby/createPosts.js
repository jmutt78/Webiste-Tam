const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
query GET_POSTS($first: Int $after: String){
wpgraphql {
posts(
first: $first
after: $after
where: {
  categoryName: "Blog"
}
) {
  pageInfo {
    endCursor
    hasNextPage
  }
  nodes {
    id
    uri
    postId
    title
    author {
     name
   }
    featuredImage {
      altText
      sourceUrl
    }
  }
}
}
}
`

  const { createPage } = actions
  const allPosts = []
  const blogPages = []
  let pageNumber = 0

  const fetchPages = async varables =>
    await graphql(GET_POSTS, varables).then(({ data }) => {
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const nodeIds = nodes.map(node => node.postId)
      const postsTemplate = path.resolve(`./src/templates/posts.js`)
      const postsPath = !varables.after ? `/blog/` : `/blog/page/${pageNumber}`

      blogPages[pageNumber] = {
        path: postsPath,
        component: postsTemplate,
        context: {
          ids: nodeIds,
          pageNumber,
          hasNextPage,
        },
        ids: nodeIds,
      }

      nodes.map(post => {
        allPosts.push(post)
      })
      if (hasNextPage) {
        pageNumber++
        return fetchPages({ first: 12, after: endCursor })
      }
      return allPosts
    })

  await fetchPages({ first: 12, after: null }).then(allPosts => {
    const postTemplate = path.resolve(`./src/templates/post.js`)

    blogPages.map(page => {
      console.log(`create post list: ${page.path}`)
      createPage(page)
    })

    allPosts.map(post => {
      console.log(`create page: ${post.uri}`)
      createPage({
        path: `${post.uri}`,
        component: postTemplate,
        context: post,
      })
    })
  })
}

//for blog - change catagory name and change url
