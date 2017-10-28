import React from 'react'
import { PropTypes } from 'prop-types'
import HomeCards from './HomeCards'

const propTypes = {
  curriculums: PropTypes.array.isRequired
}

const HomeCollection = props => {
  const { curriculums } = props

  const typeMap = {
    BA: 'Bakalaureuseõpe',
    MA: 'Magistriõpe',
    PHD: 'Doktoriõpe'
  }

  return (
    <div>
      {curriculums.map(single => {
        const { type, collection } = single

        return (
          <div className='home-curriculums' key={type}>
            <h1>
              {typeMap[type]}
            </h1>
            <HomeCards type={type} collection={collection} />
          </div>
        )
      })}
    </div>
  )
}

HomeCollection.propTypes = propTypes

export default HomeCollection
