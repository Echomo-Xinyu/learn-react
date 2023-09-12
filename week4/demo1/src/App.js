export default function App() {
  const groceries = [
    "Broccoli",
    "Kale",
    "Green beans",
    "Garnet sweet potatoes",
    "Tofu",
    "Lentils",
    "Beans",
    "Steel cut oats",
    "Blueberries",
    "Walnuts",
    "Chia seeds",
    "Strawberries",
    "Bananas",
    "Black beans",
    "Chickpeas",
    "Rolled oats",
    "Green peas",
    "Mushrooms",
    "Apples",
    "Japanese sweet potatoes",
    "Almonds",
    "Russet potatoes",
    "Cherries",
    "Peanut butter",
    "Dates",
    "Ground flaxseed",
    "Yukon gold potatoes",
    "Navy beans",
    "Nutritional yeast"
  ];

  return (
    <ul>
      {groceries.map((groceryItem) => {
        return <li key={groceryItem}>{groceryItem}</li>;
      })}
    </ul>
  );
}
