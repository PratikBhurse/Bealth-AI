---
name: Vital Serenity
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e4947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e7977'
  outline-variant: '#bdc9c6'
  surface-tint: '#006a63'
  primary: '#005c55'
  on-primary: '#ffffff'
  primary-container: '#0f766e'
  on-primary-container: '#a3faef'
  inverse-primary: '#80d5cb'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#005683'
  on-tertiary: '#ffffff'
  tertiary-container: '#006fa8'
  on-tertiary-container: '#dbecff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf2e8'
  primary-fixed-dim: '#80d5cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#00504a'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  title-metric:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.03em
  title-metric-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system embodies an encouraging, scientifically grounded, and deeply human health companion. Rather than feeling sterile, clinical, or diagnostic, the experience evokes the atmosphere of an elite boutique wellness studio or a bespoke personal longevity clinic. The emotional tone is reassuring, empowering, clear, and proactive.

### Visual Style Philosophy
- **Modern Clean Warmth**: Generous negative space, whisper-soft background tints, and uncluttered views elevate essential biometric signals above cognitive noise.
- **Organic Precision**: Pure geometric primitives paired with generous corner radii (`rounded-2xl` through `rounded-3xl`) soften the data-dense reality of vitals and physiological streams.
- **Tactile Metrics & Glass Layering**: Metrics feel physically tangible through micro-diffused ambient drop shadows, frosted dynamic metric cards, and layered multi-ring progress trackers.
- **Tone of Voice**: Conversational yet authoritative, calm, celebratory upon milestones, and completely devoid of alarmist red flags or sterile diagnostic jargon.

## Colors

The color architecture is calibrated around biological resonance: vibrant yet grounded natural elements replacing cold medical whites and harsh sirens.

### Palette Architecture
- **Primary (`#0F766E` / Restorative Emerald)**: Anchors daily recovery, heart health, active readiness, and success states. Derived from deep pine and botanical mint.
- **Secondary (`#F97316` / Metabolic Amber-Coral)**: Highlights energy output, caloric burn, active strain, and dynamic coach insights. Radiates warmth without inducing panic.
- **Tertiary (`#0284C7` / Hydration & Circadian Sky)**: Dedicated to sleep stages, hydration volume, fluid intake metrics, and mindful breathing cycles.
- **Neutral Primary (`#0F172A` / Obsidian Slate)**: Replaces stark black with an ultra-rich slate for high-contrast, effortless legibility across dense biometric charts.
- **Canvas & Surface System**:
  - `surface-canvas`: `#F8FAF9` (Subtle botanical off-white with an organic 0.5% sage warmth).
  - `surface-card`: `#FFFFFF` (Pure optic white for crisp elevation above the canvas).
  - `surface-elevated`: `rgba(255, 255, 255, 0.85)` (Frosted translucent surface for floating HUDs and sticky navigation).
  - `surface-muted`: `#F1F5F3` (Gentle recessed container fill for track backgrounds and inset chips).
  - `border-subtle`: `rgba(15, 118, 110, 0.08)` (Micro-tinted boundary reinforcing cards without harsh lines).

## Typography

The typographic pairing balances human approachability with data-dense clarity.

- **Headlines & Metrics (`Plus Jakarta Sans`)**: Delivers friendly, sculpted curves with modern geometric structure. Numbers rendered in display scales carry intentional tabular figures (`tnum`) when presented in dashboards, charts, and linear meters to ensure jitter-free animations during live telemetry updates.
- **Body, Coach Dialogue & Labels (`Inter`)**: Offers world-class optical balance at small sizes. Used across AI coaching narratives, conversational threads, timeline markers, and micro-labels.
- **Stylistic Hierarchy Rules**:
  - Biometric key-value pairs always pair a high-contrast `title-metric` with a muted uppercase `label-caps` directly above or below.
  - Conversational AI responses utilize `body-lg` or `body-md` with relaxed line heights (`1.5` to `1.6`) to minimize reading fatigue.

## Layout & Spacing

A fluid, modular grid system prioritizes glanceable card stacks on mobile and unified biometric dashboards on desktop.

### Layout Philosophy
- **Mobile (< 768px)**: 4-column fluid layout with `1rem` margins and `1rem` gutters. Content flows in a single primary feed with horizontally scrolling segmented cards for quick visual scanning of day rings, daily vitals, and sleep architecture.
- **Tablet (768px - 1024px)**: 8-column layout with `2rem` margins and `1.5rem` gutters. Splits conversational AI assistance alongside persistent metric widgets.
- **Desktop (> 1024px)**: 12-column grid constrained to an ergonomic max-width of `1280px` centered with `3rem` margins. The page organizes into a 4-column contextual navigation/AI stream rail and an 8-column deep-dive analytics surface.

### Spatial Rhythms
- Card internal padding is uniformly set to `space-lg` (`1.5rem`) on desktop and tablet, scaling dynamically to `space-md` (`1rem`) on compact mobile views.
- Vertical space between distinct biological domains (e.g., Sleep vs. Strain vs. Nutrition) strictly adheres to `space-xl` (`2rem`) to visually structure cognitive zones.

