import React from 'react';

export const DisplayFormikState = (props) => (
  <div style={{ margin: '1rem 0', fontFamily: 'monospace' }}>
    <pre
      style={{
        background: '#f6f8fa',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);
