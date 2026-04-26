---
layout: default
title: 投稿指南
permalink: /submit/
---

<section class="page-header">
    <div class="container">
        <h1 class="page-title">📝 投稿指南</h1>
        <p class="page-subtitle">分享你的创意作品，让更多人看到你的成果！</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="submit-guide">
            
            <!-- 投稿说明 -->
            <div class="guide-card">
                <h3>📌 投稿说明</h3>
                <p>欢迎教师和学生提交自己的网页应用作品！我们支持两种投稿方式：</p>
                <ul style="margin-left: 20px; color: var(--text-secondary);">
                    <li><strong>方式一：GitHub PR</strong> - 推荐有 GitHub 使用经验的用户</li>
                    <li><strong>方式二：GitHub Issue</strong> - 填写表单即可提交，适合新手</li>
                </ul>
            </div>

            <!-- 投稿要求 -->
            <div class="guide-card">
                <h3>✅ 投稿要求</h3>
                <ul style="margin-left: 20px; color: var(--text-secondary);">
                    <li>作品必须是可以正常访问的网页应用</li>
                    <li>内容健康、积极向上，符合社会主义核心价值观</li>
                    <li>需要提供有效的访问链接（URL）</li>
                    <li>建议提供源代码仓库链接（非必须）</li>
                    <li>图片请使用清晰的截图或预览图</li>
                    <li>作品描述需要客观、准确</li>
                </ul>
            </div>

            <!-- 投稿步骤 -->
            <div class="guide-card">
                <h3>🚀 投稿步骤（GitHub Issue）</h3>
                <ol class="guide-steps">
                    <li>
                        <strong>访问 GitHub Issues 页面</strong><br>
                        <small style="color: var(--text-secondary);">点击 <a href="{{ site.github_url }}/issues/new" target="_blank" style="color: var(--primary);">这里</a> 创建新 Issue</small>
                    </li>
                    <li>
                        <strong>选择 "📝 作品投稿" 模板</strong><br>
                        <small style="color: var(--text-secondary);">使用我们提供的 Issue 模板填写信息</small>
                    </li>
                    <li>
                        <strong>填写作品信息</strong><br>
                        <small style="color: var(--text-secondary);">按照模板要求填写所有必填项</small>
                    </li>
                    <li>
                        <strong>提交 Issue</strong><br>
                        <small style="color: var(--text-secondary);">审核团队会在 1-3 个工作日内处理</small>
                    </li>
                    <li>
                        <strong>等待审核通过</strong><br>
                        <small style="color: var(--text-secondary);">审核通过后你的作品将自动展示在网站上</small>
                    </li>
                </ol>
            </div>

            <!-- 投稿模板 -->
            <div class="guide-card">
                <h3>📋 投稿信息模板</h3>
                <p>请按照以下格式填写投稿信息：</p>
                <pre>
作品标题：<strong>你的作品名称</strong>

作品类型：
- [ ] 教师作品
- [ ] 学生作品

作者姓名：
所属学校：
{% raw %}{% endraw %}
{% raw %}年级（如为学生）：{% endraw %}

作品描述：
（请简要描述你的作品功能和特点，50-200字）

访问链接：
（作品的实际访问地址）

源代码仓库：
（非必填，如果有的话请提供）

技术栈：
（使用的技术，如 HTML5, JavaScript, Vue.js 等）

标签：
（用逗号分隔，如：游戏, 工具, 教育）
                </pre>
            </div>

            <!-- 快速链接 -->
            <div class="guide-card" style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white;">
                <h3 style="color: white;">🎯 快速开始</h3>
                <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 16px;">
                    <a href="{{ site.github_url }}/issues/new/choose" target="_blank" class="btn btn-outline" style="border-color: white; color: white;">
                        📝 创建投稿 Issue
                    </a>
                    <a href="{{ site.github_url }}" target="_blank" class="btn btn-outline" style="border-color: white; color: white;">
                        🔧 访问 GitHub 仓库
                    </a>
                </div>
            </div>

            <!-- 常见问题 -->
            <div class="guide-card">
                <h3>❓ 常见问题</h3>
                <details style="margin-bottom: 16px;">
                    <summary style="cursor: pointer; font-weight: 500;">投稿需要审核多久？</summary>
                    <p style="margin-top: 12px; color: var(--text-secondary);">我们通常会在 1-3 个工作日内完成审核。如果超过一周未收到回复，请检查是否收到邮件通知。</p>
                </details>
                <details style="margin-bottom: 16px;">
                    <summary style="cursor: pointer; font-weight: 500;">可以修改已发布的作品信息吗？</summary>
                    <p style="margin-top: 12px; color: var(--text-secondary);">可以！请提交一个新的 Issue，说明需要修改的内容，我们会尽快处理。</p>
                </details>
                <details>
                    <summary style="cursor: pointer; font-weight: 500;">作品被拒绝怎么办？</summary>
                    <p style="margin-top: 12px; color: var(--text-secondary);">如果作品不符合要求，我们会说明原因。你可以根据反馈进行调整后重新提交。</p>
                </details>
            </div>

        </div>
    </div>
</section>
