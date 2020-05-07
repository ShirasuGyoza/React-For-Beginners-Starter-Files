import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <> {/* 複数の兄弟要素を使いたい場合は、空タグを使うか、React.Fragmentを使う */}
        <form className="store-selector">
          <h2>Please Enter a Store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store →</button>
        </form>
      </>
    )
  }
}

export default StorePicker;