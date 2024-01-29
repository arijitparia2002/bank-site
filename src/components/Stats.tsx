import React from 'react'
import styles from '../style'
import {stats} from '../constants'

const Stats = () => 
  (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {
        stats.map((stat)=>(
          <div id={stat.id} className={`flex-1 flex flex-row justify-start items-center m-3`}>
            <h4 className='font-popins xs:text-[40px] xs:leading-[53px] leading-[43px] font-semibold text-white'>{stat.value}</h4>
            <p className='font-popins xs:text-[15px] xs:leading-[26px] leading-[21px] text-gradient ml-3 uppercase'>{stat.title}</p>
          </div>
        ))
      }
      
      </section>
  )


export default Stats