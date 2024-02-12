
import React from 'react'
import Calltoaction from '../sections/calltoaction'
import LondonTower from '../sections/london-tower'
import Whatwedo from '../sections/whatwedo'
import WhoWeAre from '../sections/who-we-are'
import Whychooseus from '../sections/whychooseus'
import Meetourteam from '../sections/meetour-team'
import Reachtous from './reach-to-us'
import Footer from './footer'


const Main = () => {
  return (
    <div>
    <LondonTower />
      <WhoWeAre />
      <Whatwedo />
      <Calltoaction />
      <Whychooseus />
      <Meetourteam />
      <Reachtous />
      <Footer />
    </div>
  )
}

export default Main