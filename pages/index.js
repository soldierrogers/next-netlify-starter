import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Wonders" />
        <p className="description">
          ‘Do you believe in Wonders?’, as I heard her speak, I felt coldness running through my whole body. The voice came out in a whisper, but it still echoed loud in my head. After what felt like an eternity, the Darkness spoke again.

‘No?’ the silent voice continued. It almost sounded playful. ‘You will see them with your own eyes, Henry’ the voice suddenly turned even more sinister - ‘Just as Zachary did in the end’.

Read Wonders: [HERE](https://drive.google.com/drive/u/1/folders/1dNK09Q2DzceXpsrr1putItvw9PgEhiT4)

 <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
