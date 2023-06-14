import React from 'react'
import { GeoResponse } from '@/interfaces/GeoResponse';

interface ModalProps {
  item: GeoResponse | null;
}

const Modal = ({ item }: ModalProps): JSX.Element => {
  return (
    <div className="modal">
      <div className="modal-item">
        <p className="modal-label">IP address</p>
        <p className="modal-value">{item?.ip || 'No available'}</p>
      </div>
      <div className="modal-item">
        <p className="modal-label">Location</p>
        <p className="modal-value">
          {item?.location.city || 'No available'}, {item?.location.country || 'No available'}
        </p>
      </div>
      <div className="modal-item">
        <p className="modal-label">Timezone</p>
        <p className="modal-value">UTC {item?.location.timezone || 'No available'}</p>
      </div>
      <div className="modal-item">
        <p className="modal-label">{item?.location.isp ? 'ISP' : 'Region'}</p>
        <p className="modal-value">
          {item?.location.isp || item?.location.region || 'No available'}
        </p>
      </div>
    </div>
  )
}

export default Modal