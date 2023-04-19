import React from 'react';
import { useRef } from 'react';
import QrScanner from 'react-qr-scanner';


const Home = () => {
    const qrScannerRef = useRef(null);

    const handleScan = data => {
      if (data) {
        // Proses data hasil pemindaian QR code di sini
        console.log(data);
      }
    }
  
    const handleError = err => {
      // Tangani kesalahan pemindai QR code di sini
      console.error(err);
    }
    return (
        <>
        <h1>admin payment pdam</h1>
        <QrScanner
        ref={qrScannerRef}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
        facingMode="environment" 
      />
      </>
    )
}

export default Home;