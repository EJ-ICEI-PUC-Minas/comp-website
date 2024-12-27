import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import useParticlesOptions from '../hooks/useParticlesOptions'

const ParticlesBackground = (props) => {
  const [init, setInit] = useState(false)
  const options = useParticlesOptions()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {
    console.log(container)
  }

  return <Particles id={props.id} init={particlesLoaded} options={options} />
}

export default ParticlesBackground
