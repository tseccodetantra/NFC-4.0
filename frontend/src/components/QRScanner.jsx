import { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import codetantraLogo from "../assets/codetantra_logo.png";

const QRScanner = ({ onClose, onSubmit }) => {
  const [manualId, setManualId] = useState("");
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef(null);

  useEffect(() => {
    startScanner();
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, []);

  const startScanner = () => {
    setScanning(true);

    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0,
      },
      false
    );

    scanner.render(
      (decodedText, decodedResult) => {
        console.log("QR Code detected:", decodedText);
        setScanning(false);
        scanner.clear();
        onSubmit(decodedText);
      },
      (error) => {
        // Handle scan error, continue scanning
        console.log("Scanning...");
      }
    );

    scannerRef.current = scanner;
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (manualId.trim() === "") {
      alert("Please enter an ID");
      return;
    }
    onSubmit(manualId);
  };

  const handleClose = () => {
    if (scannerRef.current) {
      scannerRef.current.clear();
    }
    onClose();
  };

  return (
    <div className="scanner-container active">
      <button className="close-btn" onClick={handleClose}>
        ×
      </button>
      <div className="scanner-content">
        <div className="logo">
          <img src={codetantraLogo} alt="CodeTantra Logo" />
          QR Code Scanner
        </div>

        <div className="scanner-wrapper">
          <div id="qr-reader"></div>
          {scanning && (
            <div className="scanning-indicator">
              <div className="loading-spinner"></div>
              Scanning...
            </div>
          )}
        </div>

        <div className="manual-input">
          <label htmlFor="manualId">Or enter ID manually:</label>
          <form onSubmit={handleManualSubmit}>
            <input
              type="text"
              id="manualId"
              value={manualId}
              onChange={(e) => setManualId(e.target.value)}
              placeholder="Enter ID"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
