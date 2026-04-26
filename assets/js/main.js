/**
 * 创意网页工坊 - 主脚本
 */

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initBackToTop();
    initCategoryTabs();
    initSearch();
    initLikeButtons();
    initFavoriteButtons();
    initVoteButtons();
    initURLFilters();
});

/**
 * 导航切换
 */
function initNavigation() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}

/**
 * 返回顶部
 */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * 分类标签切换
 */
function initCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    const cards = document.querySelectorAll('.app-card');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            
            // 更新标签状态
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 筛选卡片
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = '';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * 搜索功能
 */
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.app-card');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        cards.forEach(card => {
            const title = card.querySelector('.app-card-title')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('.app-card-desc')?.textContent.toLowerCase() || '';
            const tags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.toLowerCase());
            
            const match = title.includes(query) || 
                         desc.includes(query) || 
                         tags.some(tag => tag.includes(query));
            
            card.style.display = match ? '' : 'none';
        });
    });
}

/**
 * 点赞按钮
 */
function initLikeButtons() {
    const likeBtns = document.querySelectorAll('.like-btn, .like-vote');
    
    likeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const appId = btn.dataset.appId;
            const countEl = btn.querySelector('.likes-count, .vote-count');
            const icon = btn.querySelector('.vote-icon, .stat-icon');
            
            // 模拟点赞（实际应该发送到服务器）
            const currentCount = parseInt(countEl.textContent) || 0;
            const isLiked = btn.classList.contains('liked');
            
            if (isLiked) {
                btn.classList.remove('liked');
                countEl.textContent = currentCount - 1;
                icon.textContent = '🤍';
            } else {
                btn.classList.add('liked');
                countEl.textContent = currentCount + 1;
                icon.textContent = '❤️';
            }
            
            // 保存到本地存储
            saveLikeState(appId, !isLiked);
        });
    });
    
    // 恢复点赞状态
    likeBtns.forEach(btn => {
        const appId = btn.dataset.appId;
        if (getLikeState(appId)) {
            btn.classList.add('liked');
            const icon = btn.querySelector('.vote-icon, .stat-icon');
            if (icon) icon.textContent = '❤️';
        }
    });
}

/**
 * 收藏按钮
 */
function initFavoriteButtons() {
    const favBtns = document.querySelectorAll('.favorite-btn, .favorite-vote');
    
    favBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const appId = btn.dataset.appId;
            const countEl = btn.querySelector('.favorites-count, .vote-count');
            const icon = btn.querySelector('.vote-icon, .stat-icon');
            
            const currentCount = parseInt(countEl.textContent) || 0;
            const isFavorited = btn.classList.contains('favorited');
            
            if (isFavorited) {
                btn.classList.remove('favorited');
                countEl.textContent = Math.max(0, currentCount - 1);
                icon.textContent = '☆';
            } else {
                btn.classList.add('favorited');
                countEl.textContent = currentCount + 1;
                icon.textContent = '⭐';
                showToast('已添加到收藏夹！');
            }
            
            saveFavoriteState(appId, !isFavorited);
        });
    });
    
    // 恢复收藏状态
    favBtns.forEach(btn => {
        const appId = btn.dataset.appId;
        if (getFavoriteState(appId)) {
            btn.classList.add('favorited');
            const icon = btn.querySelector('.vote-icon, .stat-icon');
            if (icon) icon.textContent = '⭐';
        }
    });
}

/**
 * 投票按钮
 */
function initVoteButtons() {
    const voteBtns = document.querySelectorAll('.vote-btn');
    
    voteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const icon = btn.querySelector('.vote-icon');
            
            // 添加动画效果
            btn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 200);
        });
    });
}

/**
 * URL 参数过滤
 */
function initURLFilters() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const tag = params.get('tag');
    
    if (category) {
        const tab = document.querySelector(`.category-tab[data-category="${category}"]`);
        if (tab) tab.click();
    }
}

/**
 * Toast 提示
 */
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// 本地存储方法
function saveLikeState(appId, isLiked) {
    const likes = JSON.parse(localStorage.getItem('app_likes') || '{}');
    likes[appId] = isLiked;
    localStorage.setItem('app_likes', JSON.stringify(likes));
}

function getLikeState(appId) {
    const likes = JSON.parse(localStorage.getItem('app_likes') || '{}');
    return likes[appId] || false;
}

function saveFavoriteState(appId, isFavorited) {
    const favorites = JSON.parse(localStorage.getItem('app_favorites') || '{}');
    favorites[appId] = isFavorited;
    localStorage.setItem('app_favorites', JSON.stringify(favorites));
}

function getFavoriteState(appId) {
    const favorites = JSON.parse(localStorage.getItem('app_favorites') || '{}');
    return favorites[appId] || false;
}

// 添加淡出动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
