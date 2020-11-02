import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import {useWallet} from 'use-wallet'
import Web3 from 'web3'
import chef from '../../assets/img/chef.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import CanvasJSReact from './assets/canvasjs.react';
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'
import TokenFarm from '../../constants/abi/TokenFarm.json'
import StakeXSushi from "../StakeXSushi";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;






const Staking: React.FC = () => {
  const {path} = useRouteMatch()
  const {account} = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal/>)
  const options = {
    theme: "transparent",
    animationEnabled: true,
    exportFileName: "TITY",
    exportEnabled: true,
    title:{
      text: "Token Burn Pie Chart"
    },
    data: [{
      type: "pie",
      startAngle:  90,
      showInLegend: true,
      legendText: "{label}",
      toolTipContent: "{label}: <strong>{y}</strong>",
      indexLabel: "{y}",
      indexLabelPlacement: "inside",
      dataPoints: [
        { y: 2, label: "Amount Staked" },
        { y: 12, label: "In Circulating Supply" },
        { y: 32, label: "Burned" },

      ]
    }]
  }
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={chef} height="120"/>}
                subtitle="Welcome to the Sushi Bar, stake Sushi to earn Sushi."
                title="Irasshaimase!"
              />
            </Route>
            <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
              //  amount = this.input.value.toString()
               // amount = window.web3.utils.toWei(amount, 'Ether')
              //  this.props.stakeTokens(amount)
              }}>
              <div>
                <label className="float-left"><b>Stake TIT Tokens</b></label>
                <span className="float-right text-muted">

                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
             //     ref={(input) => { this.input = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src="./as" height='32' alt=""/>
                    &nbsp;&nbsp;&nbsp; TITS
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE!</button>
            </form>
            <br />
            <button
              type="submit"
              className="btn btn-link btn-block btn-sm"
              onClick={(event) => {
                event.preventDefault()
              //  this.props.unstakeTokens()
              }}>
              UN-STAKE...
              </button>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">


      
                <h1>Amount in Circulation</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}

              </div>
            </main>




          </div>
        </div>

          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )}
      </Page>
    </Switch>
  )
}

export default Staking
