import React from "react";
import "../../../styles/main.css";
import "../../../styles/header.css";
import "../../../styles/news.css";
import "../../../styles/slider.css";
import "../../../styles/blog.css";
import "../../../styles/footer.css";
import DaLatbanner from "../../../img/DaLatbanner.jpg";
import Dalatimg1 from "../../../img/Dalatimg/dalat1.png"
import Dalatimg2 from "../../../img/Dalatimg/dalat2.jpg";
import Dalatimg3 from "../../../img/Dalatimg/datlat3.jpg";
import Dalatimg4 from "../../../img/Dalatimg/dalat4.jpg";
import Dalatimg6 from "../../../img/Dalatimg/dalat6.jpg";
import Dalatimg7 from "../../../img/Dalatimg/dalat7.jpg";
import Dalatimg8 from "../../../img/Dalatimg/dalat8.jpg";
import Dalatimg9 from "../../../img/Dalatimg/dalat9.jpg";
import Dalatimg10 from "../../../img/Dalatimg/dalat10.jpg";
import Dalatimg11 from "../../../img/Dalatimg/dalat11.jpg";
import Dalatimg12 from "../../../img/Dalatimg/dalat12.jpg";
import Dalatimg13 from "../../../img/Dalatimg/dalat13.jpg";
import Dalatimg14 from "../../../img/Dalatimg/dalat14.jpg";
import Dalatimg15 from "../../../img/Dalatimg/dalat15.jpg";
import Dalatimg16 from "../../../img/Dalatimg/dalat16.jpg";
import Dalatimg17 from "../../../img/Dalatimg/dalat17.jpg";
import Dalatimg18 from "../../../img/Dalatimg/dalat18.jpg";
import Dalatimg20 from "../../../img/Dalatimg/dalat20.jpg";
import Dalatimg21 from "../../../img/Dalatimg/dalat21.jpg";
import Dalatimg22 from "../../../img/Dalatimg/dalat22.jpg";
import Dalatimg23 from "../../../img/Dalatimg/dalat23.jpg";
import Dalatimg24 from "../../../img/Dalatimg/dalat24.jpg";
import Dalatimg25 from "../../../img/Dalatimg/dalat25.jpg";

