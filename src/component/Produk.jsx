import { useState } from 'react';
import './css/produk.css';

export default function Produk() {
  const [product, setProduct] = useState([]);
  fetch('http://localhost:3004/products')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.name);
    });

  return (
    <div className="container-product">
      <div className="box-product">
        <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
        <h4>Judul Baju</h4>
        <p>Stok</p>
        <div className="price-btn">
          <h4>Harga</h4>
          <button>Cart</button>
        </div>
      </div>
      <div className="box-product">
        <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
        <h4>Judul Baju</h4>
        <p>Stok</p>
        <div className="price-btn">
          <h4>Harga</h4>
          <button>Cart</button>
        </div>
      </div>
      <div className="box-product">
        <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
        <h4>Judul Baju</h4>
        <p>Stok</p>
        <div className="price-btn">
          <h4>Harga</h4>
          <button>Cart</button>
        </div>
      </div>
      <div className="box-product">
        <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
        <h4>Judul Baju</h4>
        <p>Stok</p>
        <div className="price-btn">
          <h4>Harga</h4>
          <button>Cart</button>
        </div>
      </div>
      <div className="box-product">
        <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
        <h4>Judul Baju</h4>
        <p>Stok</p>
        <div className="price-btn">
          <h4>Harga</h4>
          <button>add Cart</button>
        </div>
      </div>
      <div className="box-product">
        <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
        <h4>Judul Baju</h4>
        <p>Stok</p>
        <div className="price-btn">
          <h4>Harga</h4>
          <button>Cart</button>
        </div>
      </div>
      <div className="box-product">
        <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
        <h4>Judul Baju</h4>
        <p>Stok</p>
        <div className="price-btn">
          <h4>Harga</h4>
          <button>Cart</button>
        </div>
      </div>
      <div className="box-product">
        <img src="https://static.republika.co.id/uploads/images/inpicture_slide/arema-fc-meluncurkan-logo-dan-slogan-baru-jiwa-jawara_220721090619-387.jpg" alt="Produk" />
        <h4>Judul Baju</h4>
        <p>Stok</p>
        <div className="price-btn">
          <h4>Harga</h4>
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
}
