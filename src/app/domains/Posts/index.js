import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import BaseInput from 'app/components/BaseInput'
import BaseList from 'app/components/BaseList'
import FieldsContext from 'app/contexts/FieldsContext'
import {
  createPostDispatch,
  fetchPostsDispatch,
} from 'app/store/dispatchers/posts'
import { _posts } from 'app/store/selectors/posts'

import * as Styles from './styles'

const fields = ['userId', 'title', 'body']

const Posts = () => {
  const posts = useSelector(_posts)
  const [structuredData, setStructuredData] = useState([])
  const onCreateFormSubmit = (formData) => {
    createPostDispatch(formData)
  }
  useEffect(() => {
    if (!posts.requestProcessed) {
      fetchPostsDispatch()
    }
  }, [])
  useEffect(() => {
    setStructuredData(
      posts.cachedPosts?.map(({ title, id, ...body }) => ({
        id,
        title,
        body,
      }))
    )
  }, [posts])
  return (
    <FieldsContext.Provider
      value={{
        fields,
        handleSubmit: onCreateFormSubmit,
      }}
    >
      <Styles.Wrapper>
        <BaseInput fields={fields} />
        <BaseList data={structuredData} />
      </Styles.Wrapper>
    </FieldsContext.Provider>
  )
}
Posts.propTypes = {}
Posts.defaultProps = {}
export default Posts
