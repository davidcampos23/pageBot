import { useState } from 'react'
import Aharadak from './assets/Aharadak.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='bot w-1/2 mx-auto mt-12 rounded-md'>
        <img width={170} height={170} src={Aharadak} className='mx-auto pt-12 mb-6'/>
        <div className='text-center'>
          <strong className='title text-4xl mb-6'>TRPG Bot</strong>
        </div>
        <div className='text-center text-white text-xl mt-14'>
          <p className='mb-8'>Todas as Magias Listadas</p>
          <p className='mb-8'>Todos as Talentos Listados</p>
          <p className='mb-8'>Todas as Consdições Listadas</p>
        </div>
        <div className='flex justify-center text-white text-2xl text-center gap-6 mt-20'>
          <a href="https://github.com/davidcampos23/BotTormenta" target='_blank' className='button'><h2>Open Code</h2></a>
          <a href="https://discord.com/api/oauth2/authorize?client_id=1128047416252313683&permissions=8&scope=applications.commands%20bot" target='_blank' className='button1'><h2>Adicionar</h2></a>
        </div>
        <p className='text-center text-white text-sm mt-14'>Obs: o bot pode não estar online, por motivos de hospedagem</p>
      </section>
    </>
  )
}

export default App
