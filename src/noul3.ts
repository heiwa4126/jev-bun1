// Playground の 「ホットドックはサンドイッチか?」を API で

import { noul, TypeSafeClient } from "@typesafe-ai/sdk";

const states = [
	{
		food: "hotdog",
		definition:
			"A hotdog is a cooked or smoked sausage (such as a frankfurter or wiener) with a mild flavor, heated and served inside a partially sliced long roll or bun"
	},
	{
		food: "Burger",
		definition:
			"A burger is a cooked patty served between the two halves of a sliced bread bun, often with toppings such as lettuce, tomato, cheese, and condiments."
	},
	{
		food: "Ice cream sandwich",
		definition:
			"An ice cream sandwich is a frozen dessert with a layer of ice cream between two cookies, wafers, or thin pieces of cake."
	},
	{
		food: "Apple",
		definition:
			"An apple is a round fruit with thin edible skin, crisp flesh, and a central core containing seeds. It is served whole here, without bread or a filling."
	},
	{
		food: "Oreo",
		definition:
			"An Oreo is a cookie made of two round chocolate-flavored wafers with a layer of sweet creme filling between them."
	},
	{
		food: "Taco",
		definition:
			"A taco is a corn or flour tortilla folded around a filling such as meat, beans, or vegetables, with the top left open."
	},
	{
		food: "Burrito",
		definition:
			"A burrito is a flour tortilla wrapped around fillings such as rice, beans, meat, or vegetables, with its ends folded in to enclose the filling."
	},
	{
		food: "Avocado toast",
		definition:
			"Avocado toast is a single slice of toasted bread topped with mashed or sliced avocado, with no second slice of bread covering it."
	},
	{
		food: "Sushi",
		definition:
			"The sushi here is a roll of vinegared rice and fish or vegetables wrapped in a sheet of nori seaweed and cut into bite-sized pieces."
	}
];

const client = new TypeSafeClient();

// 要素ごとの noul 値が欲しい場合は1件ずつ呼び出す。
const responses = await Promise.all(
	states.map((state) =>
		client.systemOne({
			state,
			questions: {
				category: noul("Is `food` a sandwich?", {
					true: "A sandwich is a food dish where a filling, such as meat, cheese, vegetables, or spread, is placed between structural starch",
					false:
						"The food has no bread enclosing a filling or uses only a single slice of bread, or uses a non-bread wrapper such as a tortilla, wafer, or cookie."
				})
			}
		})
	)
);

for (const [i, response] of responses.entries()) {
	console.log(states[i]?.food, response.answers.category.noul);
}
