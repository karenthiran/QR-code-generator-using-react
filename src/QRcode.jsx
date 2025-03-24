
export const QRcode = () => {
  return (<div className="app-container">
    <h1>QR CODE GENERATOR</h1>
    <img src="src\assets\image.jpg" className="QR-code-image"/>
    <div>
      <label htmlFor="inputdata" className="inputlabel">Data for convert QRcode</label>
      <input type="text" id="inputdata" placeholder="enter data"/>
      <label htmlFor="sizeinput" className="inputlabel">Image size of QRcode</label>
      <input type="text" id="sizeinput" placeholder="eg. 150"/>
      <button type="submit" className="generate-button">Generate QR Code</button>
      <button type="submit" className="download-button">Download QR Code</button>
    </div>
    <p className="footer">Designed by <a href="https://leetcode.com/u/mrkaran/">Karenthiran</a></p>
  </div>
  )
}
