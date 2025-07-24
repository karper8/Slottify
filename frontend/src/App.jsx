// import { useState } from 'react'
import Slide from './components/Slide'
import Button from './components/Button'
import './App.css'


const data = {
  first:{
    info : "Simplify your operations",
    heading : "Scale your business on your terms with Ware2Go’s on‑demand fulfillment and transportation network.",
    para: "Scale your business on your terms with Ware2Go’s on‑demand fulfillment and transportation network.",
    features : ["Flexible","On-Demand","100% Scalable"],
    link : "https://b1883154.smushcdn.com/1883154/wp-content/uploads/2024/03/hero-map.jpeg?lossy=2&strip=1&webp=1"
  },
  second : {
    info: "Flexible operations",
    heading: "Supply Chain Flexibility",
    para: "Launch new sales channels, expand into new markets, or pivot your strategy in response to changing demands. Supply chain flexibility gives you the confidence to test and innovate without sacrificing your bottom line.",
    features : ["Scalable Network","No Capital Investment","Built For You"],
    link : "https://ware2go.co/wp-content/uploads/2021/02/index-operational-flexibility.mp4"
  },
  third : {
    info: "End-to-end connectivity",
    heading: "A fully integrated supply chain",
    para: "Take control over your brand, customer experience, and operating expenses. Manage your entire supply chain, through a single network and platform with Ware2Go's agile technology solution.",
    features: ["Product Flexibility","Flexible Transport","Fast Fulfillment"],
    link: "https://ware2go.co/wp-content/uploads/2022/06/Access-Comprehensive-Logistics-Capabilities-c.mp4"
  },
  fourth: {
    info: "Stord Backed",
    heading: "Create Smarter Operations",
    para: "Access preferred rates and preferred pickups to ensure capacity and predictability when it matters most.",
    features: ["Warehouse Locations","Inventory Management","Transport Intelligence"],
    link: null
  },

}

function App() {
  


  return (
    <>
      <Slide info={data.first.info} heading={data.first.heading} para={data.first.para} features={data.first.features} link={data.first.link} />
      <Button value='TALK TO OUR TEAM' />
      <Slide info={data.second.info} heading={data.second.heading} para={data.second.para} features={data.second.features} link={data.second.link} />
      <Slide info={data.third.info} heading={data.third.heading} para={data.third.para} features={data.third.features} link={data.third.link} />
      <Slide info={data.fourth.info} heading={data.fourth.heading} para={data.fourth.para} features={data.fourth.features} link={data.fourth.link} />
    </>
  )
}

export default App
