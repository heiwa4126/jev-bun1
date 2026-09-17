import { noul, TypeSafeClient } from "@typesafe-ai/sdk";

const client = new TypeSafeClient();
const response = await client.systemOne({
	state: {},
	questions: {
		category: noul("バナナはおやつに入りますか?", {
			true: "おやつとは、主な食事の間に食べる軽食や菓子、果物などで、食事の代わりではないものを指します",
			false:
				"主食や主菜として食べる食事、または飲み物だけであり、食事の間に食べる軽食や菓子、果物には当たりません"
		})
	}
});

console.log(response.answers.category.noul);
