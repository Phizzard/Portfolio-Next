import Head from 'next/head';
import { Container } from 'reactstrap';
import Header from './Header.js';
import Footer from './Footer.js';

export default (props) =>(
    <div>
        <Head>
            <title>Philip Tietjen</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?family=Exo+2" rel="stylesheet" />
        </Head>
        <Container fluid>
            <Header />
            {props.children}
            <Footer />
        </Container>
        <style global jsx>{`
            body {
                font-family: "Open-Sans", sans-serif;
                color: #3f3f3f;
            }
            .container-fluid{
                padding: 0
            }
          .row {
            padding: 0!important;
            margin: 0!important;
          }
          .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
              margin: 0!important;
              padding: 0!important;
          }
          h1, h2, h3, h4 {
              font-family: "exo 2", sans-serif;
              text-transform: uppercase;
          }
          .page-block {
              padding: 50px;
          }
        `}</style>
    </div>
)
