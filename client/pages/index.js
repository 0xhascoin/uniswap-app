import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header';
import Main from '../components/main';
const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#00111c] text-white select-none flex flex-col justify-between`,

}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <h2>Transaction History</h2>
    </div>
  )
}

export default Home;
