import { format } from "date-fns";
import { FaMapMarkerAlt, FaMapMarker } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";

import { FiExternalLink } from "react-icons/fi";

import "./style.css";

export function Card({ cargo }) {
  return (
    <article className="card-container">
      <div className="card-header">
        <FiExternalLink className="card-details" />
        <div className="card-traking">
          <span className="card-traking-label">Tracking ID</span>
          <p className="card-traking-content">{cargo.trackingId}</p>
        </div>
        <span className="card-status">{cargo.status || "On Route"}</span>
      </div>
      <div className="card-body">
        <div className="card-location-container">
          <FaMapMarkerAlt className="card-location-icon" />
          <div className="card-location-content">
            <p className="card-location">Origin: {cargo.source.name}</p>
            <span className="card-location-description">
              {cargo.source._id}
            </span>
          </div>
        </div>
        <RxDotsVertical className="card-location-dots" />
        <div className="card-location-container">
          <FaMapMarker className="card-location-icon" />
          <div className="card-location-content">
            <p className="card-location">
              Destination: {cargo.destination.name}
            </p>
            <span className="card-location-description">
              {cargo.destination._id}
            </span>
          </div>
        </div>
      </div>
      <p className="card-limit">
        {format(new Date(cargo.deadlineAt), "MM/dd/yyyy")}
      </p>
    </article>
  );
}
