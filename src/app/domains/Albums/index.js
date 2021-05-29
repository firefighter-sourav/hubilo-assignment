import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BaseInput from 'app/components/BaseInput'
import BaseList from 'app/components/BaseList'
import FieldsContext from 'app/contexts/FieldsContext'
import { fetchAlbumsDispatch } from 'app/store/dispatchers/albums'
import { _albums } from 'app/store/selectors/albums'
import { createAlbumsHandler } from 'app/store/thunks/albums'

import * as Styles from './styles'

const fields = ['userId', 'title']

const Albums = () => {
  const albums = useSelector(_albums)
  const [structuredData, setStructuredData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    if (!albums.requestProcessed) {
      fetchAlbumsDispatch()
    }
  }, [])
  useEffect(() => {
    setStructuredData(
      albums.cachedAlbums?.map(({ title, id, ...body }) => ({
        id,
        title,
        body,
      }))
    )
  }, [albums])
  const handleCreateFormSubmit = (formData) => {
    dispatch(createAlbumsHandler(formData))
  }
  return (
    <FieldsContext.Provider
      value={{
        fields,
        handleSubmit: handleCreateFormSubmit,
      }}
    >
      <Styles.Wrapper>
        <BaseInput />
        <BaseList data={structuredData} />
      </Styles.Wrapper>
    </FieldsContext.Provider>
  )
}
Albums.propTypes = {}
Albums.defaultProps = {}
export default Albums
