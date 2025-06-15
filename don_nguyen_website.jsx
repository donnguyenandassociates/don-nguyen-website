import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

export default function DonNguyenAssociates() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      {/* Homepage Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Don Nguyen & Associates</h1>
        <p className="text-lg text-gray-600">
          Tax & Immigration Services You Can Trust<br />
          Dịch vụ Thuế và Di trú đáng tin cậy
        </p>
        <p className="text-sm text-gray-500">
          4820 N 35th Ave, Phoenix, AZ 85017 • (602) 246-9595 • Fax: (602) 589-6198
        </p>
        <p className="text-sm text-blue-600">
          <a href="mailto:dontaxservices@yahoo.com">dontaxservices@yahoo.com</a> | <a href="mailto:dontaxservices@gmail.com">dontaxservices@gmail.com</a>
        </p>
        <a href="https://facebook.com" target="_blank" className="inline-flex items-center text-blue-700 hover:underline">
          <Facebook className="w-4 h-4 mr-1" /> Facebook
        </a>
      </header>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow text-center space-y-2">
        <h2 className="text-2xl font-bold">👨‍💼 Why Choose Don Nguyen & Associates?</h2>
        <p className="text-lg">Trusted in the Phoenix community for over 30 years<br />
        Được cộng đồng Phoenix tin tưởng hơn 30 năm</p>
        <p className="text-lg">Bilingual staff: English & Vietnamese<br />
        Nhân viên song ngữ: Tiếng Anh & Tiếng Việt</p>
        <p className="text-lg">Personalized, confidential service<br />
        Dịch vụ cá nhân hoá, bảo mật</p>
        <p className="text-lg">Fast, accurate filings at competitive rates<br />
        Khai báo nhanh chóng, chính xác với mức giá cạnh tranh</p>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">📄 Tax Services / Dịch vụ Thuế</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Personal Income Tax Preparation / Khai thuế cá nhân</li>
              <li>Business Tax Filing / Khai thuế doanh nghiệp</li>
              <li>Bookkeeping & Payroll / Ghi sổ kế toán & Trả lương</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🌎 Immigration Services / Dịch vụ Di trú</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Green Card Applications / Hồ sơ thẻ xanh</li>
              <li>Family-Based Petitions / Bảo lãnh gia đình</li>
              <li>Citizenship & Naturalization / Nhập tịch & Thi quốc tịch</li>
              <li>Immigration Form Filing / Điền đơn di trú</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Hours Section */}
      <section className="text-center">
        <h3 className="text-lg font-medium">🕒 Hours of Operation / Giờ làm việc</h3>
        <p>Mon – Fri: 9:00 AM – 6:00 PM | Sat: 10:00 AM – 4:00 PM | Sun: Closed</p>
        <p>Thứ 2 – Thứ 6: 9:00 sáng – 6:00 chiều | Thứ 7: 10:00 sáng – 4:00 chiều | Chủ Nhật: Nghỉ</p>
      </section>

      {/* Contact Form with Formspree */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-center">📬 Contact Us / Liên hệ</h3>
        <form
          action="https://formspree.io/f/mnqedqkn" 
          method="POST" 
          className="space-y-4 max-w-xl mx-auto"
        >
          <input type="text" name="name" placeholder="Full Name / Họ tên" className="w-full border rounded p-2" required />
          <input type="email" name="email" placeholder="Email Address / Địa chỉ Email" className="w-full border rounded p-2" required />
          <input type="tel" name="phone" placeholder="Phone Number / Số điện thoại" className="w-full border rounded p-2" />
          <textarea name="message" rows={5} placeholder="Your Message / Tin nhắn" className="w-full border rounded p-2" required></textarea>
          <Button type="submit" className="w-full">Send / Gửi</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Don Nguyen & Associates. All rights reserved.</p>
        <p>&copy; {new Date().getFullYear()} Don Nguyen & Associates. Đã đăng ký bản quyền.</p>
      </footer>
    </div>
  );
}
