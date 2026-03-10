# Git Setup & Playwright Init

## 1. Cấu hình Git

Trước khi làm việc với Git, cần một số cấu hình mặc định:

### Config username (tên người dùng)

```bash
git config --global user.name "tên bạn"
```

## 2. Generate SSH Key

Tạo SSH key: ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

## 3. Cài đặt Playwright
```bash
 npm init playwright@latest
```
## 4. Khởi tạo Project với Git
- Khởi tạo repository local
```bash
git init
```
- Liên kết repository local với GitHub
```bash
git remote add origin <ssh_link>
```

- Add file vào Staging Area
```bash
git add .
```
- Commit code
```bash
git commit -m "message"
```
- Push code lên GitHub
```bash
git push origin main
```