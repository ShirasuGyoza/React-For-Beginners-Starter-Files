import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';  // Classじゃないので小文字で始める
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {}, // 空のobjectを用意しておく。ここにfish1, fish2が格納されていく
    order: {}
  };

  // stateを更新するfunction
  addFish = fish => { 
    // 1. take the copy of existing state
    const fishes = {...this.state.fishes};
    // 2. add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish; // ユニークなIDをつけるためにDateを用いる
    // 3. set the new fish object to the state
    this.setState({　fishes }); // = fishes: fishes Appのstateが更新される
  };

  // サンプルFishを追加するfunction
  loadSampleFish = () => {
    this.setState({ fishes: sampleFishes });
  }

  // OrderにFishを渡す処理
  addToOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    // order.fish1 = order.fish1 + 1 || 1; // fish1があれば+1する、なければ1をする　の簡略の書き方！
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order }); // = this.setState({ order: order });
  }

  render() {
    return (
       <div className="catch-of-the-day">
         <div className="menu">
           <Header tagline="Fresh Seafood Market" />
           <ul className="fishes">
             {
              // fisesはArrayではなくObjectなので、mapを使うためにObject.keys()でkeyを取り出した配列にいれている
              // detailsの中で、this.state.fishes[key]でそれぞれのfishの情報を渡す
               Object.keys(this.state.fishes).map(key => 
                <Fish 
                  key={key} 
                  index={key} // keyは子コンポーネントでpropsとして参照できないためindexを渡す
                  details={this.state.fishes[key]} 
                  addToOrder={this.addToOrder} 
                />
              )
             }
           </ul>
         </div>
         <Order />
         <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish} />
       </div>
    )
  }
}

export default App;