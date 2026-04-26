# 作品源码文件夹

## 目录结构

```
_src/
├── teacher/          # 教师作品源码
│   └── [作品id]-项目名/
│       ├── index.html
│       ├── style.css
│       └── ...
│
└── student/          # 学生作品源码
    └── [作品id]-项目名/
        ├── index.html
        └── ...
```

## 添加新作品

1. 在 `teacher/` 或 `student/` 下创建新文件夹
2. 文件夹命名格式：`[id]-[项目名拼音]`
3. 上传所有源码文件
4. 在 `_data/apps.yml` 中更新 `repo` 字段指向此文件夹
