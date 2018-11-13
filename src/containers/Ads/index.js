import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.css';
import { Card } from '../../components/Card';
import adsActions from '../../store/actions/ads';

class Container extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.get();
  }

  render() {
    const { ads } = this.props;

    const result = ads.slice(0, 3);

    return (
      <div className="ads">
        <h1 className="ads__title">VIP объявления</h1>
        <div className="ads__cards">
          {result.map(item => (
            <Card key={item.ad_id} ad={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ads }) => ({ ads });

const mapDispatchToProps = dispatch => ({
  actions: { ...bindActionCreators({ get: adsActions.request }, dispatch) },
});

export const Ads = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
