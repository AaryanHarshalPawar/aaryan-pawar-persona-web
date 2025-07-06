export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "mastering-react-hooks",
    title: "Mastering React Hooks: A Complete Guide",
    excerpt: "Learn how to effectively use React Hooks to write cleaner, more maintainable code. From useState to custom hooks, we'll cover everything you need to know.",
    content: `React Hooks revolutionized how we write React components, allowing us to use state and other React features in functional components. In this comprehensive guide, we'll explore the most important hooks and how to use them effectively.

## Understanding useState

The useState hook is the foundation of state management in functional components. It allows you to add state to your components without converting them to class components.

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Working with useEffect

The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this effect runs once

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
\`\`\`

## Creating Custom Hooks

Custom hooks are a powerful way to share stateful logic between components. They're just JavaScript functions that can call other hooks.

\`\`\`javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

## Best Practices

1. **Always use the dependency array**: When using useEffect, always include a dependency array to prevent infinite loops.
2. **Keep hooks at the top level**: Never call hooks inside loops, conditions, or nested functions.
3. **Create custom hooks for reusable logic**: If you find yourself repeating the same stateful logic, extract it into a custom hook.
4. **Use multiple state variables**: Instead of putting all state in one object, split it into multiple useState calls for better performance.

## Conclusion

React Hooks provide a more direct API to the React concepts you already know. They make your code more readable and easier to test. Start small by converting simple class components to functional components with hooks, and gradually work your way up to more complex patterns.`,
    author: "Aaryan Pawar",
    publishedAt: "2024-01-15",
    category: "React",
    readTime: "8 min read"
  },
  {
    id: "responsive-design-principles",
    title: "Modern Responsive Design Principles",
    excerpt: "Discover the essential principles of responsive design that ensure your websites look great on all devices. Learn about mobile-first design, flexible grids, and modern CSS techniques.",
    content: `Responsive design is no longer optional—it's essential. With the variety of devices and screen sizes available today, your website must provide an excellent experience everywhere. Let's explore the fundamental principles that make responsive design work.

## Mobile-First Approach

Starting with mobile design ensures that your website works well on the most constrained devices first, then progressively enhances for larger screens.

\`\`\`css
/* Mobile styles first */
.container {
  padding: 1rem;
  width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
\`\`\`

## Flexible Grid Systems

Modern CSS Grid and Flexbox make creating flexible layouts easier than ever.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.flex-item {
  flex: 1 1 300px; /* grow, shrink, basis */
}
\`\`\`

## Responsive Typography

Typography should scale appropriately across devices. Use relative units and consider reading comfort.

\`\`\`css
/* Base font size */
html {
  font-size: 16px;
}

/* Responsive typography */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.2;
}

p {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  line-height: 1.6;
  max-width: 65ch; /* Optimal reading width */
}
\`\`\`

## Images and Media

Responsive images ensure fast loading and appropriate sizing across devices.

\`\`\`html
<!-- Responsive image with art direction -->
<picture>
  <source media="(min-width: 800px)" srcset="large-image.jpg">
  <source media="(min-width: 400px)" srcset="medium-image.jpg">
  <img src="small-image.jpg" alt="Description">
</picture>

<!-- Simple responsive image -->
<img src="image.jpg" alt="Description" style="max-width: 100%; height: auto;">
\`\`\`

## Container Queries

The future of responsive design includes container queries, which allow elements to respond to their container's size rather than the viewport.

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    align-items: center;
  }
}
\`\`\`

## Testing and Optimization

1. **Test on real devices**: Emulators are helpful, but real device testing is crucial.
2. **Performance matters**: Responsive design should improve, not hinder, performance.
3. **Accessibility first**: Ensure your responsive design works for all users, including those using assistive technologies.

## Conclusion

Responsive design is about creating flexible, adaptable experiences. By following these principles and staying updated with modern CSS techniques, you can create websites that truly work everywhere.`,
    author: "Aaryan Pawar",
    publishedAt: "2024-01-10",
    category: "CSS",
    readTime: "6 min read"
  },
  {
    id: "javascript-performance-optimization",
    title: "JavaScript Performance Optimization Techniques",
    excerpt: "Learn practical techniques to optimize your JavaScript applications for better performance. From code splitting to memory management, discover what makes JavaScript fast.",
    content: `JavaScript performance can make or break user experience. Slow applications frustrate users and hurt business metrics. Let's explore practical techniques to optimize JavaScript performance.

## Code Splitting and Lazy Loading

Don't load all your JavaScript at once. Split your code and load it when needed.

\`\`\`javascript
// Dynamic imports for code splitting
const loadChart = async () => {
  const { Chart } = await import('./Chart');
  return Chart;
};

// React lazy loading
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Debouncing and Throttling

Control how often functions execute, especially for event handlers.

\`\`\`javascript
// Debounce: Wait for pause in execution
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle: Limit execution frequency
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Usage
const optimizedSearch = debounce(searchFunction, 300);
const optimizedScroll = throttle(scrollHandler, 100);
\`\`\`

## Efficient DOM Manipulation

Minimize DOM interactions and use efficient methods when you must interact with it.

\`\`\`javascript
// Bad: Multiple DOM queries and modifications
function updateList(items) {
  const list = document.getElementById('list');
  list.innerHTML = ''; // Triggers reflow
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    list.appendChild(li); // Multiple reflows
  });
}

// Good: Batch DOM operations
function updateListOptimized(items) {
  const list = document.getElementById('list');
  const fragment = document.createDocumentFragment();
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    fragment.appendChild(li);
  });
  
  list.innerHTML = '';
  list.appendChild(fragment); // Single reflow
}
\`\`\`

## Memory Management

Prevent memory leaks and manage memory efficiently.

\`\`\`javascript
// Clean up event listeners
class ComponentManager {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  init() {
    document.addEventListener('click', this.handleClick);
    window.addEventListener('resize', this.handleResize);
  }

  destroy() {
    document.removeEventListener('click', this.handleClick);
    window.removeEventListener('resize', this.handleResize);
  }

  handleClick(event) {
    // Handle click
  }

  handleResize(event) {
    // Handle resize
  }
}

// Use WeakMap for private data
const privateData = new WeakMap();

class MyClass {
  constructor(data) {
    privateData.set(this, { data });
  }

  getData() {
    return privateData.get(this).data;
  }
}
\`\`\`

## Optimize Loops and Iterations

Choose the right iteration method for your use case.

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// For simple iterations: for loop is fastest
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// For functional operations: use appropriate methods
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Avoid creating functions in loops
// Bad
numbers.forEach(n => {
  setTimeout(() => console.log(n), 1000); // Creates new function each time
});

// Good
const logNumber = (n) => console.log(n);
numbers.forEach(n => {
  setTimeout(() => logNumber(n), 1000);
});
\`\`\`

## Use Web Workers for Heavy Computations

Offload CPU-intensive tasks to prevent blocking the main thread.

\`\`\`javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({ numbers: [1, 2, 3, 4, 5] });

worker.onmessage = function(e) {
  console.log('Result:', e.data.result);
};

// worker.js
self.onmessage = function(e) {
  const { numbers } = e.data;
  
  // Heavy computation
  const result = numbers.reduce((acc, n) => {
    return acc + fibonacci(n);
  }, 0);
  
  self.postMessage({ result });
};

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
\`\`\`

## Conclusion

JavaScript performance optimization is about understanding bottlenecks and applying the right techniques. Profile your applications, measure performance, and optimize where it matters most. Remember: premature optimization is the root of all evil, but strategic optimization is essential for great user experiences.`,
    author: "Aaryan Pawar",
    publishedAt: "2024-01-05",
    category: "JavaScript",
    readTime: "10 min read"
  },
  {
    id: "building-accessible-websites",
    title: "Building Accessible Websites: A Developer's Guide",
    excerpt: "Web accessibility ensures everyone can use your website. Learn the fundamental principles and practical techniques to make your websites accessible to all users.",
    content: `Web accessibility isn't just about compliance—it's about creating inclusive experiences for all users. Let's explore practical ways to build accessible websites that everyone can use.

## Understanding Web Accessibility

Web accessibility means ensuring people with disabilities can perceive, understand, navigate, and interact with your website. This includes users with:

- Visual impairments
- Hearing impairments
- Motor disabilities
- Cognitive disabilities

## Semantic HTML: The Foundation

Semantic HTML provides meaning and structure that assistive technologies can understand.

\`\`\`html
<!-- Good: Semantic structure -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>

<aside>
  <h2>Related Articles</h2>
  <!-- sidebar content -->
</aside>

<footer>
  <p>&copy; 2024 Your Company</p>
</footer>

<!-- Bad: Div soup -->
<div class="header">
  <div class="nav">
    <div class="nav-item">Home</div>
    <div class="nav-item">About</div>
  </div>
</div>
\`\`\`

## Keyboard Navigation

Ensure all interactive elements are keyboard accessible.

\`\`\`html
<!-- Custom button with proper keyboard support -->
<button 
  class="custom-button"
  onclick="handleClick()"
  onkeydown="handleKeyDown(event)"
>
  Click me
</button>

<script>
function handleKeyDown(event) {
  // Allow Enter and Space to activate button
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleClick();
  }
}

// Manage focus for complex interactions
function openModal() {
  const modal = document.getElementById('modal');
  const firstFocusableElement = modal.querySelector('button, input, select, textarea, [href], [tabindex]:not([tabindex="-1"])');
  
  modal.style.display = 'block';
  firstFocusableElement.focus();
  
  // Trap focus within modal
  modal.addEventListener('keydown', trapFocus);
}

function trapFocus(event) {
  const focusableElements = modal.querySelectorAll('button, input, select, textarea, [href], [tabindex]:not([tabindex="-1"])');
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
}
</script>
\`\`\`

## ARIA Labels and Descriptions

Use ARIA attributes to provide additional context for assistive technologies.

\`\`\`html
<!-- Form with proper labels -->
<form>
  <label for="email">Email Address</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    aria-describedby="email-help"
    required
  >
  <div id="email-help">We'll never share your email address</div>
  
  <!-- Complex interactive element -->
  <div 
    role="button"
    tabindex="0"
    aria-label="Close dialog"
    aria-pressed="false"
    onclick="toggleDialog()"
    onkeydown="handleKeyPress(event)"
  >
    ×
  </div>
  
  <!-- Progress indicator -->
  <div 
    role="progressbar"
    aria-valuenow="32"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Upload progress"
  >
    32% complete
  </div>
</form>
\`\`\`

## Color and Contrast

Ensure sufficient color contrast and don't rely solely on color to convey information.

\`\`\`css
/* Good contrast ratios */
.text-primary {
  color: #1a1a1a; /* Dark text */
  background: #ffffff; /* White background */
  /* Contrast ratio: 15.8:1 (Exceeds AA standard) */
}

.text-secondary {
  color: #4a5568; /* Medium gray */
  background: #ffffff;
  /* Contrast ratio: 7.73:1 (Exceeds AA standard) */
}

/* Don't rely only on color */
.error-message {
  color: #e53e3e;
  border-left: 4px solid #e53e3e; /* Visual indicator */
}

.error-message::before {
  content: "⚠ "; /* Icon indicator */
}

/* Focus indicators */
button:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid #4299e1;
  outline-offset: 2px;
}
\`\`\`

## Images and Media

Provide meaningful alternative text for images and captions for videos.

\`\`\`html
<!-- Descriptive alt text -->
<img 
  src="chart.png" 
  alt="Sales increased 23% from January to March 2024"
>

<!-- Decorative images -->
<img 
  src="decoration.png" 
  alt=""
  role="presentation"
>

<!-- Video with captions -->
<video controls>
  <source src="tutorial.mp4" type="video/mp4">
  <track 
    kind="captions" 
    src="tutorial-captions.vtt" 
    srclang="en" 
    label="English captions"
  >
  <p>Your browser doesn't support video. <a href="tutorial.mp4">Download the video</a>.</p>
</video>
\`\`\`

## Testing for Accessibility

Regular testing ensures your accessibility implementations work correctly.

\`\`\`javascript
// Automated testing with jest and jest-axe
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// Manual testing checklist
const accessibilityChecklist = [
  'Can I navigate the entire site using only the keyboard?',
  'Are focus indicators visible and clear?',
  'Do images have meaningful alt text?',
  'Is the content readable with 200% zoom?',
  'Does the site work with a screen reader?',
  'Are error messages clearly communicated?',
  'Is the color contrast sufficient?'
];
\`\`\`

## Conclusion

Accessibility is not a one-time task—it's an ongoing commitment to inclusive design. Start with semantic HTML, test regularly, and always consider the diverse ways people interact with your website. When you build for accessibility, you create better experiences for everyone.`,
    author: "Aaryan Pawar",
    publishedAt: "2023-12-28",
    category: "Accessibility",
    readTime: "12 min read"
  },
  {
    id: "css-grid-complete-guide",
    title: "CSS Grid: The Complete Guide",
    excerpt: "Master CSS Grid with this comprehensive guide. Learn everything from basic concepts to advanced layout techniques that will transform how you approach web design.",
    content: `CSS Grid revolutionized how we create layouts on the web. Unlike Flexbox, which is one-dimensional, Grid is two-dimensional, giving you complete control over both rows and columns.

## Basic Grid Concepts

CSS Grid introduces several new concepts that form the foundation of grid layouts.

\`\`\`css
.grid-container {
  display: grid;
  
  /* Define columns */
  grid-template-columns: 1fr 2fr 1fr; /* Three columns: 1:2:1 ratio */
  
  /* Define rows */
  grid-template-rows: 100px auto 50px; /* Three rows with specific heights */
  
  /* Gap between grid items */
  gap: 20px; /* Shorthand for row-gap and column-gap */
}

.grid-item {
  background: #f0f0f0;
  padding: 20px;
}
\`\`\`

## Grid Lines and Areas

Understanding grid lines helps you position items precisely.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  
  /* Named grid areas */
  grid-template-areas: 
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer";
}

/* Position items using line numbers */
.item-1 {
  grid-column: 1 / 3; /* From line 1 to line 3 */
  grid-row: 2 / 4;    /* From line 2 to line 4 */
}

/* Position items using named areas */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Responsive Grid Layouts

Create layouts that adapt to different screen sizes.

\`\`\`css
.responsive-grid {
  display: grid;
  gap: 2rem;
  padding: 2rem;
  
  /* Auto-fit: creates as many columns as fit */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* Alternative responsive approach */
.adaptive-grid {
  display: grid;
  gap: 1rem;
  
  /* Mobile first */
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .adaptive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .adaptive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

## Advanced Grid Techniques

Explore advanced features for complex layouts.

\`\`\`css
/* Subgrid (when supported) */
.parent-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.child-grid {
  display: grid;
  grid-column: span 2;
  
  /* Inherit parent's grid lines */
  grid-template-columns: subgrid;
  gap: inherit;
}

/* Dense packing */
.masonry-style {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: min-content;
  gap: 1rem;
  
  /* Fill gaps with smaller items */
  grid-auto-flow: row dense;
}

.masonry-item.large {
  grid-row: span 2;
}

.masonry-item.wide {
  grid-column: span 2;
}
\`\`\`

## Grid vs Flexbox: When to Use Which

Understanding when to use Grid vs Flexbox helps you choose the right tool.

\`\`\`css
/* Use Flexbox for 1D layouts */
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.button-group {
  display: flex;
  gap: 0.5rem;
}

/* Use Grid for 2D layouts */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## Common Grid Patterns

Here are some popular layout patterns using CSS Grid.

\`\`\`css
/* Holy Grail Layout */
.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Magazine Layout */
.magazine {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 200px);
  gap: 1rem;
}

.featured-article {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.secondary-article {
  grid-column: 4 / 7;
  grid-row: 1 / 2;
}

/* Card Layout with Different Sizes */
.dynamic-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  gap: 1rem;
  grid-auto-flow: row dense;
}

.card.featured {
  grid-column: span 2;
  grid-row: span 2;
}

.card.highlight {
  grid-row: span 2;
}
\`\`\`

## Performance Considerations

CSS Grid is highly optimized, but here are tips for best performance.

\`\`\`css
/* Avoid complex calculations */
.efficient-grid {
  display: grid;
  
  /* Use simple values when possible */
  grid-template-columns: repeat(3, 1fr);
  
  /* Avoid */
  /* grid-template-columns: calc(33.333% - 10px) calc(33.333% - 10px) calc(33.333% - 10px); */
}

/* Use auto-placement efficiently */
.auto-placement {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  
  /* Let Grid handle placement */
  /* Avoid manual positioning unless necessary */
}
\`\`\`

## Conclusion

CSS Grid provides powerful layout capabilities that were previously difficult or impossible to achieve. Start with simple layouts and gradually incorporate more advanced features. Remember that Grid and Flexbox work well together—use Grid for page layouts and Flexbox for component layouts.`,
    author: "Aaryan Pawar",
    publishedAt: "2023-12-20",
    category: "CSS",
    readTime: "9 min read"
  }
];