## Elevation & Depth

Visual hierarchy relies on warm ambient depth and subtle translucent backdrops rather than dark, muddy drop-shadows.

### Layering System
1. **Canvas Level (0dp)**: Tinted restorative canvas (`#F8FAF9`). Non-interactive, pure baseline.
2. **Card Base (Level 1)**: Flat pure-white (`#FFFFFF`) with a delicate outer glow: `box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)` and a crisp low-contrast perimeter: `border: 1px solid rgba(15, 118, 110, 0.06)`.
3. **Floating & Hover States (Level 2)**: Primary metric highlights and active drag targets float with `box-shadow: 0 12px 32px -4px rgba(15, 118, 110, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)`.
4. **Glass Overlays & Navigation (Level 3)**: Fixed headers, sticky metric action sheets, and modal coach interactions employ frosted glassmorphism: `background: rgba(255, 255, 255, 0.82)`, `backdrop-filter: blur(16px) saturate(180%)`, complemented by a bright inner edge highlight: `border-bottom: 1px solid rgba(255, 255, 255, 0.6)`.

## Shapes

The geometric identity is defined by inviting, friendly curves that eliminate sharp mechanical edges.

- **Cards & Data Modules**: Base containers leverage `rounded-2xl` (`1.25rem` / `20px`) on compact views and `rounded-3xl` (`1.75rem` / `28px`) on macro-surfaces and hero widgets.
- **Buttons, Badges & Interactive Chips**: Built exclusively as smooth pills (`border-radius: 9999px`) or hyper-soft rectangles (`rounded-xl` / `0.75rem`), reinforcing an intuitive, fingertip-friendly touch target.
- **Circular Progress Rings & Gauges**: Concentric telemetry rings feature rounded stroke caps (`stroke-linecap: round`), lending an organic, continuous flow to daily metric completion.

## Components

### 1. Metric Cards & Vitals Modules
- **Container**: White background, `rounded-2xl` to `rounded-3xl`, subtle ambient drop-shadow.
- **Header Structure**: Top row holds the category icon (framed in an 8% primary/secondary tint circle), label in `label-caps` slate, and an optional timestamp or delta badge.
- **Hero Value**: Rendered in `title-metric` obsidian slate with unit strings set in `label-md` muted slate.

### 2. Progress Indicators (Circular & Linear)
- **Concentric Circular Rings**:
  - Track background: `surface-muted` (`#F1F5F3`).
  - Active arcs: 8px to 12px stroke width with smooth round caps.
  - Multi-attribute rings nest cleanly with 4px gap spacing (e.g., Activity = Emerald, Calories = Amber-Coral, Hydration = Sky Cyan).
- **Linear Meters**:
  - Height: `8px` or `12px` track, `rounded-full`.
  - Multi-zone gradient fills denoting optimal recovery zones with glowing marker pins.

### 3. Buttons
- **Primary Action**: Pill-shaped (`rounded-full`), deep emerald background (`#0F766E`), pure white typography (`label-lg`), subtle inward shadow: `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2)`. Active press reduces scale to `0.98`.
- **Secondary Action**: Pill-shaped, subtle sage fill (`rgba(15, 118, 110, 0.08)`), text colored in `#0F766E`. No heavy borders.
- **Ghost/Tertiary**: Slate text, zero background, reveals a soft muted pill on hover.

### 4. AI Health Coach Conversational Bubbles
- **Coach Inbound**: Left-aligned, `rounded-2xl` with bottom-left corner tightened to `rounded-sm` (creating an organic speech-bubble cue). Background tinted in an ultra-soft `#F0FDF9`, accented by a miniature emerald sparkle badge.
- **User Outbound**: Right-aligned, obsidian slate background (`#0F172A`) with crisp white text, `rounded-2xl` with bottom-right tightened.

### 5. Chips & Category Filters
- **Shape**: Compact pill (`rounded-full`), padding `0.375rem 0.875rem`.
- **Default State**: Neutral white or `#F1F5F3` with `label-md` text.
- **Selected State**: Primary Emerald background with white text and an integrated checkmark icon.

### 6. Form Inputs & Biometric Logging Fields
- **Container**: Soft pill or `rounded-xl` container with `#FFFFFF` fill and a 1px border (`#E2E8F0`).
- **Focus State**: Ring transition to `0 0 0 3px rgba(15, 118, 110, 0.15)` and border color shifts to `#0F766E`.
- **Numeric Steppers**: Split segmented pill with haptic plus/minus operators flanking an energetic central value.

### 7. Selection Controls (Checkboxes & Radios)
- **Checkboxes**: Smooth `rounded-md` (`6px`), emerald fill with a crisp white tick mark when selected.
- **Radio Buttons**: Dual concentric circles with a smooth spring transition when the inner emerald pip expands.