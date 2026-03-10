# Git Setup & Playwright Init

## 1. Cấu hình Git

Trước khi làm việc với Git, cần một số cấu hình mặc định:

### Config username (tên người dùng)

```bash
git config --global user.name "tên bạn"
```

2. Generate SSH Key

Tạo SSH key: ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

3. Cài đặt Playwright
```npm init playwright@latest
```
4. Khởi tạo Project với Git
- Khởi tạo repository local
```git init
```
- Liên kết repository local với GitHub
```
git remote add origin <ssh_link>
```
- Add file vào Staging Area
```
git add .
```
- Commit code
```
git commit -m "message"
```
- Push code lên GitHub
```
git push origin main
```