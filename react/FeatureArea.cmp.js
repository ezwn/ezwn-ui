import React from "react";

import "./FeatureArea.cmp.css";

export class FeatureAreaTitle extends React.Component {

  render() {
    const { onClick, title, opened } = this.props;
    return (
      <h2 onClick={onClick}>
        {opened ? <span> - </span> : <span> + </span>} {title}
      </h2>
    );
  }
}

class FeatureAreaCmp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: props.opened
    };
  }

  static defaultProps = {
    opened: false
  }

  render() {
    const { props, state } = this;
    const { children, title, className } = props;
    const { opened } = state;

    return (
      <div
        className={`feature-area ${className} ${
          opened ? "prim-vr prim-slice-1" : ""
        }`}
      >
        <FeatureAreaTitle onClick={this.switch} title={title} opened={opened} />
        {opened && (
          <div className="feature-area-content prim-slice-1 panel">
            {children}
          </div>
        )}
      </div>
    );
  }

  switch = () => {
    this.setState(state => ({
      opened: !state.opened
    }));
  };
}

export default FeatureAreaCmp;
