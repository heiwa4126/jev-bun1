// APIドキュメント(https://docs.typesafe.ai/api) にある
// choice, noul, score を1回の API 呼び出しで使用する例

import { choice, noul, score, TypeSafeClient } from "@typesafe-ai/sdk";

const states = ["Help! My payouts have been failing for 3 days."];

const client = new TypeSafeClient();

const responses = await Promise.all(
	states.map((state) =>
		client.systemOne({
			state,
			questions: {
				is_urgent: noul("Does this convey urgency?", {
					true: "Explicitly time-sensitive",
					false: "No urgency expressed"
				}),
				department: choice("Which team should handle this?", {
					billing: "Payments, invoicing, refunds",
					technical: "Bugs, outages, integrations",
					sales: "Pricing, upgrades, new accounts"
				}),
				frustration: score("How frustrated is the customer?", ["Calm", "Frustrated", "Very angry"])
			}
		})
	)
);

for (const [i, response] of responses.entries()) {
	console.log({
		state: states[i] ?? "",
		is_urgent: response.answers.is_urgent,
		department: response.answers.department,
		frustration: response.answers.frustration
	});
}
