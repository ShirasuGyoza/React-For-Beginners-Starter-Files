import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {/* app.jsからpropsを受け取る */}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFish}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
