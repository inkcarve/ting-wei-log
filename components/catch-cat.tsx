import * as React from 'react';
import { connect } from 'react-redux';
import { initStore } from '../redux/redux-store';


// import Head from '../components/Head';
// import Nav from '../components/Nav';
// import Page from '../components/Page'
// console.log(initStore())

class CatchCat extends React.Component<any, any> {
  private store:any;
  static getInitialProps ({ req }) {
    const isServer = !!req
    // const store = initStore(isServer)
    return { isServer }
  }

  constructor (props:any) {
    super(props)
    this.state = this.props;
    // this.store = this.props.store;
  }

  render () {
      console.log('catch-cat')
      console.log(this);
    const { state } = this.props
    return (
      <div>
{/*      <Head></Head>
      <Nav></Nav>*/}
      <div className="container-fluid pt-4">
        {/*<Page title='' linkTo='/other' />*/}
        <h1>{state}</h1>
      </div>
      </div>
    )
  }

}

const mapStateToProps = (state:any) => {
    // const  = state
    return { state }
  };

export default connect((state)=>state)(CatchCat)


