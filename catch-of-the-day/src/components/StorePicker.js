import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  // thisのバインドの仕方の一つだが、functionが増える度にthisをバインドしなくてはいけないため、この方法よりも、arrow functionを使う
  // constructor() {
  //   super(); // suoerは、React.componetを最初に呼ぶために必要。これがないと下の処理は行われない。
  //   this.goToStore = this.goToStore.bind(this); // thisをgoToStoreにバインド
  // }

  myInput = React.createRef();
  goToStore = event => { // goToStoreをarrow functionにすることでthisがバインドされる
    // submitイベントでリロードされるのを切る
    event.preventDefault(); 
    // get the text from input
    const storeName = this.myInput.current.value;
    // change the page to /store/whatever-they-enterd
    this.props.history.push(`/store/${storeName}/`);
  }
  render() {
    return (
      <> {/* 複数の兄弟要素を使いたい場合は、空タグを使うか、React.Fragmentを使う */}
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input 
            type="text" 
            ref={this.myInput}
            required 
            placeholder="Store Name" 
            defaultValue={getFunName()} 
          />
          <button type="submit">Visit Store →</button>
        </form>
      </>
    )
  }
}

export default StorePicker;