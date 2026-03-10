# * 1. Git*
- * 1.1 Undo actions *
+ Undo file đã sửa nhưng chưa add: 
```bash
git restore.js
```
+ Undo git add (bỏ file khỏi staging):
```bash
git restore --staged file.js
```
- ** 1.2 Braching model **
+ Undo commit nhưng giữ code
```bash
git reset --soft HEAD~1
```
* Note: Commit đầu tiên không bị reset. Nếu muốn rest thì phải xóa thư mực .git đi rồi init lại.
- ** 1.3 Branch **
+ Xem danh sách: Branch hiện tại sẽ có dấu *
```
git branch
```
+ Tạo branch mới
```bash
git branch ten-branch
```
+ Chuyển branch
```bash
git switch ten-branch
```
+ Checkout qua nha
```bash
git checkout ten-branch
```
+ Tạo và chuyển qua branch luôn
```bash
git checkout -b ten-branch
```
+ Xóa branch local: đúng ở nhánh khác trước khi xóa
```bash
git branch -d ten-branch
```
+ Xoá branch remote
``` bash
git push origin --delete ten-branch
```
* Note: Nhánh mới copy giống hệt nhánh hiện tại nên nhớ trước khi tạo nhánh mới cần pull code latest về
- ** 1.4 git ignore file **
+ Mục đích: file dùng để nói cho git biết all files không cần tracking, không add và cũng không commit
+ Dùng để ignore: node_modules, file build, file config cá nhân, log,..
+ Tạo file:
``` bash
.gitignore
```
+ ignore file cụ thể
```bash
config.js
.env
```
+ Ignore cả thư mục
``` bash
node_modules/
```
+ Ignore theo đuôi file
```bash
*.log
*.tmp
* .txt
```
# **2. Js basic **
- ** 2.1 Convention **
+ Đặt tên file & folder (kebab-case)
```bash
login-page.js
user-service.js
tests/lesson-03/
```
+ Đặt tên biến & hàm (camelCase)
```bash
let userName = "Min"
```
+ Hằng số dùng chữ in hoa
```bash
const MAX_LENGTH = 100;
```
+ Đặt tên cho class, constructor, Page Object (PascalCase)
```bash
class UserService {}
class LoginPage {}
```
* Note: snake_case → tránh dùng 
- ** 2.2 Object **
+ Khai báo object
```bash
const user = {
  name: "An",
  age: 20,
  isStudent: true
};
```
+ Try cập, get dữ liệu
```bash
console.log(user.name);      // An
console.log(user["age"]);    // 20
```
- ** 2.3 Function **
```bash
const calculator = {
  add(a, b) {
    return a + b;
  }
};

calculator.add(2, 3); // 5
```
- ** 2.3 Arrary **
+ Khai báo arrary
```bash
const numbers = [1, 2, 3, 4];
const names = ["An", "Bình", "Chi"];
```
+ Try cập phần tử trong mảng
```bash
numbers[0]; // 1
numbers[3]; // 4
```
+ Duyệt array
```bash
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```
- ** 2.4 Logical Operator (Toán tử logic) **
+ AND &&: Tất cả 2 vế mệnh đề đều đúng → true
```bash
age > 18 && isStudent
```
+ OR ||: chỉ cần đúng 1
```bash
age > 18 OR age < 65
```
+ !: đảo ngược giá trị của mệnh 
```bash
if (!isLogin) {
  console.log("Vui lòng đăng nhập");
}
```