# Blog Data Structure

এই ফোল্ডারে সব blog data JSON ফাইল হিসেবে সংরক্ষিত আছে।

## 📝 নতুন Blog যোগ করার নিয়ম

১. **নতুন JSON ফাইল তৈরি করুন** (যেমন: `my-new-blog.json`)

২. **নিচের structure follow করুন:**

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

### 1. **heading** - শিরোনাম
```json
{
  "id": "unique-id",
  "type": "heading",
  "content": "Your Heading Text"
}
```

### 2. **paragraph** - প্যারাগ্রাফ
```json
{
  "id": "unique-id",
  "type": "paragraph",
  "content": "Your paragraph text here...",
  "emphasis": true  // Optional: bold/highlighted text
}
```

### 3. **imageText** - ছবি + টেক্সট
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

### 4. **steps** - স্টেপ লিস্ট
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

### 5. **bullet** - বুলেট লিস্ট
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

### 6. **quote** - কোট
```json
{
  "id": "unique-id",
  "type": "quote",
  "content": "Your quote text here..."
}
```

### 7. **divider** - বিভাজক লাইন
```json
{
  "id": "unique-id",
  "type": "divider"
}
```

## 💡 Tips

- প্রতিটি block এর `id` unique হতে হবে
- `slug` unique হতে হবে (URL-এ use হবে)
- Content array-এ blocks যেকোনো order এ add করতে পারেন
- Image path `/images/blogDetails/` থেকে শুরু হবে
- Backend ready হলে শুধু `BlogService.enableRealData()` কল করুন

## 🔄 Backend Integration

Backend API ready হলে:

```typescript
// lib/services/blog.service.ts এ change করুন
private static useMockData = false; // Change to false

// অথবা
BlogService.enableRealData();
```

তারপর API থেকে data automatically load হবে।