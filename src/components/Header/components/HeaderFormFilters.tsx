import React from 'react'
import SelectorGroup from '../../Selector/SelectorGroup'
import { FaLocationDot } from 'react-icons/fa6'
import SelectorOption from '../../Selector/SelectorOption'

const cities = [
  { id: '1', name: 'São Paulo' },
  { id: '2', name: 'Rio de Janeiro' },
  { id: '3', name: 'Porto Alegre' },
  { id: '4', name: 'Curitiba' },
  { id: '5', name: 'Belo Horizonte' },
]

const HeaderFormFilters = () => {
  return (
    <form>
        <SelectorGroup id='city' icon={<FaLocationDot/>}>
            <SelectorOption value='' label='Choose your city...'/>
            {cities.map((city) => {
              return (
                <SelectorOption
                  key={city.id} 
                  value={city.name} 
                  label={city.name}
                />
              )
            })}
        </SelectorGroup>
    </form>
  )
}

export default HeaderFormFilters
