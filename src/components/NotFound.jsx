import React from "react";
import { Link } from "react-router-dom";
import "../CSS files/Notfound.css";

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1 className="notfound-code">404</h1>
                <h2 className="notfound-title">Oops! Page Not Found</h2>
                <p className="notfound-text">
                    The product or page you’re looking for doesn’t exist or has been moved.
                </p>

                <div className="notfound-actions">
                    <Link to="/" className="btn-primary">
                        🏠 Go to Home
                    </Link>
                    <Link to="/shop" className="btn-secondary">
                        🛍 Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
