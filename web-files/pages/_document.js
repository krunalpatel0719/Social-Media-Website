import Document, { Html, Head, Main, NextScript } from 'next/document'


// Loads the page where portals are rendered 

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          {/* Here we will mount our modal portal */}
          <div id='registration-portal' className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          
          </div>
          <div id = 'deleteAccount-portal' className = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

          </div>
          <NextScript/>
        </body>
      </Html>
    )
  }
}