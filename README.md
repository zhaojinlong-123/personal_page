# 麻袋科技首席科学家主页

这是一个无需构建工具的静态主页，主题面向麻袋科技公司首席科学家，聚焦情感陪伴机器人、具身智能、多模态大模型和 VLA。

## 打开方式

直接在浏览器中打开：

```text
E:\workshop\personal-vla-site\index.html
```

也可以在资源管理器中进入 `E:\workshop\personal-vla-site`，双击 `index.html`。

## 让局域网内其他人访问

在 `E:\workshop\personal-vla-site` 目录下运行：

```powershell
python -m http.server 5500 --bind 0.0.0.0 --directory E:\workshop\personal-vla-site
```

当前这台电脑的局域网访问地址：

```text
http://192.168.31.89:5500/
```

同一 Wi-Fi 或同一局域网内的其他设备，可以在浏览器中打开上面的地址。

注意：这个地址只适合同一局域网访问。如果要让互联网上任何人访问，需要部署到 GitHub Pages、Cloudflare Pages、Netlify、Vercel，或使用内网穿透/路由器端口映射。

## 文件结构

```text
personal-vla-site/
  index.html
  styles.css
  script.js
  assets/
    vla-policy.svg
    data-engine.svg
    planner.svg
```

## 建议替换内容

- `index.html` 中的 `your.email@example.com` 替换为真实邮箱。
- GitHub 链接可以替换为公司或个人主页。
- 页面中的“麻袋科技公司首席科学家”可以替换为真实姓名和职务组合。
- 情感陪伴机器人、具身智能、大模型、VLA 等方向可以继续扩展为真实项目、论文或产品链接。

## 部署建议

第一版可以直接部署到 GitHub Pages、Cloudflare Pages、Netlify 或 Vercel。因为当前版本是纯静态文件，不需要安装 Node.js 或运行构建命令。

## 部署到 GitHub Pages

推荐使用 GitHub Pages 的 `main` 分支根目录发布方式：

1. 在 GitHub 创建一个新仓库，例如 `personal-vla-site`。
2. 将本地仓库推送到 GitHub。
3. 进入仓库的 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. 保存后等待 GitHub Pages 自动发布。

发布地址通常是：

```text
https://你的GitHub用户名.github.io/personal-vla-site/
```

如果仓库名设置为 `你的GitHub用户名.github.io`，发布地址会是：

```text
https://你的GitHub用户名.github.io/
```

当前计划使用的仓库：

```text
https://github.com/zhaojinlong-123/personal_page.git
```

当前仓库名为 `personal_page`，所以 GitHub Pages 发布地址通常是：

```text
https://zhaojinlong-123.github.io/personal_page/
```
