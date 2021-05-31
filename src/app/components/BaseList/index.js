import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized'

import { _posts } from 'app/store/selectors/posts'

import * as Styles from './styles'

import BaseItem from '../BaseItem'
/**
 * Generic List for all of similar types list view
 * Renders a list of items
 * This list can be optimized using react virtualized
 */
const BaseList = (props) => {
  const { data } = props
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  )

  return (
    <Styles.Wrapper>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowHeight={cache.current.rowHeight}
            deferredMeasurementCache={cache.current}
            rowCount={data.length}
            rowRenderer={({ key, index, style, parent }) => {
              const item = data[index]
              return (
                <CellMeasurer
                  key={key}
                  cache={cache.current}
                  parent={parent}
                  columnIndex={0}
                  rowIndex={index}
                >
                  {({ registerChild }) => (
                    <BaseItem
                      ref={registerChild}
                      style={style}
                      key={item.id + item.title}
                      item={item}
                    />
                  )}
                </CellMeasurer>
              )
            }}
          />
        )}
      </AutoSizer>
    </Styles.Wrapper>
  )
}

BaseList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default BaseList
