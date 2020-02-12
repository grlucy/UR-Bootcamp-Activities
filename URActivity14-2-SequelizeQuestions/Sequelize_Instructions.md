- **Instructions:**

- Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

- Answer: What is Sequelize?
  An ORM library that can be installed as an NPM

- Answer: What advantages does it offer?
  ORM functions are predefined so it saves a lot of time and increases readability

- Answer: How do I install it? How do I incorporate it into my app?
  npm i sequelize --save
  const { Sequelize } = require('sequelize');
  const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
  });

- Answer: What the heck is a Sequelize model? What role will it play?
  A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model. The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

- Answer: Let's say I have the below table in MySQL.

| Country     | PhoneCode | Capital   | IndependenceYear |
| ----------- | --------- | --------- | ---------------- |
| Afghanistan | 93        | Kabul     | 1919             |
| Belarus     | 375       | Misk      | 1991             |
| Netherlands | 31        | Amsterdam | 1648             |
| Oman        | 968       | Muscat    | 1970             |
| Zambia      | 260       | Lusaka    | 1964             |

- How would I model it in Sequelize?

```javascript
const Country = sequelize.define("Country", {
  Country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  PhoneCode: {
    type: DataTypes.INTEGER
  },
  Capital: {
    type: DataTypes.STRING
  },
  IndependenceYear: {
    type: DataTypes.INTEGER
  }
});
```

- How would I query for all the records where the Independence Year was less than 50 years ago?

```javascript
Country.findAll({
  where: {
    IndependenceYear: { \$gt: new Date().getFullYear() - 50 }
  }
});
```

- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

- Bonus: How do I use Sequelize to make changes to an existing table with data in it?
