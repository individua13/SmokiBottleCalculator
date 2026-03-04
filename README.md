# E-Liquid Mixing Calculator with Bottle Visualization 🧪💨

A professional, interactive e-liquid mixing calculator with real-time 3D-style bottle visualization. Perfect for DIY vapers who need precise calculations for base, flavoring, and nicotine.

## 🌐 Live Demo

Try it here: [E-Liquid Calculator with Bottle](https://torugurud.ee/github/liquidcalc/index.html)

---

## ✨ Key Features

- **Interactive 3D bottle** — Visual representation of your liquid layers
- **Real-time calculations** — Updates instantly as you adjust any value
- **Nicotine strength calculator** — Calculate exact nicotine amounts needed
- **Dual volume display** — Shows both milliliters and drops
- **Layer visualization** — Color-coded layers for:
  - Base (blue)
  - Flavoring (green)  
  - Nicotine (pink/purple)
- **Responsive design** — Works perfectly on desktop and mobile

---

## 📋 How It Works

### Input Parameters:
1. **Total volume** — Desired final e-liquid volume (ml)
2. **Flavor percentage** — Percentage of flavoring (0–50%)
3. **Target nicotine strength** — Desired final nicotine mg/ml
4. **Nicotine base strength** — Strength of your nicotine shot (mg/ml)

### Real-time Output:
- **Base volume** in ml and drops
- **Flavor volume** in ml and drops
- **Nicotine volume** in ml and drops
- **Visual bottle** with colored layers showing proportions

---

## 🧮 Calculation Formula

- **Nicotine needed** = (Target strength / Nicotine base strength) × Total volume
- **Flavor volume** = (Flavor % / 100) × Total volume
- **Base volume** = Total volume − Flavor volume − Nicotine volume
- **Drop conversion:** 1 ml = 33 drops (standard assumption)

---

## 🎨 Visual Features

The bottle visualization shows:
- **Blue layer** — Base liquid
- **Green layer** — Flavoring  
- **Pink/purple layer** — Nicotine
- Layers automatically hide when quantity is zero
- Real-time height adjustment based on percentages

---

## 🛠️ Technologies Used

- HTML5
- CSS3 with Bootstrap 4.6
- Custom 3D bottle CSS styling
- Vanilla JavaScript (ES6)
- Responsive media queries

---

## 📁 File Structure
├── index.html # Main calculator interface
├── style1.css # Main styling and layout
├── BottleStyle.css # 3D bottle visualization CSS
├── formula.js # Calculation logic
├── Bottle.js # Bottle rendering and updates
└── README.md # This file

---

## 📱 Responsive Breakpoints

Optimized for all screen sizes:
- Desktop (1200px+)
- Laptop (1100px)
- Tablet (850px)
- Mobile (800px and below)

---

## 🎯 Use Cases

- DIY e-liquid mixing
- Precise nicotine shot calculations
- Recipe development
- Educational tool for mixing ratios
- Visual learning aid

---

## 🔧 How to Use

1. Enter your desired **total volume**
2. Set your **flavor percentage**
3. Input your **target nicotine strength**
4. Enter your **nicotine base strength**
5. Watch the bottle fill in real-time!

---

## 📝 License

Free to use, modify, and distribute for personal or commercial projects.

---

## 👨‍💻 Author

**Individua13**

---

## 🙏 Credits

- Bootstrap for responsive framework
- Google Fonts for typography
- Community feedback and testing

---

*Happy mixing! Watch your liquid come to life! 💨🧪*
