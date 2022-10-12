import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Homeworks/Section01/Basic-images/xang-dau.jpg";

function App() {
  return (
    <>
      <header>
        <div className="header">
          <h1>HEA</h1>
        </div>
      </header>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <p>The Drive</p> <br />
            <p>The Walk</p> <br />
            <p>The Return</p> <br />
            <p>The End</p> <br />
          </div>
          <div className="col">
            <h2>Điều gì đang xảy ra với thị trường xăng dầu?</h2>
            <p>
              Việt Nam tự chủ được 70% nguồn cung, có 36 doanh nghiệp đầu mối lo
              nhập hàng, 17.000 cửa hàng bán lẻ nhưng người dân vẫn không mua
              được xăng dầu. Ở TP HCM có 550 cửa hàng bán lẻ nhưng theo thống kê
              của quản lý thị trường, đến chiều qua, 137 cây xăng (chiếm 20% hệ
              thống) tại 19 quận, huyện thiếu hàng, đóng cửa. Nhiều người dân
              thậm chí phải dắt bộ xe máy nhiều cây số để tìm nơi đổ xăng.
            </p>
            <img className="col2" src={logo} alt="" />
          </div>
          <div className="col3">
            <h1>What?</h1>
            <p>
              Không chỉ TP HCM, tình trạng này lan ra một số tỉnh, thành khác
              phía Nam như Bình Dương
            </p>
            <h1>Where</h1>
            <p>Không chỉ TP HCM, tình trạng này</p>
            <h1>Price?</h1>
            <p>Không chỉ TP HCM, tình trạng này</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
