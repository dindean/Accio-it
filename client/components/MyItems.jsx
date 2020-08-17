import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemInfo from './ItemInfo';

class MyItems extends Component {
  constructor(props) {
    super(props);
    this.items = [];
  }

  componentDidMount() {
    (async () => {
      await this.props.dbLookup('allitems');
      this.items = await this.props.items.map((item, i) => <ItemInfo key={`item${i}`} item={item.item_name} />);
      this.forceUpdate();
    })();
  }

  render() {
    return (
      <div>
        <Link to="/welcome">
          <button className="home" type="button">
            Accio Home!
          </button>
        </Link>
        <div className="title">My Items</div>
        <button type="button">add item ++</button>
        {(this.items.length && this.items) || `Please add some items, ${this.props.name}!`}
      </div>
    );
  }
}

export default MyItems;
