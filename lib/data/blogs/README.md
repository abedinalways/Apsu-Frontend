# Blog Data Structure

This folder contains all blog data stored as JSON files.

## 📝 Adding a New Blog Post

### 1. **Create a new JSON file** (e.g., `my-new-blog.json`)

### 2. **Follow the structure below:**

```json
{
  "id": 2,
  "slug": "my-new-blog",
  "title": "Your Blog Title Here",
  "category": "Category Name",
  "author": "Author Name",
  "date": "20 Jan 2026",
  "readTime": "5 mins read",
  "heroImage": "/images/blogDetails/hero.png",
  "summary": [
    { "id": "section-1", "title": "First Section Title" },
    { "id": "section-2", "title": "Second Section Title" }
  ],
  "content": [
    {
      "id": "intro",
      "type": "heading",
      "content": "Introduction"
    },
    {
      "id": "para-1",
      "type": "paragraph",
      "content": "Your paragraph text here..."
    }
  ]
}
```

## 🎯 Content Block Types

### 1. **heading** - Section Heading
```json
{
  "id": "unique-id",
  "type": "heading",
  "content": "Your Heading Text"
}
```

### 2. **paragraph** - Paragraph Text
```json
{
  "id": "unique-id",
  "type": "paragraph",
  "content": "Your paragraph text here...",
  "emphasis": true  // Optional: bold/highlighted text
}
```

### 3. **imageText** - Image with Text
```json
{
  "id": "unique-id",
  "type": "imageText",
  "layout": "right",  // or "left"
  "imageRatio": "wide",  // or "portrait"
  "image": "/images/blogDetails/your-image.png",
  "alt": "Image description",
  "description": "Main description text...",
  "bullets": [  // Optional
    "Bullet point 1",
    "Bullet point 2",
    "Bullet point 3"
  ]
}
```

### 4. **steps** - Step List
```json
{
  "id": "unique-id",
  "type": "steps",
  "steps": [
    {
      "title": "Step Title",
      "description": "Step description..."
    },
    {
      "title": "Another Step",
      "description": "Another description..."
    }
  ]
}
```

### 5. **bullet** - Bullet List
```json
{
  "id": "unique-id",
  "type": "bullet",
  "items": [
    "Item 1",
    "Item 2",
    "Item 3"
  ]
}
```

### 6. **quote** - Quote Block
```json
{
  "id": "unique-id",
  "type": "quote",
  "content": "Your quote text here..."
}
```

### 7. **divider** - Divider Line
```json
{
  "id": "unique-id",
  "type": "divider"
}
```

### 8. **number** - Numbered List
```json
{
  "id": "unique-id",
  "type": "number",
  "items": [
    "First item",
    "Second item",
    "Third item"
  ]
}
```

### 9. **iconGrid** - Icon Grid
```json
{
  "id": "unique-id",
  "type": "iconGrid",
  "items": [
    {
      "icon": "IconName",
      "title": "Feature Title",
      "description": "Feature description..."
    }
  ]
}
```

### 10. **table** - Comparison Table
```json
{
  "id": "unique-id",
  "type": "table",
  "tableData": {
    "headers": ["Column 1", "Column 2", "Column 3"],
    "rows": [
      ["Row 1, Col 1", "Row 1, Col 2", "Row 1, Col 3"],
      ["Row 2, Col 1", "Row 2, Col 2", "Row 2, Col 3"]
    ]
  }
}
```

## 💡 Best Practices

- Each block must have a unique `id`
- The `slug` must be unique (used in URLs)
- Content blocks can be arranged in any order within the content array
- Image paths must start with `/images/blogDetails/`
- Ensure all required fields are populated for each block type
- Use descriptive IDs for better maintainability

## 🔄 Backend Integration

When the backend API is ready:

```typescript
// Update in lib/services/blog.service.ts
private static useMockData = false; // Change to false

// Or use the method
BlogService.enableRealData();
```

The system will automatically load data from the API endpoint.

## 📋 Required Fields Checklist

When creating a new blog post, ensure you have:

- [ ] Unique `id` (number)
- [ ] Unique `slug` (string, URL-friendly)
- [ ] `title` (string)
- [ ] `category` (string)
- [ ] `author` (string)
- [ ] `date` (string, format: "20 Jan 2026")
- [ ] `readTime` (string, e.g., "5 mins read")
- [ ] `heroImage` (string, image path)
- [ ] `summary` (array of objects with `id` and `title`)
- [ ] `content` (array of content blocks)

## 🔗 Adding Blog to Blog List

After creating the JSON file, add the blog entry to `lib/data/blogsData.ts`:

```typescript
{
  id: 1,
  image: '/images/blog/img04.png',
  category: 'Weight Loss',
  date: '20 Jan 2026',
  readTime: '5 min read',
  title: 'Your Blog Title',
  description: 'Brief description for the blog card...',
  href: '/blog/your-blog-slug',
},
```

## 📍 File Locations

- **Blog Data Files**: `lib/data/blogs/*.json`
- **Blog List Data**: `lib/data/blogsData.ts`
- **Blog Types**: `types/blogDetails.ts`
- **Blog Components**: `components/blogDetails/`