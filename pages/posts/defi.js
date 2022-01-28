import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
    <main>
    <h1 className="title">
          Tokenomics Time 
    </h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </main>
    </>
  )

}