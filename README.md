# shadcn-chart

[![npm version](https://img.shields.io/npm/v/shadcn-chart.svg)](https://www.npmjs.com/package/shadcn-chart)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Beautiful, customizable chart components built with [shadcn/ui](https://ui.shadcn.com/) conventions and [Recharts](https://recharts.org/).

## ✨ Features

- 📊 **5 Chart Types** - Area, Bar, Line, Pie, and Radial charts
- 🎨 **Multiple Variants** - Each chart has different display modes (stacked, gradient, interactive, etc.)
- 🌙 **Dark Mode Ready** - Built-in CSS variables for light/dark themes
- 📱 **Responsive** - Works on all screen sizes
- 🔧 **Highly Customizable** - Extensive props for fine-tuning
- 📦 **Tree-shakeable** - Only import what you need
- 💪 **TypeScript** - Full type definitions included

## 📦 Installation

### Option 1: shadcn CLI (Recommended)

Add individual chart components directly to your project:

```bash
# Install a single chart
npx shadcn add https://mnhtng.github.io/shadcn-chart/public/r/area-chart.json

# Or install all charts
npx shadcn add https://mnhtng.github.io/shadcn-chart/public/r/area-chart.json \
  https://mnhtng.github.io/shadcn-chart/public/r/bar-chart.json \
  https://mnhtng.github.io/shadcn-chart/public/r/line-chart.json \
  https://mnhtng.github.io/shadcn-chart/public/r/pie-chart.json \
  https://mnhtng.github.io/shadcn-chart/public/r/radial-chart.json
```

This copies the component source to your project, allowing full customization.

### Option 2: npm Package

```bash
npm install shadcn-chart
# or
yarn add shadcn-chart
# or
pnpm add shadcn-chart
```

### Peer Dependencies

```bash
npm install react react-dom recharts lucide-react tailwindcss tw-animate-css
```

> **Note:** This package requires **Tailwind CSS v4+** and uses the new CSS-first configuration.

## 🚀 Quick Start

### 1. Import Styles

Add to your root CSS file (e.g., `index.css` or `globals.css`):

```css
@import "shadcn-chart/styles";
```

Or import in your main entry file:

```tsx
// Next.js: app/layout.tsx or pages/_app.tsx
// Vite: main.tsx
import 'shadcn-chart/styles';
```

### 2. Use Components

```tsx
import { AreaChartComponent } from 'shadcn-chart';

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
};

export default function MyChart() {
  return (
    <AreaChartComponent
      title="Website Traffic"
      description="Visitor statistics"
      data={chartData}
      chartConfig={chartConfig}
      variant="gradient"
      showLegend
    />
  );
}
```

## 📊 Components

### AreaChartComponent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array<Record<string, string \| number>>` | **required** | Chart data array |
| `chartConfig` | `ChartConfig` | **required** | Color and label configuration |
| `variant` | `'default' \| 'linear' \| 'step' \| 'stacked' \| 'stacked-expanded' \| 'gradient' \| 'legend' \| 'interactive'` | `'default'` | Display variant |
| `title` | `string` | - | Card title |
| `description` | `string` | - | Card description |
| `xAxisKey` | `string` | `'month'` | Data key for X-axis |
| `showGrid` | `boolean` | `true` | Show grid lines |
| `showTooltip` | `boolean` | `true` | Show tooltip on hover |
| `showLegend` | `boolean` | auto | Show chart legend |
| `showDots` | `boolean` | auto | Show data point dots |
| `useGradient` | `boolean` | auto | Use gradient fill |

### BarChartComponent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array<Record<string, string \| number>>` | **required** | Chart data array |
| `chartConfig` | `ChartConfig` | **required** | Color and label configuration |
| `variant` | `'default' \| 'horizontal' \| 'multiple' \| 'stacked' \| 'stacked-legend' \| 'label' \| 'negative' \| 'mixed' \| 'interactive'` | `'default'` | Display variant |
| `layout` | `'vertical' \| 'horizontal'` | auto | Bar orientation |
| `showLabels` | `boolean` | auto | Show value labels on bars |
| `barRadius` | `number \| [number, number, number, number]` | auto | Bar corner radius |

### LineChartComponent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array<Record<string, string \| number>>` | **required** | Chart data array |
| `chartConfig` | `ChartConfig` | **required** | Color and label configuration |
| `dot` | `boolean \| function` | `false` | Show/customize data points |
| `yAxisConfig` | `object` | - | Y-axis configuration |
| `toggleOptions` | `object` | - | Time period toggle buttons |

### PieChartComponent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `PieChartData[]` | **required** | Pie chart data with category, value, percentage |
| `chartConfig` | `ChartConfig` | **required** | Color and label configuration |
| `innerRadius` | `number` | `0` | Donut hole radius |
| `outerRadius` | `number` | `100` | Pie outer radius |
| `showActiveSection` | `boolean` | `false` | Animate active section on hover |
| `paddingAngle` | `number` | `0` | Gap between segments |

### RadialChartShapeComponent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `RadialChartData` | **required** | Single data object with percentage |
| `chartConfig` | `ChartConfig` | **required** | Color and label configuration |
| `centerLabel` | `string` | - | Label in center of chart |
| `innerRadius` | `number` | `80` | Inner radius |
| `outerRadius` | `number` | `130` | Outer radius |
| `animationDuration` | `number` | `2.5` | Animation duration in seconds |

## 🎨 Theming

The package uses CSS variables for theming. Override these in your CSS:

```css
:root {
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
}

.dark {
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
}
```

## ⚙️ Tailwind CSS Configuration

### Tailwind v4

If you're using a bundler like Vite with `@tailwindcss/vite`, you need to add a `@source` directive so Tailwind can scan the package's utility classes:

```css
@import "tailwindcss";

@source "../node_modules/shadcn-chart";
```

### Tailwind v3

Add the package to your content paths:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/shadcn-chart/dist/**/*.{js,mjs}',
  ],
};
```

## 🌐 Framework Compatibility

| Framework | Status |
|-----------|--------|
| Next.js (App Router) | ✅ Supported |
| Next.js (Pages Router) | ✅ Supported |
| Vite | ✅ Supported |
| Create React App | ✅ Supported |
| Astro | ✅ Supported |
| Remix | ✅ Supported |
| TanStack Start | ✅ Supported |

## 📄 License

MIT © [MnhTng](https://github.com/mnhtng)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 Changelog

See [GitHub Releases](https://github.com/mnhtng/shadcn-chart/releases) for changelog.
