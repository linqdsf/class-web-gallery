---
layout: default
title: 浏览作品
permalink: /browse/
---

<section class="page-header">
    <div class="container">
        <h1 class="page-title">🎨 浏览作品</h1>
        <p class="page-subtitle">发现精彩的网页应用作品，找到灵感！</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <!-- Filters -->
        <div class="filters">
            <div class="search-box">
                <input type="text" id="searchInput" placeholder="搜索作品名称、描述或标签...">
            </div>
            <select class="filter-select" id="categoryFilter">
                <option value="all">全部分类</option>
                <option value="teacher">👨‍🏫 教师作品</option>
                <option value="student">🎓 学生作品</option>
            </select>
            <select class="filter-select" id="sortFilter">
                <option value="latest">最新发布</option>
                <option value="popular">最多点赞</option>
                <option value="views">最多浏览</option>
            </select>
        </div>

        <!-- Category Tabs -->
        <div class="category-tabs" style="margin-bottom: 30px;">
            <button class="category-tab active" data-category="all">
                <span class="tab-icon">🏆</span>
                <span class="tab-text">全部</span>
            </button>
            <button class="category-tab" data-category="teacher">
                <span class="tab-icon">👨‍🏫</span>
                <span class="tab-text">教师作品</span>
            </button>
            <button class="category-tab" data-category="student">
                <span class="tab-icon">🎓</span>
                <span class="tab-text">学生作品</span>
            </button>
        </div>

        <!-- Apps Grid -->
        <div class="apps-grid" id="appsGrid">
            {% assign all_apps = site.data.apps.apps | sort: 'date' | reverse %}
            {% for app in all_apps %}
            <article class="app-card" data-category="{{ app.category }}" data-views="{{ app.views }}" data-likes="{{ app.likes }}" data-date="{{ app.date }}">
                <div class="app-card-image">
                    <img src="{{ app.thumbnail | default: '/assets/thumbnails/default.svg' }}" alt="{{ app.title }}" onerror="this.style.display='none'">
                    {% if app.featured %}
                    <span class="card-badge">⭐ 精选</span>
                    {% endif %}
                    {% if app.category == 'teacher' %}
                    <span class="card-type card-type-teacher">👨‍🏫 教师</span>
                    {% else %}
                    <span class="card-type card-type-student">🎓 学生</span>
                    {% endif %}
                </div>
                <div class="app-card-content">
                    <h3 class="app-card-title">{{ app.title }}</h3>
                    <p class="app-card-desc">{{ app.description | truncate: 80 }}</p>
                    <div class="app-card-meta">
                        <span class="app-author">
                            <img src="{{ app.author_avatar }}" alt="{{ app.author }}" class="meta-avatar">
                            {{ app.author }}
                        </span>
                        <span class="app-school">{{ app.school_icon }} {{ app.school }}</span>
                    </div>
                    <div class="app-card-tags">
                        {% for tag in app.tags limit: 4 %}
                        <span class="tag">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    <div class="app-card-footer">
                        <div class="app-stats-mini">
                            <span>👁️ {{ app.views }}</span>
                            <span>❤️ {{ app.likes }}</span>
                        </div>
                        <div class="card-actions">
                            <a href="{{ app.url }}" target="_blank" class="btn btn-sm btn-primary">🚀 访问</a>
                            {% if app.repo %}
                            <a href="{{ app.repo }}" target="_blank" class="btn btn-sm btn-secondary">📥 下载</a>
                            {% endif %}
                        </div>
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>

        <!-- Empty State -->
        <div class="empty-state hidden" id="emptyState">
            <div style="text-align: center; padding: 60px 20px;">
                <span style="font-size: 4rem;">🔍</span>
                <h3 style="margin: 20px 0;">没有找到匹配的作品</h3>
                <p style="color: var(--text-secondary);">试试调整搜索条件或筛选器</p>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.app-card');
    const emptyState = document.getElementById('emptyState');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    // 检查空状态
    function checkEmptyState() {
        const visibleCards = document.querySelectorAll('.app-card[style=""], .app-card:not([style])');
        const hasVisible = Array.from(visibleCards).some(c => c.style.display !== 'none');
        if (!hasVisible) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }
    }
    
    // 分类筛选
    categoryFilter.addEventListener('change', (e) => {
        const category = e.target.value;
        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
        checkEmptyState();
    });
    
    // 排序
    sortFilter.addEventListener('change', (e) => {
        const sortBy = e.target.value;
        const cardsArray = Array.from(cards);
        
        cardsArray.sort((a, b) => {
            if (sortBy === 'popular') {
                return parseInt(b.dataset.likes) - parseInt(a.dataset.likes);
            } else if (sortBy === 'views') {
                return parseInt(b.dataset.views) - parseInt(a.dataset.views);
            } else {
                return new Date(b.dataset.date) - new Date(a.dataset.date);
            }
        });
        
        const grid = document.getElementById('appsGrid');
        cardsArray.forEach(card => grid.appendChild(card));
    });
});
</script>
