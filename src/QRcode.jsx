import { useState } from "react";

export const QRcode = () => {
  const [img,setImg]=useState("");
  const [loading,setLoading]=useState(false);
  const [QRdata, setQRdata]=useState("");
  const [QrSize, setQRsize]=useState("");

  async function generateQR(){
    setLoading(true);
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${QrSize}x${QrSize}&data=${encodeURIComponent(QRdata)}`
      setImg(url);
    }catch(error){
      console.error("Error while creating Qr code ", error);
    }finally{
      setLoading(false);
    }
  }

  function QRdownload(){
    fetch(img).then((response)=>response.blob()).then((blob)=>{
      const link=document.createElement("a");
      link.href=URL.createObjectURL(blob)
      link.download="qrCode.png"
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error)=>{
      console.error("Error in downloading QR code")
    })
  }

  return (<div className="app-container">
    <h1>QR CODE GENERATOR</h1>
    {img && <img src={img} className="QR-code-image"/>}
    {loading && <p>Please wait.....</p>}
    <div>
      <label htmlFor="inputdata" className="inputlabel">Data for convert QRcode</label>
      <input type="text" id="inputdata" value={QRdata} placeholder="enter data " onChange={(e)=>setQRdata(e.target.value)}/>
      <label htmlFor="sizeinput" className="inputlabel">Image size of QRcode</label>
      <input type="text" value={QrSize} id="sizeinput" placeholder="eg. 150" onChange={(e)=>setQRsize(e.target.value)}/>
      <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
      <button className="download-button" onClick={QRdownload}>Download QR Code</button>
    </div>
    <p className="footer">Designed by <a href="https://leetcode.com/u/mrkaran/">Karenthiran</a></p>
  </div>
  )
}
