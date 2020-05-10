import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  goToStore(e) {
    e.preventDefault();
    console.log('going');
  }
  render() {
    return (
      <> {/* 複数の兄弟要素を使いたい場合は、空タグを使うか、React.Fragmentを使う */}
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
          <button type="submit">Visit Store →</button>
        </form>
      </>
    )
  }
}

export default StorePicker;