# **1. Version Control System**
- Local: lưu ở máy cá nhân
- Centralize: lưu ở một máy chủ tập trung
- Distributed: lưu ở nhiều máy khác nhau

# **2. Git**
## **2.1. Git - three states**
- Working directory: Các file mới hoặc file có thay đổi
- Staging Area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
- Repository: Các commit (Phiên bản)
## **2.2. Git Workflow **
Quy trình làm việc cơ bản với Git từ local lên GitHub.

### **2.2.1 Khởi tạo repository local**
```bash
git init
```
### **2.2.2. Liên kết repo local với GitHub**
```bash
git remote add origin <repository-url>
```
### **2.2.3 Thêm file vào staging**
```bash
git add .
```
### **2.2.4 Commit thay đổi**
```bash
git commit -m "<message>"
```
### **2.2.5 Push code lên**
```bash
git push origin main
```
### 💡 Tips nhỏ
- Kiểm tra trạng thái file: `git status`
- Xem lịch sử commit: `git log`

## **2.2. Git - commit covention**
- Syntax: <type>: <short_description>
- Type: Loại commit
- chore sửa nhỏ lẻ, chính tả. xóa file không dùng tới
- feat: thêm tính năng mới, testcase mới
- fix: sửa lỗi 1 test trước đó

# **3 Git - commit covention**
- / → comment 1 dòng
- /* ... */ → comment nhiều dòng

# **4 JavaScript Summary**
## **4.1 Biến (Variables)**
Khai báo 
```bash
let age = 18;        // biến có thể thay đổi
const name = "Mun"; // hằng số, không đổi
var score = 10;     // cách cũ, ít dùng
``` 
- Nên dùng: let, const
- Không nên dùng: var (dễ gây lỗi scope)

## **4.2 Kiểu dữ liệu (Data Types)**
- Các kiểu hay dùng 
```bash
let number = 10;          // Number
let text = "Hello";      // String
let isActive = true;     // Boolean
let obj = { name: "A" }; // Object
``` 
- Các primitive còn lại: 
- undefined → biến khai báo nhưng chưa gán giá trị
- null → cố ý không có giá trị
- symbol → giá trị duy nhất (ít dùng)
- bigint → số rất lớn

## **4.3 Điều kiện (Conditional Statements)**
- if
- if...else
- if ..else if...else
- switch case

## **4.4 Vòng lặp (Loops)**
- for (i), for (of), for (each), for (in)
```bash
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
while
```bash
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
do...while
```bash
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
do...while
```bash
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## **4.5 So sánh & Logic**
```bash
===   // so sánh bằng (nên dùng)
!==   // khác
&&    // AND
||    // OR
!     // NOT
```