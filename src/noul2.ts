// Playground の 「ホットドックはサンドイッチか?」を API で

import { noul, TypeSafeClient } from "@typesafe-ai/sdk";

const client = new TypeSafeClient();
const response = await client.systemOne({
	state: {
		food: "hotdog",
		definition:
			"A hotdog is a cooked or smoked sausage (such as a frankfurter or wiener) with a mild flavor, heated and served inside a partially sliced long roll or bun"
	},
	questions: {
		category: noul("Is `food` a sandwich?", {
			true: "A sandwich is a food dish where a filling, such as meat, cheese, vegetables, or spread, is placed between structural starch",
			false:
				"The food has no bread enclosing a filling or uses only a single slice of bread, or uses a non-bread wrapper such as a tortilla, wafer, or cookie."
		})
	}
});

console.log(response.answers.category.noul);
