# BargainBuddy - Price Comparison Platform

![BargainBuddy](https://raw.githubusercontent.com/kartikgarg3000/BargainBuddy/main/public/images/logo.png)

BargainBuddy is a modern price comparison web application built with Node.js and Express.js that helps users find the best deals across multiple e-commerce platforms. Compare prices, reviews, and ratings in real-time to make informed purchasing decisions.

## 🌟 Features

- **Multi-Platform Price Comparison**: Compare prices across 5+ major e-commerce platforms
- **Advanced Filtering Options**: Sort by price, rating, or review count
- **Customizable Results**: Select number of results to display
- **Platform Selection**: Choose specific platforms for comparison
- **Real-time Data**: Get up-to-date pricing and product information
- **Interactive UI**: User-friendly interface with responsive design
- **Price History**: Track price changes over time
- **Savings Calculator**: See potential savings across platforms

## 🚀 Live Demo

Visit [BargainBuddy](https://bargain-buddy.vercel.app) to try out the application.

## 🛠️ Tech Stack

- **Frontend**: EJS, TailwindCSS
- **Backend**: Node.js, Express.js
- **API**: RESTful architecture
- **Deployment**: Vercel
- **Version Control**: Git

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/kartikgarg3000/BargainBuddy.git
cd BargainBuddy
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up the mock API**
```bash
npm install -g json-server
json-server --watch db.json --port 3000
```

4. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:8000`

## 📊 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `/products` | Get all available products |
| `/companies` | Get all supported platforms |
| `/{companyName}` | Get products from specific platform |

## 💡 Usage

1. Select a product from the dropdown menu
2. Choose your preferred e-commerce platforms
3. Set sorting preferences (price, rating, reviews)
4. Specify the number of results to display
5. Click "Compare Prices" to see the results

## 🔍 Features in Detail

### Price Comparison
- Real-time price comparison across platforms
- Automatic best deal identification
- Potential savings calculator

### Filtering Options
- Sort by lowest/highest price
- Filter by rating
- Sort by review count
- Custom result limit

### Platform Selection
- Multi-select platform comparison
- Individual platform analysis
- Platform-specific deals

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kartik Garg**
- GitHub: [@kartikgarg3000](https://github.com/kartikgarg3000)
- LinkedIn: [Kartik Garg](https://www.linkedin.com/in/kartik-garg-a01027231/)

## 🙏 Acknowledgments

- Thanks to all e-commerce platforms for providing product data
- Special thanks to the open-source community
- Icons provided by [Font Awesome](https://fontawesome.com)
- Styling powered by [TailwindCSS](https://tailwindcss.com)

## 📫 Support

For support, email kartikgarg.cse.2025@gmail.com or create an issue in the repository.