const Dalat = () => {
  return (
    <div id="main">
      <div id="slider">
        <div className="banner-section">
          <img src={DaLatbanner} alt="DaLatbanner" className="img-slider" />
          <div className="text-slider">
            <h2 className="heading-slider">Đến Đà Lạt săn mây nào!</h2>
            <div className="morebanner-btn">
              <a href="#timhieudalat">Tìm hiểu thêm</a>
            </div>
          </div>
        </div>
      </div>
      <div id="timhieudalat"></div>
      <div id="newscontainer">
        <div className="header">
          <div className="introduct">
            <div className="container">
              <div className="content center">
                <h5 className="t-black">ĐI KHẮP VIỆT NAM</h5>
                <span className="line gold" />
                <h2 className="t-content">
                  XỨ SỞ TÌNH YÊU
                  <span className="t-gold"> ĐÀ LẠT</span>
                </h2>
                <h5 className="t-black bot-content">
                  MUỐN ĐI NHANH HÃY ĐI MỘT MÌNH | MUỐN ĐI XA HÃY ĐI CÙNG
                  GOODTRIP
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="news-col">
          <div className="col8">
            <div className="news-content">
              <p>
                Bạn sẽ phải lòng Đà Lạt ngay từ lần đầu tiên đặt chân tới bởi
                vùng đất ấy bình yên như hơi thở, bởi những cái tên mà vùng đất
                ấy mang trong mình như thành phố ngàn hoa, xứ sở tình yêu, thành
                phố đượm buồn, thành phố mộng mơ… Làm thế nào để đi và trải
                nghiệm được trọn vẹn Đà Lạt, hãy cùng xem cẩm nang du lịch Đà
                Lạt của Vntrip.vn nhé. <br />
                <br />
                Có độ cao 1500m so với mực nước biển nên thời tiết mát mẻ, dễ
                chịu, “thành phố ngàn hoa” chính là điểm nghỉ dưỡng lý tưởng
                nhất cho tất cả đối tượng khách du lịch. Những “ cái không” thú
                vị của thành phố xinh đẹp có thể kể ra như: không hệ thống đèn
                giao thông, không có cảnh sát túc trực tại các nút thắt giao
                thông, không có xe xích lô chở khách du lịch, không điều hòa,
                không thức khuya, không có báo Lâm Đồng tại các sạp báo ở Đà
                Lạt,…
              </p>
              <div className="news-img">
                <img src={Dalatimg1} alt="Dalatimg1" />
                <div className="title-img">
                  Đà Lạt buổi sáng chìm trong làn sương mờ ảo bí ẩn. Ảnh ST
                </div>
              </div>
              <h2 id="gioithieudalat">
                I. Thời điểm nào lý tưởng nhất khi du lịch Đà Lạt?
              </h2>
              <p>
                Không giống như các địa điểm đến khác du lịch chỉ mang tính thời
                vụ, riêng Đà Lạt bạn có thể đến quanh năm bởi mỗi mùa lại có nét
                đẹp riêng của nó. Bạn có thể thoải mái lựa chọn thời điểm phù
                hợp nhất cho chuyến đi Đà Lạt của mình.
              </p>
              <div className="news-img">
                <img src={Dalatimg2} alt="Dalatimg2" />
                <div className="title-img">
                  Mùa xuân Đà Lạt ngọt ngào với sắc hồng của hoa anh đào nở rộ
                  mỗi góc đường. Ảnh: Văn Tuyết Vy
                </div>
              </div>
              <p>
                Nếu bạn muốn ngắm những đóa mai anh đào nở rộ quanh Hồ Xuân
                Hương thì từ tháng 2 đến tháng 4 khi mùa xuân đến chính là thời
                điểm đẹp nhất để chiêm ngưỡng hoa. Các nhành hoa phượng tím trên
                các tuyến phố thời điểm này cũng bắt đầu khoe sắc trổ bông lung
                linh đón nắng gió trong hương xuân nhẹ nhàng.
              </p>
              <div className="news-img">
                <img src={Dalatimg3} alt="Dalatimg3" />
                <div className="title-img">
                  Một góc phượng tím đẹp đến ngẩn ngơ. Ảnh: ST
                </div>
              </div>
              <p>
                Trong cơn mưa ngày nắng hạ bất chợt đến rồi đi rất nhanh chóng,
                cảnh đẹp Đà Lạt khiến du khách phải thốt lên ngỡ ngàng. Dư vị về
                một chuyến đi du lịch Đà Lạt yên bình với thời tiết “lạ lùng”
                ngày hè sẽ càng tăng thêm nỗi nhớ khôn nguôi. Những cơn mưa rả
                rích vào tháng 8 sẽ làm tăng thêm tính hấp dẫn những dòng thác
                nước như được tiếp thêm sức mạnh để ào ào tuôn chảy, bọt tung
                trắng xóa. Thác Pren, thác Pongour, thác Dambri… mạnh mẽ nghe
                như tiếng tự tình suốt đêm ngày.
              </p>
              <div className="news-img">
                <img src={Dalatimg4} alt="Dalatimg4" />
                <div className="title-img">
                  Hoa dã quỳ như một biểu tượng đặc trưng riêng của vùng đất Tây
                  Nguyên. Ảnh ST
                </div>
              </div>
              <p>
                Cuối năm, nếu bạn đi du lịch Đà Lạt tháng 10, 11, 12 phảng phất
                những áng sương mây lơ lửng trên bầu trời mang màu xanh ngắt.
                Tháng 10 đến tháng 12 hoa dã quỳ vươn mình đón nắng đẹp kiêu sa
                lung linh theo gió mới. Còn những bông mimosa mỏng manh e ấp
                trải dọc theo các triển đồi giống như bức tranh vẽ. Và còn rất
                nhiều các loài hoa rực rỡ khác như cánh đồng cải trắng, vườn hoa
                hướng dương, vườn hồng nhung, cánh đồng cỏ lau… Mỗi một mùa là
                Đà Lạt hiện lên với hương sắc riêng luôn cuốn hút du khách.
              </p>
              <h2 id="dendalat">II. Cách di chuyển khi đến Đà Lạt</h2>
              <p>
                Để phục vụ cho chuyến du lịch Đà Lạt của mình, bạn có vài cách
                đến với vùng đất ngàn hoa.
              </p>
              <h2>Máy bay</h2>
              <p>
                Muốn tiết kiệm thời gian, máy bay sẽ là lựa chọn tối ưu. Đà Lạt
                có sân bay Liên Khương cách trung tâm thành phố 30km về phía
                Nam. Bạn có thể đi máy bay của các hãng Vietnam airlines,
                Vietjet Air, Jetstar để đến du lịch nghỉ dưỡng tại thành phố
                mộng mơ. Bạn có thể tìm vé rẻ tại đường dẫn này: Tìm vé máy bay
                giá rẻ
              </p>
              <h2>Xe khách</h2>
              <p>
                Với những bạn muốn tiết kiệm chi phí hoặc ngắm cảnh trên đường
                đến Đà Lạt thì xe khách sẽ là lựa chọn phù hợp. Tuy nhiên bạn sẽ
                mất nhiều thời gian hơn. Bạn có thể đi từ Hà Nội, Đà Nẵng, Nha
                Trang, thành phố Hồ Chí Minh là những điểm xuất phát chủ yếu
                thường được dân du lịch lựa chọn.
              </p>
              <h2>Xe máy</h2>
              <p>
                Xe máy cũng là một lựa chọn không tồi cho các bạn trẻ thích du
                lịch theo kiểu trải nghiệm, phượt bụi và tiết kiệm chi phí. Từ
                Sài Gòn lên tới Đà Lạt chỉ khoảng 300 cây, mất khoảng 7 – 10
                tiếng đồng hồ nếu di chuyển bằng xe máy. Tuy tốn kha khá thời
                gian và sức lực những đây sẽ là những trải nghiệm khá thú vị,
                cũng như giúp bạn khám phá ra nhiều cảnh đẹp trên quãng dường di
                chuyển hơn.
              </p>
              <h2 id="trongdalat">III. Di chuyển ở Đà Lạt như thế nào?</h2>
              <p>
                Lựa chọn phương tiện di chuyển bằng xe máy sẽ giúp bạn chủ động
                trong chuyến hành trình của mình, giá thuê xe là 100k/ngày. Địa
                điểm thuê là ở cổng chợ Đà Lạt đường Nguyễn Thị Minh Khai hoặc
                đường Bùi Thị Xuân. Bởi Đà Lạt có nhiều cung đường đèo, cua gấp
                và khá dốc nên phương tiện xe máy sẽ thích hợp hơn trong quá
                trình di chuyển và khám phá mọi góc cạnh của thành phố.
              </p>
              <div className="news-img">
                <img src={Dalatimg6} alt="Dalatimg6" />
                <div className="title-img">
                  Thuê xe máy đi là phương tiện di chuyển tiện ích và rẻ tiền
                  nhất ( Nguồn sưu tầm)
                </div>
              </div>
              <div className="news-img">
                <img src={Dalatimg7} alt="Dalatimg7" />
                <div className="title-img">
                  Có rất nhiều hãng taxi uy tín tại Đà Lạt để bạn chọn trong quá
                  trình di chuyển (Nguồn sưu tầm)
                </div>
              </div>
              <p>
                Tuy nhiên bạn đi du lịch theo nhóm đông người hoặc du lịch với
                gia đình ở mọi độ tuổi khác nhau thì thuê ô tô sẽ thích hợp và
                tiết kiệm thời gian hơn hoặc thuê taxi bởi người lớn và trẻ em
                sẽ không thích thử cảm giác mạnh bằng phương tiện xe máy.
              </p>
              <h2 id="diemdulichdalat">IV. Các điểm du lịch Đà Lạt nên đến:</h2>
              <h2>Cụm thác nổi tiếng không nên bỏ lỡ:</h2>
              <h4>Thác Pongour:</h4>
              <p>
                Tọa lạc tại huyện Đức Trọng cách Đà Lạt 50km hay còn có tên gọi
                khác là thác Thiên Thai. Pongour là thác nước 7 tầng có độ cao
                gần 40m, trải rộng hơn 100m, xung quanh là thảm thực vật phong
                phú, đa dạng.
              </p>
              <div className="news-img">
                <img src={Dalatimg8} alt="Dalatimg8" />
                <div className="title-img">
                  Vẻ đẹp hùng vĩ mang hơi thở của núi rừng tại Thác Pongour.
                  Ảnh: ST
                </div>
              </div>
              <h4>Thác Prenn</h4>
              <p>
                Vào mùa mưa lượng nước lớn dòng thác tuôn chảy trông giống như
                chiếc cổng chào lớn. Du khách dường như đã bị hớp hồn bởi cảnh
                đẹp thiên nhiên hùng vĩ. Từ thác Prenn bạn có thể ngắm trọn vẹn
                đồi thông rộng lớn.
              </p>
              <h4>Thác Datanla</h4>
              <p>
                Nằm ngay chân đèo Đà Lạt, gồm 7 tầng núi đá, thác nước theo đó
                dội xuống, tạo thành từng tầng lớp bọt tung trắng xóa. Ngoài
                ngắm vẻ đẹp hùng vĩ của dòng thác bạn cũng có cơ hội trải nghiệm
                các trò chơi trèo thác, vượt thác rất thú vị, hấp dẫn.
              </p>
              <div className="news-img">
                <img src={Dalatimg9} alt="Dalatimg9" />
                <div className="title-img">
                  Những trò chơi trải nghiệm thú vị tại thác Datanla. Ảnh ST
                </div>
              </div>
              <h4>Thác Cam Ly:</h4>
              <p>
                chỉ cao khoảng 10m nhưng vẫn mang đậm nét dịu dàng và không kém
                phần mạnh mẽ. Thác đã từng đi vào những áng văn thơ gắn liền với
                hình ảnh Đà Lạt: <br />
                <br />
                “…Đà Lạt ơi, chưa xa đã nhớ <br />
                Cam Ly đau biệt khúc xa người <br />
                Thung Lũng vắng tiếng ve buồn nức nở <br />
                qua một chuyến đò tiếc một dòng trôi…” <br />
                <br />
                -Trích “Đà Lạt chưa xa đã nhớ”, Phan Thanh Minh-
              </p>
              <h4>Thác voi</h4>
              <p>
                hay còn có tên khác là thác Liêng Rơwoa. Thác cách Đà Lạt 25 km
                về phía Tây Nam với chiều cao khoảng 30m, rộng 15m. Phía sau
                dòng thác có hang động bí ẩn như hàng Dơi, hang Gió luôn tạo đểm
                nhấn cho du khách muốn khám phá.
              </p>
              <h2 id="honuocdalat">V. Các hồ nước đẹp ngút mắt</h2>
              <h4>Hò Xuân Hương:</h4>
              <p>
                Một biểu tượng của Đà Lạt nằm tại trung tâm thành phố có hình
                lưỡi liềm. Buổi sáng sớm và tối luôn tấp nập du khách đi dạo
                quanh hồ. Hồ Xuân Hương có nhiều dịch vụ cho thuê xe đạp đôi,
                đạp vịt, thưởng thức cà phê ngay ven hồ.
              </p>
              <div className="news-img">
                <img src={Dalatimg10} alt="Dalatimg10" />
                <div className="title-img">
                  Hồ Xuân Hương rực rỡ trong nắng (Ảnh: sưu tầm)
                </div>
              </div>
              <h4>Hồ Đa Nhim:</h4>
              <p>
                Còn có tên gọi khác là hồ Đơn Dương, nằm tại thị trấn Dran cách
                Đà Lạt 40km. Hồ có khung cảnh thiên nhiên hài hòa giữa non nước
                mây trời xen kẽ là các vườn hoa lá. Từ đây bạn có thể khám phá
                đèo Ngoạn Mục – một trong những đèo lớn nhất Việt Nam.
              </p>
              <h4>Hồ Tuyền Lâm:</h4>
              <p>
                Có rất nhiều các vườn hoa nhỏ đủ màu sắc rực bao quanh. Hồ cách
                trung tâm 7km có cánh rừng nguyên sinh bao bọc, không khí luôn
                trong lành, mát mẻ.
              </p>
              <div className="news-img">
                <img src={Dalatimg11} alt="Dalatimg11" />
                <div className="title-img">
                  Cây cầu tại Hồ Tuyền Lâm. Ảnh: ST
                </div>
              </div>
              <h4>Hồ Đan Kia (Dankia) – hồ Suối Vàng:</h4>
              <p>
                cách trung tâm thành phố 12km, suốt chặng đường đi bạn sẽ bắt
                gặp khung cảnh thơ mộng như lạc vào chốn thần tiên. Khi đến đây
                ngoài ngắm cảnh bạn có thể lựa chọn làm điểm dã ngoại.
              </p>
              <h4>Hồ Than Thở:</h4>
              <p>
                nằm ở phía Bắc của thành phố tọa lạc trên ngọn đồi cao xung
                quanh được bao bọc bởi rừng thông. Để cảm nhận được nét đẹp của
                Hồ Than Thở bạn nên tản bộ trên thảm cỏ xanh rì quanh đó có
                nhiều hoạt động du lịch để bạn tham gia.
              </p>
              <h2 id="canhdepdalat">VI. Cảnh đẹp Đà Lạt nên check in</h2>
              <h4>Ga xe lửa Đà Lạt:</h4>
              <p>
                là điểm tham quan hấp dẫn du khách, chứa đựng nhiều giá trị văn
                hóa của Đà Lạt nói chung và con người nơi đây nói riêng. Ga được
                xây dựng từ năm 1932 và sau 6 năm thì hoàn thành. Đến nay ga đã
                không còn hoạt động mà chỉ phục vụ cho khách du lịch trên tuyến
                đường từ thành phố đến Trại Mát.
              </p>
              <div className="news-img">
                <img src={Dalatimg12} alt="Dalatimg11" />
                <div className="title-img">
                  Những góc check-in cực chất trên đầu tàu hoả tại ga. Ảnh:
                  @pqtkty
                </div>
              </div>
              <h4>Vườn hoa Đà Lạt:</h4>
              <p>
                Đây là xứ sở quy tụ các loài hoa đẹp trên thế giới bởi vậy mà
                những vườn hoa này luôn là những điểm check in lý tưởng nhất khi
                giới thiệu về cảnh đẹp Đà Lạt.
              </p>
              <div className="news-img">
                <img src={Dalatimg13} alt="Dalatimg13" />
                <div className="title-img">
                  Những loại hoa đủ màu sắc cực ấn tượng trong vườn hoa thành
                  phố. Ảnh: ST
                </div>
              </div>
              <h4>Thung lũng tình yêu</h4>
              <p>
                nằm cách trung tâm 5km, có diện tích lên tới 140ha. Đây là một
                trong những khu du lịch thơ mộng lôi cuốn du khách, là địa điểm
                tổ chức các hoạt động dã ngoại, cắm trại. Bên cạnh đó có nhiều
                trò chơi thú vị như cưỡi ngựa, đạp vịt, đi xe jeep, súng sơn…
              </p>
              <h4>Làng Cù Lần:</h4>
              <p>
                Một địa điểm du lịch khá mới mẻ. Đến đây du khách sẽ tìm hiểu
                được nét văn hóa của người dân K’ho thật thà, chất phác. Làng Cù
                Lần tọa lạc tại thôn Suối Cạn, Xã Lát, huyện Lạc Dương. Tuy là
                điểm đến mới nhưng khách du lịch có ấn tượng đẹp và review tốt
                về địa điểm du lịch này.
              </p>
              <h4>Cây thông cô đơn</h4>
              <p>
                Cây thông cô đơn là địa điểm cực nổi tiếng thường được các bạn
                trẻ tìm đến check – in vì sự lãng mạn như vẫn pha chút nét trầm
                mặc, bình yên. Ngay phía trước mặt cây là bờ hồ phẳng lặng lộng
                lớn, phía sau là khu đồi trống tạo nên một không gian đơn côi,
                tĩnh lặng giữa chốn núi rừng. Cảm nhận nguồn không khí trong
                lành của phố núi, lặng mình trước vẻ đẹp bình yên của đất trời
                sẽ đem đến cho bạn nguồn năng lượng mới tươi trẻ hơn. Nơi đây
                cũng rất thích hợp cho các chuyến cắp trại, picnic qua đêm cùng
                bạn bè và gia đình. Một lưu ý nho nhỏ là đường lên cây thông khá
                khó đi, vì vậy bạn nên bạn chế đi cácc lại xe tay ga hay đi giày
                cao gót khi vô đây để thuận tiện di chuyển hơn nhé. . Bạn cũng
                có thể thuê một số người dân, xe ôm quanh khu vực này chở vào
                đây với mức giá hợp lý.
              </p>
              <div className="news-img">
                <img src={Dalatimg14} alt="Dalatimg14" />
                <div className="title-img">
                  Khung cảnh bình yên thơ mộng tại cây thông cô đơn. Ảnh: ST
                </div>
              </div>
              <h4>Núi Langbiang:</h4>
              <p>
                Cách Đà Lạt 12km, thuộc địa phận thị trấn Lạc Dương, huyện Lạc
                Dương, tỉnh Lâm Đồng. Núi có độ cao 2.169m so với mực nước biển.
                Đây là địa điểm thăm quan hấp dẫn bậc nhất mà ai cũng muốn check
                in.
              </p>
              <h4>Đồi Mộng Mơ:</h4>
              <p>
                là một khu du lịch mới kết hợp nét đẹp truyền thống với hiện
                đại. Đồi Mộng Mơ có hồ nước riêng, nhà hàng, quầy bán đồ lưu
                niệm, khu vui chơi giải trí, các chương trình ca múa nhạc đặc
                sắc, ấn tượng…
              </p>
              <h2 id="anuongdalat">
                VII. Các địa chỉ ăn uống ngon nhất Đà Lạt
              </h2>
              <h4>Lẩu Khap Bun Kha</h4>
              <ul>
                <li>
                  <p>Địa chỉ: 26 Nguyễn Văn Cừ, phường 1, thành phố Đà Lạt</p>
                </li>
                <li>
                  <p>Điện thoại: 02633 523 399</p>
                </li>
              </ul>
              <p>
                Khap Bun Kha là cái tên được nhiều người dân Đà Lạt biết đến.
                Khi đến đây bạn sẽ được thưởng thức món lẩu mực khổng lồ với
                hương vị không thể nào quên. Đó chính là dai dai, giòn giòn của
                mực khổng lồ. Cùng với vị tươi ngon của hải sản và rau xanh. Nồi
                nước dùng mới gọi là đặc trưng riêng của quán xứng đáng với món
                lẩu ngon Đà Lạt.
              </p>
              <div className="news-img">
                <img src={Dalatimg15} alt="Dalatimg15" />
                <div className="title-img">
                  Khung cảnh bình yên thơ mộng tại cây thông cô đơn. Ảnh: ST
                </div>
              </div>
              <p>
                Nồi lẩu với hương vị cay cay thơm thơm, cực hợp cho thời tiết se
                lạnh khi về đêm của Đà Lạt. Cùng với vị chua chua đậm đà, hấp
                dẫn. Vị ngọt thanh nhẹ nhàng đọng lại cực kỳ ấn tượng.
              </p>
              <h4>Cơm lam gà đồi nướng Khương Duy Đà Lạt</h4>
              <ul>
                <li>
                  <p>Địa chỉ: Ngã 3 Măng Lin (Ankroet – Cam Ly) ,Tp. Đà Lạt</p>
                </li>
                <li>
                  <p>Số điện thoại: 0868 274 998</p>
                </li>
              </ul>
              <div className="news-img">
                <img src={Dalatimg16} alt="Dalatimg16" />
                <div className="title-img" />
              </div>
              <p>
                Thực khách sẽ cảm nhận được vị tươi, thịt gà dai và ngọt khi ăn
                thử ở Khương Duy quán. Có lẻ điều tạo nên chất lượng cho món gà
                nướng cơm lam ở đây chính là giống gà đồi bản địa được chăn thả
                ngay đồi thông bên cạnh quán.
              </p>
              <h2 id="anuongdalatkhac">
                VIII. Một số địa chỉ ăn uống ngon ở Đà Lạt khác:
              </h2>
              <ul>
                <li>
                  <p>
                    Bánh ướt lòng gà ở đường Trương Công Định mở bán từ 2h chiều
                    đến khoảng 8h tối là hết hàng
                  </p>
                </li>
                <li>
                  <p>
                    Bánh bèo Bà Hường với giá 20k/ 4 cái tại địa chỉ 228 đườn
                    Phan Đình Phùng
                  </p>
                </li>
                <li>
                  <p>Bánh canh Xuân An: 25 – 30k/ tô tại nhà số 15 Nhà Chung</p>
                </li>
                <li>
                  <p>
                    Bánh Tráng nước ngon nhất tại địa chỉ 112 Nguyễn Văn Trỗi
                  </p>
                </li>
                <li>
                  <p>Dâu tây kem 8k/ly số 242D Phan Đình Phùng</p>
                </li>
                <li>
                  <p>
                    Mỳ Quảng: được đánh giá cao cả về chất và lượng nằm tại địa
                    chỉ lô A29, đường Mạc Đĩnh Chi, Đà Lạt
                  </p>
                </li>
                <li>
                  <p>Xắp xắp bên Hồ Xuân Hương</p>
                </li>
                <li>
                  <p>Quán nướng Cu Đức chuyên các món đặc sản Tây Nguyên</p>
                </li>
                <li>
                  <p>Bánh cuốn Thanh Trì đường trần Qúy Cáp với 20k/đĩa</p>
                </li>
                <li>
                  <p>Quán ăn Tài Ký tại 1/A2 Bùi Thị Xuân, Đà Lạt</p>
                </li>
                <li>
                  <p>Chè xé áo ở góc đường Hùng Vương – Trần Qúy Cáp</p>
                </li>
              </ul>
              <h2 id="quatangdalat">IX. Nên mua đặc sản nào về làm quà?</h2>
              <p>
                Kinh nghiệm du lịch Đà Lạt tự túc đó là đi đến đâu thưởng thức
                đặc sản đến đó và sẵn sàng mua quà tặng cho người thân, gia
                đình, bạn bè mà vẫn đáp ứng tiêu chí: chất lượng và hợp túi
                tiền.
              </p>
              <h4>Ghé mua quà tại W’R FARMERS</h4>
              <ul>
                <li>
                  <p>Địa chỉ: 22 Nguyễn Văn Cừ, phường 1, thành phố Đà Lạt</p>
                </li>
                <li>
                  <p>Điện thoại: 0706 844 844</p>
                </li>
              </ul>
              <div className="news-img">
                <img src={Dalatimg17} alt="Dalatimg17" />
                <div className="title-img">
                  W’R FARMERS là chuỗi cửa hàng bán lẻ đặc sản Đà Lạt nhằm mang
                  đến những sản phẩm Đà Lạt ngon, bổ, rẻ và an toàn đến cho
                  khách hàng.
                </div>
              </div>
              <p>
                W’R Farmers mang đến cho khách hàng bao gồm các nhóm sản phẩm:
                nhóm bánh mứt đặc sản, nhóm cà phê, nhóm hạt, nhóm nước cốt,
                nhóm thảo mộc, nhóm thịt khô, nhóm trà pha ấm, nhóm trà túi lọc,
                nhóm trái cây sấy dẻo, nhóm trái cây sấy giòn,…
              </p>
              <div className="news-img">
                <img src={Dalatimg18} alt="Dalatimg18" />
                <div className="title-img">
                  Một số loại sản phẩm ở W’R Farmers được nhiều người yêu thích:
                  hồng Đà Lạt sấy dẻo, mận sấy dẻo, dâu tây Đà Lạt, hồng trà,
                  trà olong, trà xanh…. và nhiều nông sản khách chính gốc Đà
                  Lạt.
                </div>
              </div>
              <h4>Rượu vang Đà Lạt</h4>
              <div className="news-img">
                <img src={Dalatimg20} alt="Dalatimg20" />
                <div className="title-img">
                  Rượu vang Đà Lạt nổi tiếng (Ảnh: sưu tầm)
                </div>
              </div>
              <p>
                Rượu vang Đà Lạt rất nổi tiếng được nhiều người ưa chuộng vì thế
                nên được bày bán tại nhiều tại Đà Lạt. Tuy nhiên để tránh mua
                hàng giả, kém chất lương, hàng nhái thì bạn nên đến nhà máy rượu
                vang Đà Lạt tại số 31 Ngô Văn Sở, Phường 9, Đà Lạt để mua.
              </p>
              <div className="news-img">
                <img src={Dalatimg21} alt="Dalatimg21" />
                <div className="title-img">
                  Nhiều loại mứt Đà Lạt cho bạn thưởng thức và lựa chọn (Ảnh:
                  sưu tầm)
                </div>
              </div>
              <h4>BerryLand – Xưởng mứt trà, đặc sản Đà Lạt</h4>
              <ul>
                <li>
                  <p>Địa chỉ: 58 Lý Nam Đế, Phường 8, Thành phố Đà Lạt</p>
                </li>
                <li>
                  <p>Số điện thoại: 0908500244</p>
                </li>
                <li>
                  <p>Fanpage: https://www.facebook.com/vinaberryland/</p>
                </li>
              </ul>
              <div className="news-img">
                <img src={Dalatimg22} alt="Dalatimg22" />
                <div className="title-img" />
              </div>
              <p>
                Mình thấy sản phẩm ở Berryland Đà dùng rất ít đường, khi ăn cảm
                giác mứt vẫn giữ nguyên hương vị trái cây tươi hơn việc dùng
                đường làm ngọt, phẩm màu làm đẹp mẫu mã. Điều làm mình và nhiều
                du khách ấn tượng ở Berryland là cách làm mứt đi ngược với những
                sản phẩm mứt trà thông thường.
              </p>
              <div className="news-img">
                <img src={Dalatimg23} alt="Dalatimg23" />
                <div className="title-img" />
              </div>
              <p>
                Và để làm được loại mứt như vậy cần dây chuyền hiện đại, đặc
                nguyên liệu phải tươi mới. Khi đến xưởng, mình thấy rõ quy trình
                sản xuất mứt trà của BerryLand và được anh chủ dễ thương mời
                dùng thử mứt trà miễn phí. Như mình có tìm hiểu, Berryland là
                xưởng sản xuất đầu tiên tại Đà Lạt được chứng nhân quy trình sản
                xuất đạt tiêu chuẩn ISO22000.
              </p>
              <div className="news-img">
                <img src={Dalatimg24} alt="Dalatimg24" />
                <div className="title-img" />
              </div>
              <p>
                Ở Berryland có đa dạng các loại mứt khác nhau như dâu tây sấy,
                chuối laba sấy, mứt hoa atiso, các loại trà dâu, mãng cầu, hoa
                hồng… với đủ size to, nhỏ được đóng túi zip tiện lợi, tha hồ cho
                bạn lựa chọn cùng nhiều mức giá ưu đãi 19k, 39k, 42k, 56k,… Hoa
                quả Đà Lạt
              </p>
              <h4>Hoa quả Đà Lạt</h4>
              <p>
                Các loại hoa quả khác: xí muội, kiwi, quất, nhiều loại mứt chính
                là thức quà dễ mua về làm quà nhất. Bạn có thể mua ở chợ Đà Lạt,
                L’angfarm, các của hàng bán đặc sản, chợ âm phủ…
                <br />
                <br />
                Để thưởng thức dâu tây, bạn chỉ mất vài chục nghìn đồng khi mua
                ở chợ và sẽ đắt gấp 2 đến 3 lần nếu bạn mua tại vườn. Tuy nhiên,
                đi cùng với giá thành đó, bạn có thể vừa chụp ảnh vừa tự tay hái
                những trái dâu ngon nhất, to nhất và ưng ý nhất, một trong những
                thứ đáng để “vung tay”, dù bạn đang du lịch Đà Lạt tự túc và
                muốn hướng đến chi tiêu ít nhất có thể.
              </p>
              <div className="news-img">
                <img src={Dalatimg25} alt="Dalatimg25" />
                <div className="title-img">
                  Trà atiso thức quà tặng cho người thân (Ảnh: sưu tầm)
                </div>
              </div>
              <p>
                Trà atiso, trà Ô Long, cà phê đều là những đặc sản được khách du
                lịch yêu thích và lựa chọn về làm quà. Nếu muốn chọn quà lưu
                niệm thì tranh khắc gỗ, tranh bút lửa, tranh thêu đều là lựa
                chọn hoàn hảo dành tặng người thân.
                <br />
                <br />
                Cuốn cẩm nang du lịch Đà Lạt từ A đến Z mà Vntrip.vn cung cấp sẽ
                giống như người bạn đồng hành cùng bạn trên khắp mọi nẻo đường
                chinh phục, khám phá Đà Lạt mộng mơ, một xứ sở của muôn hoa đua
                nở khoe sắc thắm.
              </p>
            </div>
          </div>
          <div className="col4">
            <div className="sidenav">
              <h3 className="header-sidenav">Nội dung chính</h3>
              <ul className="newslist" style={{ listStyleType: "none" }}>
                <li>
                  <a href="#gioithieudalat">
                    I. Thời điểm nào lý tưởng nhất khi du lịch Đà Lạt?
                  </a>
                </li>
                <li>
                  <a href="#dendalat">II. Cách di chuyển khi đến Đà Lạt</a>
                </li>
                <li>
                  <a href="#trongdalat">III. Di chuyển ở Đà Lạt như thế nào?</a>
                </li>
                <li>
                  <a href="#diemdulichdalat">
                    IV. Các điểm du lịch Đà Lạt nên đến:
                  </a>
                </li>
                <li>
                  <a href="#honuocdalat">V. Các hồ nước đẹp ngút mắt</a>
                </li>
                <li>
                  <a href="#canhdepdalat">VI. Cảnh đẹp Đà Lạt nên check in</a>
                </li>
                <li>
                  <a href="#anuongdalat">
                    VII Các địa chỉ ăn uống ngon nhất Đà Lạt
                  </a>
                </li>
                <li>
                  <a href="#anuongdalatkhac">
                    VIII. Một số địa chỉ ăn uống ngon ở Đà Lạt khác:
                  </a>
                </li>
                <li>
                  <a href="#quatangdalat">
                    IX. Nên mua đặc sản nào về làm quà?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dalat;
