# VLA 个人网站

这是一个无需构建工具的静态个人网站，主题面向 VLA 大模型、具身智能和机器人策略学习。

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

- `index.html` 中的 `your.email@example.com` 替换为你的真实邮箱。
- GitHub 链接替换为你的个人主页。
- 项目区的 3 个项目可以替换为你的真实项目。
- 技术笔记区可以改成真实文章链接。
- 页脚中的名称可以改成你的姓名或昵称。

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
