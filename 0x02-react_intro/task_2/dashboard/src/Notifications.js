import React from "react";
import './Notifications.css';
import x from './close-icon.png';
import getLatestNotification from './utils.js'
export function Notifications () {
    return (
        <div className="Notifications">
            <strong><h2>Here is the list of notifications</h2>
            <ul>
            <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          data-priority='urgent'
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
            </ul>
            </strong>
            <button
        aria-label='Close'
        type='button'
        onClick={() => console.log('Close button has been clicked')}
        style={{
          position: 'absolute',
          right: '1.5%',
          top: '2%',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none'
        }}
      >
        <img src={x}
        alt ="close"
        style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
maxWidht : '12px',
maxHeight: '12px'
        }

        }
        ></img>
      </button>
    </div>

    )
}
export default Notifications;
