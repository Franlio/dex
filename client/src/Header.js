import React from 'react';
import Dropdown from './Dropdown.js';
import Connect from './Connect.js';

function Header({
  user,
  tokens,
  contracts,
  selectToken }) {
  return (
    <header id="header" className="card">
      <div className="row">
        <div className="col-sm-3 flex">
          <Dropdown
            // A list of the tokens 
            items={tokens.map((token) => ({
              label: token.ticker,
              value: token
            }))}
            activeItem={{
              label: user.selectedToken.ticker,
              value: user.selectedToken
            }}
            onSelect={selectToken}
          />
        </div>
        <div className="col-sm-6">
          <h1 className="header-title">
            Dex - <span className="contract-address">Contract address: <span className="address">{contracts.dex.options.address}</span></span>
          </h1>
        </div>
        <div className="col-sm-3 text-right">
          <Connect
          />
        </div>
      </div>
    </header >
  );
}

export default Header;
