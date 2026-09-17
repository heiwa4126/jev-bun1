// Playground の 「ホットドックはサンドイッチか?」を API で

import { noul, TypeSafeClient } from "@typesafe-ai/sdk";

const client = new TypeSafeClient();
const response = await client.systemOne({
	state: {},
	questions: {
		category: noul("Is hotdog a sandwich?", {
			true: "A sandwich is a food dish where a filling, such as meat, cheese, vegetables, or spread, is placed between structural starch",
			false:
				"The food has no bread enclosing a filling or uses only a single slice of bread, or uses a non-bread wrapper such as a tortilla, wafer, or cookie."
		})
	}
});

console.log(response.answers.category.noul);
